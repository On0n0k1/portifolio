# Portfolio

Source for Lucas Lemos's personal portfolio site — a React + TypeScript + Vite single-page app, built and deployed to GitHub Pages through a cross-repo CI/CD pipeline.

Live at: https://on0n0k1.github.io/

## Stack

- React 19 + TypeScript
- Vite 6 (static build, relative asset base so the output works from any subpath)
- Plain CSS (no framework) — design system tracked in [DESIGN.md](DESIGN.md)
- Three.js / Vanta for the animated background

## Project structure

```
src/
  App.tsx                     Page composition, section data (skills, experience, services, nav)
  index.css                   Design system: tokens, layout, components
  icons.tsx                   Inline SVG icon components
  components/
    ContributionHeatmap.tsx   Renders the GitHub contribution calendar
    FogBackground.tsx         Vanta.js animated fog background
  data/
    github-contributions.json Static snapshot of GitHub contribution data (see below)
  assets/rpg/                 UI-kit derived frame/corner art

scripts/
  fetch-github-contributions.mjs   Fetches contribution data via `gh api graphql`, writes the JSON snapshot

public/
  vite.svg                    Favicon
```

`PRODUCT.md` and `DESIGN.md` hold the product brief and design system respectively (read by the `impeccable` Claude Code skill used to build this site; not required to build or run it).

## Development

```
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run lint
npm run preview   # serve the production build locally
```

## GitHub contribution data

The contribution heatmap on the site is not fetched at runtime (that would require exposing a token to the browser). Instead, `npm run fetch:github` calls the GitHub GraphQL API and writes a static snapshot to `src/data/github-contributions.json`, which is imported at build time. Refreshing it locally requires a `GH_TOKEN` with `read:user` scope.

## CI/CD

Three independent GitHub Actions workflows, all in `.github/workflows/`:

### `ci.yml`
Runs on every push to `main`: lint + type-check + build. Sanity check only, doesn't deploy anything.

### `refresh-contributions.yml`
Runs daily on a schedule (`workflow_dispatch` also available). Re-fetches GitHub contribution data using the `CONTRIB_FETCH_TOKEN` secret and commits `src/data/github-contributions.json` back to this repo if it changed. Uses a schedule trigger rather than `push` specifically to avoid any risk of a commit-triggered loop.

### `deploy-pages.yml`
Runs on every push to `main` (also `workflow_dispatch`). This is the actual deploy:

1. Builds this repo (`npm run build`).
2. Clones `On0n0k1/On0n0k1.github.io` — the repo that actually serves GitHub Pages — using an SSH deploy key (`PAGES_DEPLOY_SSH_KEY` secret, granted write access to that repo only).
3. Wipes everything under that repo's `sites/` directory **except** `sites/projects/`, which other repositories push their own build output into independently. This pipeline never touches that path.
4. Copies this build's `dist/` output into `sites/`.
5. Commits and pushes the change back to `On0n0k1.github.io` using the default `GITHUB_TOKEN`.

In short: this repo is the source and build; `On0n0k1.github.io` is the actual GitHub Pages host. Nothing in this repo is served directly — the deploy step is what ships it.

### Required secrets

| Secret | Used by | Scope |
|---|---|---|
| `CONTRIB_FETCH_TOKEN` | `refresh-contributions.yml` | `read:user`, to query the contribution GraphQL API |
| `PAGES_DEPLOY_SSH_KEY` | `deploy-pages.yml` | Deploy key with write access to `On0n0k1/On0n0k1.github.io` only |
