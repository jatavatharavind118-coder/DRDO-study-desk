# DRDO / GATE ECE Study Desk

Complete source of the existing GATE ECE, ISRO and DRDO study website, including lessons, topic quizzes, progress tracking, diagrams and exam papers.

## Run locally

No dependency installation or build is required. From this project folder run:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000 in your browser. Progress is stored in that browser.

## Files

- `dist/index.html`: website entry point
- `dist/*.js`: application, lessons, quizzes and curriculum
- `dist/style.css`: styles
- `dist/topic-images/` and `dist/topic-maps/`: lesson diagrams
- `dist/papers/`: exam papers and answer keys
- `.openai/hosting.json`: existing ChatGPT Sites deployment configuration

The `dist` directory contains the editable source for this buildless website. Publish its contents as the static website root.

## Upload to GitHub

Target repository: https://github.com/jatavatharavind118-coder/DRDO-study-desk

For an empty remote repository, after authenticating Git with GitHub:

```sh
git init -b main
git add .
git commit -m "Add complete DRDO study website"
git remote add origin https://github.com/jatavatharavind118-coder/DRDO-study-desk.git
git push -u origin main
```

If the remote already has commits, fetch and reconcile its history before pushing. GitHub Pages should serve the contents of `dist`, for example through a Pages workflow.

## Source snapshot

Copied from the existing Sites repository on 20 November 2026.
Source commit: `771f489a9e8c6c5b82db4ecefe2de2eca96a6a1c`.
All 169 original tracked files were copied and verified byte-for-byte.

## Deploy on Vercel

Import the GitHub repository, set Root Directory to `DRDO-Preparation-Website`, and use the Other framework preset. The included `vercel.json` serves `dist` directly; no dependency installation or build is needed.
