# Deployment guide (auto-added)

This repository contains a Vite + React TypeScript portfolio in the `modern-developer-portfolio/` folder.

A GitHub Actions workflow has been added at `.github/workflows/deploy.yml` that builds the project and deploys the generated `dist/` folder to the `gh-pages` branch using peaceiris/actions-gh-pages.

How it works:
- On push to `main` (or manual dispatch) the workflow will:
  - Install Node.js and dependencies in the `modern-developer-portfolio` folder
  - Run `npm run build` to generate `modern-developer-portfolio/dist`
  - Publish `modern-developer-portfolio/dist` to the `gh-pages` branch

After the workflow completes successfully, your site will be available at:

https://Ariclenes.github.io/Portifolio-

Notes & next steps:
- The first run will create the `gh-pages` branch. You can check Actions > Workflows to see the build/deploy run and logs.
- If you prefer a user site (https://Ariclenes.github.io) instead of a project site, rename the repository to `Ariclenes.github.io` (I can help with that).
- If you want to use a custom domain, add a `CNAME` file to `modern-developer-portfolio/public` or create a `CNAME` in the published branch; I can add it if you provide the domain.
