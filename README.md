# Portfolio - Jan Oleksiak

Personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Deploy to GitHub Pages

Deployment is automated via GitHub Actions ([`.github/workflows/ghaction.yml`](.github/workflows/ghaction.yml)).

Every push to `main` triggers a workflow that:

1. Checks out the repo and sets up Node 20 (with npm cache)
2. Installs dependencies with `npm ci`
3. Builds the site with `npm run build`
4. Uploads `dist/` as a Pages artifact and deploys it with `actions/deploy-pages`

You can also run it manually from the **Actions** tab via **workflow_dispatch**.

### One-time setup

In the GitHub repo, go to **Settings → Pages** and set **Source** to **GitHub Actions** ([documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)). The custom domain (`CNAME`) is already committed in `public/`.

## Dependency security

Supply-chain attacks often rely on installing a malicious version within hours
of it being published. This project sets a cooldown in `.npmrc`:

```ini
min-release-age=14
```

npm will refuse to install any package version published less than 14 days ago.
The value is in **days** (no unit suffix). The window is relative to the current
date, computed dynamically at install time. Requires npm 11.10+.

## Customization

- **Profile photo:** Replace `public/profile.jpg`
- **Social preview:** Replace `public/og-image.jpg` (1200×630px recommended)
- **Favicon:** Edit `public/favicon.svg`
- **Content:** Edit components in `src/components/`

