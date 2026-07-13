# CalculateMoney — calculatemoney.xyz

Free financial calculators for India. EMI, SIP, income tax (FY 2025-26), FD, RD, PPF, FIRE, SWP, GST and more — accurate methods, instant results, shareable links, no sign-up.

**Live site:** https://calculatemoney.xyz

## Stack

- [Eleventy 3](https://www.11ty.dev/) static site generator (Nunjucks templates)
- Vanilla JS calculators — no framework; shared runtime in `src/assets/js/app.js`
- [Chart.js](https://www.chartjs.org/) (CDN) for charts
- GitHub Pages + GitHub Actions for hosting and deployment

## Local development

```bash
npm install
npm start        # dev server at http://localhost:8080 with live reload
npm run build    # production build into _site/
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. **One-time setup:** in the repo's *Settings → Pages*, set *Source* to **GitHub Actions** (instead of "Deploy from a branch"). The custom domain (calculatemoney.xyz) and DNS need no changes — `src/CNAME` is copied into the build.

## Adding a calculator

1. Create `src/<slug>.njk` with `layout: layouts/calculator.njk`, a `permalink`, SEO front matter (`title`, `description`, `lede`, `updated`, `faqs`, `related`).
2. Build the widget with the `field()` macro (`src/_includes/macros.njk`) and the `CM.*` helpers (bind, inr, lineChart, doughnut, barChart, table).
3. Add the calculator to `src/_data/calcs.json` so it appears on the home page, footer and related-links.

## Content maintenance (important)

Financial rules change every year. Review after each **Union Budget** (February) and **GST Council** meeting:

- `income-tax-calculator` — slabs, rebate, surcharge (currently FY 2025-26 / Finance Act 2025)
- `gst-calculator` — slab structure (currently post-Sept-2025: 5/18/40 + 3% gold)
- `ppf-calculator` — quarterly rate (currently 7.1%)
- FD/RD FAQ TDS thresholds (currently ₹50k / ₹1L senior, per Budget 2025)

Update the `updated:` front matter whenever a page is revised.

## AdSense (when ready)

1. Apply once the site has been indexed and has steady traffic.
2. On approval, add the AdSense snippet + a certified consent management platform (CMP) to `src/_includes/layouts/base.njk`, and create `src/ads.txt` with your `pub-` ID (add a passthrough copy line in `.eleventy.js`).
3. Keep units below the results / within articles — never between inputs and results.
