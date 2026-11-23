import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {gunzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('../',import.meta.url));
const directory=path.join(root,'scripts','pyq-assets');
const allowed=path.join(root,'dist','pyq-figures')+path.sep;
let count=0;
for(const name of fs.readdirSync(directory).filter(name=>name.endsWith('.tar.gz')).sort()){
 const tar=gunzipSync(fs.readFileSync(path.join(directory,name)));
 for(let offset=0;offset+512<=tar.length;){
  const header=tar.subarray(offset,offset+512);if(header.every(byte=>byte===0))break;
  const field=(start,length)=>header.subarray(start,start+length).toString('utf8').replace(/\0.*$/s,'').trim();
  const filename=field(0,100),prefix=field(345,155),type=field(156,1);
  const size=Number.parseInt(field(124,12)||'0',8);
  const target=path.resolve(root,prefix?prefix+'/'+filename:filename);
  if(!target.startsWith(allowed)||!target.endsWith('.png')||!['','0'].includes(type)||!Number.isSafeInteger(size)||size<0||offset+512+size>tar.length)throw Error('Invalid question-image archive entry');
  fs.mkdirSync(path.dirname(target),{recursive:true});
  fs.writeFileSync(target,tar.subarray(offset+512,offset+512+size));count++;
  offset+=512+Math.ceil(size/512)*512;
 }
}
for(const entry of JSON.parse(fs.readFileSync(path.join(directory,'manifest.json'),'utf8'))){
 const target=path.resolve(root,entry.path);if(!target.startsWith(allowed)||createHash('sha256').update(fs.readFileSync(target)).digest('hex')!==entry.sha256)throw Error('Question diagram integrity check failed');
}
console.log(`Prepared ${count} question diagrams without resizing or recompression.`);
