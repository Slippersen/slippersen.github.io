# Copilot Instructions

Personal landing page for ejsandal.no (custom domain via `CNAME`), served by GitHub Pages. It is plain static HTML/CSS: no build, tests, linter, or package manager.

## Deploy
- `.github/workflows/static.yml` deploys on every push to `master`. It uploads the entire repo root (`path: '.'`) as the Pages artifact, so any file committed at the root is publicly served.
- To preview locally, open `index.html` or run a static server (e.g. `python -m http.server`).

## Architecture
- `index.html` is the single page. `site.css` is the only stylesheet; it is linked as a relative path.
- Icons come from Font Awesome 5.10.2 on cdnjs, loaded with an SRI `integrity` hash.
- Metadata is spread across several files that must stay consistent: `<head>` meta/OG tags and the JSON-LD `Person` block in `index.html`, `site.webmanifest`, `browserconfig.xml`, `sitemap.xml`, and the icons in `img/`.

## Conventions
- `index.html` sets a strict Content-Security-Policy meta tag (`default-src 'none'`). It allows only `'self'` for img, script, connect and manifest, and `'self'` plus `https://cdnjs.cloudflare.com/` for style and font. Adding inline scripts or styles, or any new external origin, requires updating that policy.
- If you change the Font Awesome version or URL, update the SRI hash too.
- The canonical URL is `https://ejsandal.no/`. Use it in OG, JSON-LD, and sitemap entries.
