# Wael Melki — AI/ML & ICT Engineering Portfolio

A responsive, static React portfolio with a premium dark design, built for international recruiters and engineering teams.

**Target URL:** https://waelmelkimelki.github.io/

## Stack

React, TypeScript, Vite, Tailwind CSS (Vite integration), Motion for React and Lucide React. Dependency versions are recorded in `package.json`; `package-lock.json` locks the installed dependency tree. Node.js 24 is used in CI. No backend, paid APIs, analytics trackers, external fonts, subscription or Student Developer Pack is required.

## Local development

```bash
npm ci
npm run dev
```

Validation and production preview:

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

`npm run check` runs type checking, linting and the production build. Vite emits `dist/`. Never commit `node_modules/`, `dist/`, credentials or private datasets.

## GitHub Pages setup

1. Open **Settings → Pages → Build and deployment** in this repository.
2. Set **Source** to **GitHub Actions**. Keep this repository public for free hosting on GitHub Free.
3. Merge the implementation pull request into `main` if not already merged.
4. In **Actions → Validate and deploy portfolio**, run the workflow on `main` (or re-run a failed deployment after enabling Pages).
5. Wait for both `build` and `deploy` to succeed; open https://waelmelkimelki.github.io/.

No custom domain or payment details are needed. The connector used to build this site cannot change Pages settings. If configuration fails with “Get Pages site failed”, complete step 2 and re-run the workflow.

The workflow validates pull requests without deploying them. Pushes to `main` and manual runs on `main` build with `npm ci`, typecheck, lint and Vite. The official checkout, setup-node, configure-pages, upload-pages-artifact and deploy-pages actions publish `dist/`. Only the deployment job receives `pages: write` and `id-token: write`. Deployments do not cancel an in-progress run.

Vite uses `base: '/'` because this is a user site, not a project subdirectory. Navigation uses section anchors and native expandable project details; no SPA routing fallback is required.

## Structure

- `src/data/portfolio.ts`: typed profile, project case studies, experience, skills and training.
- `src/components/`: navigation, hero, decorative SVG artwork, about, experience, projects, skills, education, contact and footer.
- `src/App.tsx`: page composition and reduced-motion configuration.
- `src/index.css`: Tailwind entry, visual system, responsive rules and reduced-motion overrides.
- `public/`: favicon, robots file and sitemap.
- `index.html`: title, SEO description, canonical URL and Open Graph metadata.
- `.github/workflows/deploy.yml`: PR validation and Pages deployment.
- `docs/CONTENT_SOURCES.md`: content provenance and publication boundaries.

## Update content

Edit `src/data/portfolio.ts`. No UI code is needed to change project descriptions, skills or experience. All current project repository links were checked against the GitHub account.

`profile.linkedin` and `profile.resume` intentionally start empty; their links are omitted rather than shown as dead buttons. Add a verified full LinkedIn URL. For a resume, place an approved public PDF in `public/resume.pdf`, then set `resume: '/resume.pdf'`. Review its personal information before publication. The contact email was verified from the connected GitHub profile.

Training names are supplied by the owner, presented as training rather than independently verified certifications. Credential URLs, dates, expertise levels and performance claims are not fabricated. Add credential links only after verification.

## Accessibility and performance

Semantic sections and headings; skip link; visible keyboard focus; labelled mobile navigation with Escape dismissal; native keyboard-operable `details` case studies; responsive layouts at 720px and 1000px; reduced-motion handling in Motion and CSS. Decorative SVG illustrations are hidden from assistive technology. System fonts and local vector graphics avoid external image/font requests. No heavy animation framework beyond the requested Motion dependency, canvas render loop or backend contact form.

## Verification scope

Executed checks and known limits are recorded in `docs/VALIDATION.md`. Browser-based viewport and interaction verification requires a browser QA surface; do not interpret a successful production build as proof of visual or accessibility compliance. Remote publication is successful only when the Actions deployment succeeds.
