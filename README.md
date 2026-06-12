# AI Mastery Program — Friends Beta Website

A static 2-page website for the free friends-only beta cohort of the AI Mastery Program. Built with HTML, CSS, and vanilla JavaScript — no build step.

## Pages

- **index.html** — Home: warm beta messaging, what you'll learn, hands-on callout, gated signup flow (Notion form)
- **success.html** — Get Ready: requirements, expectations, and 1-month outcomes

## Project Structure

```
├── index.html
├── success.html
├── css/
│   └── styles.css
├── js/
│   ├── data.js       # Site constants, cohort schedule, learn topics, gate allowed values
│   ├── layout.js     # Header and footer
│   ├── beta-gate.js  # Signup gate validation and modal
│   └── main.js       # Mobile nav, dynamic sections, form links
├── assets/
├── robots.txt
├── sitemap.xml
└── README.md
```

## Getting Started

Open `index.html` in a browser — no server required.

Optional local server:

```bash
python -m http.server 8000
```

## Customization

### Notion signup form

In `js/data.js`, set:

```js
const NOTION_FORM_URL = 'https://your-notion-form-url';
```

### Gate allowed values

Gate input constraints live in `js/data.js` (`betaGateDigits1`, `betaGateDigits2`, `betaGatePairs`). Validation logic is in `js/beta-gate.js`.

### Cohort schedule

Edit `cohortSchedule` in `js/data.js`. Home page elements with `data-cohort-start` update automatically.

### Styling

Colors and layout use CSS variables at the top of `css/styles.css` (Midnight Champagne theme).

## Deployment

Upload all files to any static host (Netlify, GitHub Pages, S3, etc.). GitHub Pages workflow is included in `.github/workflows/static.yml`.

## License

This project is private and proprietary.
