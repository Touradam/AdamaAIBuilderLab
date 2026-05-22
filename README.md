# AI Mastery Program Website

A static multi-page website for advertising a 2-weekend AI education program. Built with HTML, CSS, and JavaScript.

## Overview

This website showcases a comprehensive AI education program designed to teach people how to understand AI, think critically about it, and build real tools that improve their lives without becoming dependent on AI.

## Pages

- **index.html** — Home: hero, program overview, and value proposition
- **about.html** — Philosophy, mission, and target audience
- **program.html** — Detailed 6-day curriculum with expandable day sections
- **schedule.html** — Timeline, format, and preparation details
- **contact.html** — Contact information and FAQ

## Project Structure

```
adama_AI_course/
├── index.html
├── about.html
├── program.html
├── schedule.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── data.js      # Program content
│   ├── layout.js    # Header and footer
│   └── main.js      # Page interactions and dynamic sections
├── robots.txt
├── sitemap.xml
└── README.md
```

## Getting Started

No build step required. Open `index.html` in a browser, or serve the folder locally:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then open http://localhost:8000

## Customization

### Content

Edit `js/data.js` to update:

- Program curriculum (weeks and days)
- Target audience descriptions
- Core philosophy statements
- FAQ entries

### Styling

Colors and layout are defined in `css/styles.css` (CSS variables at the top of the file).

### Contact & SEO

Update placeholders in the HTML pages and in:

- `js/layout.js` (footer email)
- `contact.html`
- `about.html` (instructor bio)
- `robots.txt` and `sitemap.xml` (base URL)

## Deployment

Upload all files to any static host (Netlify, GitHub Pages, S3, etc.). No build command needed.

## License

This project is private and proprietary.
