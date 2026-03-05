# portfolio-website

## Run locally

```bash
npm install
npm run dev
```

## Deploy

### Vercel

- Connect the repo to [Vercel](https://vercel.com); use default settings.
- Build uses base `/`, so the site works at the root URL.

### GitHub Pages (project site: `username.github.io/portfolio-website`)

- **Build:** run `npm run build:gh` (sets base to `/portfolio-website/`).
- In GitHub: **Settings → Pages → Source**: deploy from the branch that contains the build (e.g. `gh-pages` or your main branch if you use a GitHub Action that pushes `dist`).
- If using a workflow, set the build command to: `npm run build:gh` and publish the `dist` folder.
- Direct links and refresh on routes (e.g. `/portfolio-website/about`) work because the build includes a `404.html` copy of the app.
