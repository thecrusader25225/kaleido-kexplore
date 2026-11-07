# Kaleido — Event discovery & registration

A responsive event discovery frontend built for the Kaleido web-design assignment. Users can browse curated events, search and filter the catalogue, view event details, and register for events. The project uses local browser storage for registrations and theme preferences; it does not require a backend.

## Features

- Responsive landing page, event explorer, event details, registration, about, and contact pages.
- 12 sample events across Technology, Music, Business, Workshops, Sports, and Art & Culture.
- Search across event title, category, venue, location, and description; combined category/status filters and sorting.
- Dynamic event routes and not-found handling.
- Registration form with name, email, and phone validation; duplicate email/event registration prevention.
- Registration records and theme preference persisted in `localStorage`.
- Light/dark theme, live event countdown, responsive mobile navigation, and toast feedback.
- Contact form validation. It intentionally does not send email because this is a frontend-only demo.

## Tech stack

React, Vite, JavaScript (ES modules), React Router, Tailwind CSS 3, Lucide React, and custom responsive CSS.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL (normally `http://localhost:5173`).

## Code formatting

The project uses Prettier with a two-space indentation style.

```bash
npm run format
npm run format:check
```

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deployment

### Vercel
1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. Vercel handles SPA route fallback for standard Vite deployments.

### Netlify
1. Import the GitHub repository in Netlify.
2. Build command: `npm run build`; publish directory: `dist`.
3. The included `public/_redirects` file routes SPA paths to `index.html`.

### GitHub Pages
1. Install `gh-pages` as a dev dependency: `npm install -D gh-pages`.
2. Set Vite's `base` in `vite.config.js` to `'/REPOSITORY_NAME/'`.
3. Add `"predeploy": "npm run build"` and `"deploy": "gh-pages -d dist"` to `scripts` in `package.json`.
4. Run `npm run deploy`, then enable GitHub Pages from the `gh-pages` branch in repository settings.
5. For React Router on GitHub Pages, configure a 404 fallback (copy `dist/index.html` to `dist/404.html` after building) or use hash-based routing.

## GitHub submission

Create an empty GitHub repository, then run from this folder:

```bash
git init
git add .
git commit -m "Build Kaleido event management website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kaleido-events.git
git push -u origin main
```

Replace the remote URL with your repository URL.

## Project structure

```text
kaleido-events/
├── public/
│   ├── _redirects
│   └── favicon.svg
├── src/
│   ├── components/       # Navigation, footer, event cards, filters, countdown, toast
│   ├── context/          # Theme, registrations, notifications
│   ├── data/             # Sample event catalogue
│   ├── pages/            # Home, events, detail, registration, about, contact, 404
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## LocalStorage

- `ke-theme`: `light` or `dark`.
- `ke-registrations`: array of registration records. Each record contains a generated registration ID, event ID/title, participant name, email, phone, and creation timestamp.

This is browser-local demo persistence, not a secure registration database. Data is specific to the current browser/device and can be edited by the user. Do not use this implementation to collect real personal information.

## Notes and future improvements

- Event data is currently a local JavaScript array. A production system should use an API and database.
- Registration confirmation is local only; no email, payment, or seat inventory is processed.
- Event photography and Google Fonts are loaded from external providers, so internet access is needed for those assets.
- Potential improvements: backend registration API, authentication, email confirmations, payment integration, organizer dashboard, real seat inventory, and automated accessibility/browser tests.
