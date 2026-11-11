# Yaakyi Pricing

Responsive implementation of the Yaakyi Pricing page using Next.js, React, TypeScript and Tailwind CSS.

## Project structure

- `client/` — Next.js application source code.
- `backstop.json` — BackstopJS visual regression configuration.
- `backstop_data/` — visual references, test screenshots and reports.
- `client/public/tests/pricing/` — supplied Desktop, Tablet and Mobile SVG references.

## Requirements

- Node.js 20.9 or later
- npm
- Chromium for BackstopJS visual tests

## Installation

From the project root:

```bash
cd client
npm ci
```

## Run the application

```bash
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
cd client
npm run build
```

To run the production build:

```bash
npm run start
```

## Visual regression tests

The BackstopJS configuration is located at the project root.

1. Start the development server in one terminal:

```bash
npm --prefix client run dev -- --port 3000
```

2. In another terminal, from the project root, run:

```bash
PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium ./client/node_modules/.bin/backstop test
```

3. Open the HTML report:

```bash
xdg-open backstop_data/html_report/index.html
```

The configuration tests Desktop, Tablet and Mobile viewports against the supplied SVG references.

**Important:** Do not run `backstop reference` or `backstop approve` during normal verification. Those commands can replace the visual baselines. The supplied reference files must remain unchanged.

## Final visual test result

Test run: November 11, 2026.

- Desktop: PASS
- Tablet: PASS
- Mobile: PASS
- Total: 3 passed, 0 failed

Report files:

- `backstop_data/bitmaps_test/20261111-024352/report.json`
- `backstop_data/html_report/index.html`

The configured BackstopJS mismatch threshold is 30%.

## Implementation notes and limitations

- Responsive pricing cards and feature lists were implemented.
- The supplied SVG visual references were preserved.
- No additional runtime dependencies were introduced for the page implementation.
- The Figma design file could not be inspected directly through the connected Figma account. The supplied SVG exports were therefore used as the visual comparison references.

## Design source

[Figma — Yaakyi Pricing](https://www.figma.com/design/eD8zjosyh26alBPiJoUnHD/Untitled?node-id=0-1)
