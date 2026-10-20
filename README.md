# TM Nexus Group website

Static website for TM Nexus Group. No build step is needed.

## Files

| Path | What it is |
|---|---|
| `index.html` | All pages (Home, About, Portfolio, Insights, Contact, Admin log in, Privacy, Terms). Pages switch with `#links`, e.g. `index.html#contact`. |
| `assets/css/styles.css` | All styles, including light/dark theme colours, layout and animations. |
| `assets/js/main.js` | Page routing, service cards, insights articles, forms, theme toggle, hero animation, services ticker, scroll animations. |
| `assets/img/logo-mark.svg` | Logo mark, black (for light backgrounds). |
| `assets/img/logo-mark-white.svg` | Logo mark, white (for dark backgrounds). |
| `assets/img/favicon.svg` | Browser tab icon. |

## View it

Double-click `index.html`, or serve the folder locally:

```
npx serve .
```

The Montserrat font loads from Google Fonts, so an internet connection is needed for it. Without one, a similar system font is used.

## Editing content

- **Services**: edit the `SERVICES` list near the top of `assets/js/main.js`.
- **Insights articles**: edit the `POSTS` list in `assets/js/main.js`.
- **Contact details**: search `index.html` for `076 225 6601` and `info@tmnexusgroup.co.za`.
- **Social links**: the footer icons point to each platform's home page. Replace the `href` values in `index.html` with your profile links.

## Still to connect before going live

- **Contact form**: prepares the enquiry for the visitor to copy or email. Connect it to a form service (e.g. Formspree) or your own API to receive submissions directly.
- **Newsletter**: validates the email but does not store it. Connect it to Mailchimp, Brevo or similar.
- **Admin log in**: the page is a front-end only. Connect it to a real sign-in service (e.g. Microsoft Entra ID) once hosted.
- **Privacy Policy / Terms**: starting templates; have them reviewed.

## Hosting

Any static host works. On Azure: create a Static Web App and point it at this folder (no build command, app location `/`).
