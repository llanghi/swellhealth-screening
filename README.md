# Swell Health Screening Tools

Static website for Swell Health screening questionnaires.

## Current pages

- `index.html` — screening tools home page
- `epds.html` — Edinburgh Postnatal Depression Scale
- `style.css` — shared styling matching the Swell Health Squarespace palette and fonts

## GitHub Pages setup

1. Create a public repository named `swellhealth-screening`.
2. Upload all files in this folder to the repository root.
3. Go to repository **Settings → Pages**.
4. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save.
6. GitHub will provide a temporary URL such as:
   `https://YOURUSERNAME.github.io/swellhealth-screening/`

## Later custom subdomain

When ready, add a `CNAME` file containing:

```text
screening.swellhealth.com.au
```

Then add the matching DNS CNAME record at the domain provider.
