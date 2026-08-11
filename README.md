# Farmrite Website

A static, multi-page website for Farmrite, an H-2A seasonal farm worker recruitment agency focused on South African applicants. Built with plain HTML, CSS, and JavaScript — no build step required.

## Pages

- `index.html` — Home (hero, pillars, About preview, How it Works summary, current job openings, Contact)
- `apply-now.html` — Apply Now (links to the Google Form)
- `jobs.html` — Full list of H-2A job types Farmrite recruits for
- `how-it-works.html` — The full 7-step placement process, with South Africa–specific detail (SAPS police clearance, embassy interview, etc.)
- `about.html` — About Us
- `faq.html` — Frequently asked questions, including South Africa–specific H-2A questions
- `resources.html` — Links to official SA/US government resources plus state driver/CDL handbooks
- `404.html` — Custom not-found page

## SEO features

- Per-page `<title>`, meta description, canonical URL, Open Graph, and Twitter Card tags, all keyed to `https://burgergw.github.io/farmrite-website/` (the default GitHub Pages project URL — no custom domain is configured right now; see "Switching to a custom domain later" if that changes).
- JSON-LD structured data: `EmploymentAgency` (site-wide), `FAQPage` (faq.html, matches the visible Q&A exactly), `ItemList` (jobs.html), and `BreadcrumbList` on inner pages.
- `robots.txt` and `sitemap.xml` at the site root.
- A CSS-only sticky "Apply Now" bar on mobile (`body.has-sticky-cta` + `.sticky-cta`) keeps the primary conversion action reachable at all times on small screens.
- `site.webmanifest` + a real PNG icon set (`icons/favicon-48.png`, `icons/favicon-512.png`, `icons/apple-touch-icon.png`) derived from the Farmrite logo, for browser tabs and mobile "add to home screen."

**Intentionally not implemented:** `JobPosting` structured data on `jobs.html`. That schema is meant for real, individual, currently-open job ads (with concrete location, dates, and salary) — using it for generic job *type* descriptions would violate Google's structured data guidelines and risks a manual action. A plain `ItemList` is used there instead.

## Before you publish

A few things are still placeholders and should be updated with Farmrite's real details before this goes live:

- **Contact section** (`index.html`, inside `<section id="contact">`): the email addresses use the `@farmrite.example` placeholder domain, and the phone/WhatsApp/address fields are unfilled. Replace these with real details.
- Double‑check the **Apply Now** Google Form link (`https://forms.gle/g9MasEvCfwyTXFxf9`) is still the correct, active form.
- The **resources.html** links to South African/US government sites (Home Affairs, SAPS, U.S. Embassy South Africa) point at top-level official domains rather than deep-linked subpages, since those move around — confirm the specific passport/police-clearance/visa subpages before publishing and consider linking directly to them.
- If the repo is renamed, or pushed under a different GitHub username than `burgergw`, update the base URL everywhere it's hardcoded: every page's `<link rel="canonical">` and `og:url`/`twitter` tags, every JSON-LD `@id`/`url`/`logo`/breadcrumb `item`, `robots.txt`'s `Sitemap:` line, and every `<loc>` in `sitemap.xml`.
- `sitemap.xml`'s `<lastmod>` dates should be bumped whenever a page's content changes meaningfully.
- The hero background photo is still a generic stock image from Pexels — consider swapping in a real, licensed photo relevant to South African H-2A workers. (The Open Graph/Twitter share image now uses the Farmrite logo instead of the stock photo.)

## Logo

`images/farmrite-logo.png` and the files in `icons/` are all generated from the source logo at `FARMRITE_LOGO.jpeg` (South African-flag ring + a checkmark rendered in the US flag) — the white background was keyed out to transparency so it drops cleanly onto both the cream page background and the dark green header/footer. If the source logo changes, regenerate:
- `images/farmrite-logo.png` — trimmed, transparent, used in the header, footer, and About page.
- `images/og-image.jpg` — logo centered on the brand cream background, 1200×630, used for Open Graph/Twitter share previews.
- `icons/favicon-48.png`, `icons/favicon-512.png` — transparent, used as the browser-tab favicon and in `site.webmanifest`.
- `icons/apple-touch-icon.png` — 180×180, flattened onto the cream brand background (iOS doesn't support transparent home-screen icons).

## Hosting on GitHub Pages

This site is currently set up for the default GitHub Pages project URL — no custom domain — at `https://burgergw.github.io/farmrite-website/`.

1. Create a GitHub repository named `farmrite-website` under the `burgergw` account (or update the URLs per the note above if the name/owner differs) and push all of these files to it, keeping the folder structure as-is (`css/`, `js/`, `icons/`, `images/`, and the `.html`/root files at the repository root).
2. In the repository, go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to "Deploy from a branch."
4. Choose the branch (usually `main`) and the `/ (root)` folder, then save.
5. GitHub will publish the site at `https://burgergw.github.io/farmrite-website/` within a minute or two. "Enforce HTTPS" is on by default for `github.io` URLs.

### Switching to a custom domain later

1. Add a file named `CNAME` at the repository root containing just the domain (e.g. `farmrite.co.za`).
2. In **Settings → Pages**, enter the same domain under "Custom domain" and follow GitHub's DNS instructions (an `A`/`ALIAS`/`ANAME` record for the apex domain pointing at GitHub Pages, or a `CNAME` record at your DNS provider if using a `www` subdomain).
3. Update the hardcoded base URL (see "Before you publish" above) from `https://burgergw.github.io/farmrite-website/` to `https://<yourdomain>/` across the canonical/OG/JSON-LD tags, `robots.txt`, and `sitemap.xml`, and set `start_url`/`scope` back to `/` in `site.webmanifest` if you want (`.` still works fine either way).
4. Enable "Enforce HTTPS" once GitHub finishes issuing the certificate for the new domain.

## Structure

```
index.html
apply-now.html
jobs.html
how-it-works.html
about.html
faq.html
resources.html
404.html
robots.txt
sitemap.xml
site.webmanifest
css/
  styles.css
js/
  script.js
icons/
  favicon-48.png
  favicon-512.png
  apple-touch-icon.png
images/
  farmrite-logo.png
  og-image.jpg
```

No external build tools, frameworks, or dependencies are required — only three Google Fonts loaded via CDN link tags in each page's `<head>` (trimmed to only the weights actually used, for faster mobile loading).
