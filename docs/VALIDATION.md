# Validation record

Local validation on 21 October 2026:

- `npm ci`: succeeded using the committed lockfile.
- `npm run typecheck`: passed, strict TypeScript, no emit.
- `npm run lint`: passed.
- `npm run build`: passed with Vite 8.3.4. Production output: HTML 1.12 kB, CSS 18.58 kB, JavaScript 378.83 kB (121.22 kB gzip).
- `npm run check:content`: rendered the React tree without an HTTP listener; checked 13 unique IDs, all rendered internal anchor targets, a single h1, four native expandable case studies, the verified email link, no empty links, built asset existence and expected workflow actions/commands. Passed.
- `git diff --check`: passed.

The initial type check caught brand icons removed from the installed Lucide version and missing Vite CSS module typing. Both were corrected and checks re-run successfully.

Responsive CSS was reviewed at the 720px and 1000px breakpoints, including fluid hero text, single-column mobile cards, wrapping technology tags, mobile navigation and contact text. Reduced-motion CSS and Motion settings were reviewed.

**Not executed:** browser viewport screenshots, live keyboard/screen-reader interaction, automated accessibility auditing or external demo playback. The environment did not expose its required browser QA capability. Code review and server rendering do not replace browser verification.

GitHub deployment depends on Settings → Pages → Source: GitHub Actions. Consult the Actions run for the authoritative remote deployment status. The source checks do not claim that Pages has been enabled or that the site is live.
