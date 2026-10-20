# TM Nexus Group website

Static website for TM Nexus Group (tmnexusgroup.co.za). No build step is needed. Deploy the whole folder to Vercel.

## Files

| Path | What it is |
|---|---|
| `index.html` | All pages (Home, About, Portfolio, Insights, Contact, Admin log in, Privacy, Terms). Pages switch with `#links`, e.g. `/#contact`. Includes SEO, social sharing tags and Google business data (JSON-LD). |
| `assets/css/styles.css` | All styles: light/dark theme colours, layout, animations. |
| `assets/js/main.js` | Business settings, packages, FAQ, services, articles, forms, theme toggle, animations. |
| `assets/img/logo-mark.svg` / `logo-mark-white.svg` | Logo mark in black and white. |
| `assets/img/favicon.svg` | Browser tab icon. |
| `assets/img/og-image.png` | Image shown when the site link is shared on WhatsApp, LinkedIn, Facebook. |
| `404.html` | Page shown for broken links. |
| `robots.txt`, `sitemap.xml` | Tell Google what to index. |
| `vercel.json` | Vercel settings: clean URLs, caching and security headers. |

## Fill in your details (top of `assets/js/main.js`)

```js
const SETTINGS = {
  legalName: '',          // 'TM Nexus Group (Pty) Ltd'
  regNumber: '',          // CIPC registration number
  vatNumber: '',          // only if VAT registered
  bbbee: '',              // e.g. 'Level 1 B-BBEE contributor'
  address: '',            // physical or postal address
  founderPhoto: '',       // 'assets/img/mufunwa.jpg' (add the photo to assets/img)
  whatsapp: '27762256601',
  formEndpoint: '',       // quote form endpoint (see below)
  newsletterEndpoint: ''  // newsletter endpoint (see below)
};
```

Empty values are hidden. The business details appear in the footer once filled in.

- **Prices**: in `PACKAGES` (same file), set `price: 3500` to show "From R3 500". Leave `''` to show "Quote on request". Review the package contents too.
- **FAQ**: edit the `FAQS` list. Review the answers (timelines, payment terms) so they match how you work.
- **Services**: edit `SERVICES`. **Articles**: edit `POSTS` and check the compliance facts before publishing.
- **Social links**: replace the `href` values of the footer icons in `index.html` with your profile links.

## Make the forms send to your email

1. Create a free account at formspree.io and create two forms (Quote, Newsletter).
2. Paste each form URL into `formEndpoint` and `newsletterEndpoint`.
3. Redeploy. Submissions now arrive in your email. If sending fails, visitors still get the copy/email fallback.

## After deploying

- Add the site to **Google Search Console** and submit `https://tmnexusgroup.co.za/sitemap.xml`.
- Create a **Google Business Profile** so you appear on Google Maps.
- Admin log in is still front-end only; connect it to a real sign-in service before using it.
- Have the Privacy Policy and Terms reviewed.

## Preview locally

Double-click `index.html`, or run `npx serve .` in this folder.
