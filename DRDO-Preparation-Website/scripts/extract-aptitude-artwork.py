"""Extract source-question SVGs without rasterizing or recompressing paper artwork.

Requires PyMuPDF. Pass a JSON export of aptitudePyqs as the first argument.
The original paper files are opened read-only and never saved or modified.
"""
import json
import re
import sys
from pathlib import Path
import pymupdf

root = Path(__file__).resolve().parents[1] / 'dist'
rows = json.loads(Path(sys.argv[1]).read_text())
out = root / 'aptitude-pages'
out.mkdir(exist_ok=True)
manual = {
    ('EC2016.pdf', 23, 6): (20, 270),
    ('EC2016.pdf', 23, 7): (270, 480),
    ('EC2016.pdf', 23, 8): (480, 565),
    ('EC2016.pdf', 23, 9): (565, 710),
    ('EC2020.pdf', 3, 10): (10, 305),
}
manifest = []
for row in rows:
    if row['file'].startswith('https:'):
        continue
    with pymupdf.open(root / 'papers' / row['file']) as doc:
        page = doc[row['page'] - 1]
        width, height = page.rect.width, page.rect.height
        labels = []
        for block in page.get_text('dict')['blocks']:
            for line in block.get('lines', []):
                text = ''.join(span['text'] for span in line['spans']).strip()
                if re.search(r'carry|marks? each', text, re.I):
                    continue
                match = re.match(r'(?:Q\.\s*(?:No\.\s*)?|Question Number\s*:\s*)(\d+)\b', text)
                if match:
                    labels.append((int(match[1]), line['bbox'][1]))
        identity = row['file'], row['page'], row['number']
        if identity in manual:
            top, bottom = manual[identity]
        else:
            positions = [y for number, y in labels if number == row['number']]
            if not positions:
                raise ValueError(f'Missing question label, needs visual review: {identity}; labels={labels}')
            top = min(positions) - 10
            following = [y - 10 for number, y in labels if y > top + 15 and number != row['number']]
            bottom = min(following) if following else height - 28
        top, bottom = max(0, top), min(height, bottom)
        assert bottom - top > 35, identity
        # Cropping changes only the viewport, retaining vector paths and source raster samples.
        crop = pymupdf.Rect(0, top, width, bottom)
        page.set_cropbox(crop)
        svg = page.get_svg_image(text_as_path=True)
        assert '<script' not in svg.lower()
        target = out / Path(row['sourceImage']).name
        target.write_text(svg)
        manifest.append({'id': row['id'], 'file': row['file'], 'page': row['page'],
                         'crop': list(crop), 'asset': target.name, 'bytes': target.stat().st_size})
Path(sys.argv[1]).with_name('aptitude-artwork-manifest.json').write_text(json.dumps(manifest, indent=2))
print(f'Extracted {len(manifest)} lossless source-question SVGs; {sum(r["bytes"] for r in manifest):,} bytes.')
