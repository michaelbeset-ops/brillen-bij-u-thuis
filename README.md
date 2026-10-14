# Brillen bij u thuis

Website van Brillen bij u thuis, de opticien aan huis door midden en zuid Nederland. Gebouwd door [Sitefront](https://www.sitefront.nl) met Astro en Tailwind.

## Werken aan de site

```sh
npm ci
npm run dev        # lokaal op http://localhost:4504
npm run build      # definitieve build voor brillenbijuthuis.nl
```

`npm run build:voorstel` maakt de voorstelversie (noindex) voor voorstel.sitefront.nl.

## Live zetten

Elke push naar `main` bouwt en publiceert de site via GitHub Actions (`.github/workflows/deploy.yml`), in 1 à 2 minuten.
Zolang `PREVIEW: 'true'` staat, is het een preview op michaelbeset-ops.github.io (noindex). Voor brillenbijuthuis.nl:
zet `PREVIEW` op `'false'`, stel de DNS in en vul het domein in onder Settings > Pages.

## Inhoud

- Teksten en gegevens: `src/data/site.ts` (contact, openingstijden, reviews, veelgestelde vragen).
- Pagina's: `src/pages/` (home, privacy, 404, plus `robots.txt`, `llms.txt` en `security.txt`).
- Foto's: `src/assets/`, herkomst in `src/assets/BRONNEN.txt`.
- Keuzes en geschiedenis: `PLAN.md`.
