# Graduation Ceremony 2025

A landing page for Ngô Văn Trung's graduation ceremony built with React + TypeScript + Vite.

## Key Features

- Real-time countdown to December 6, 2025 using `dayjs`.
- Hero section with avatar, honor badge, and quick contact CTA.
- Event information grid displaying time, date, and venue with Google Maps link.
- Memories carousel using `antd` Carousel with cinematic frame effects and stack preview.
- Optimized load-in/hover effects for both desktop and mobile, with component-based stylesheets.

## Main Technologies & Packages

- React 19 + TypeScript on Vite 7 bundler.
- `@ant-design/icons`, `antd` for iconography and carousel.
- `dayjs` for time calculations.
- ESLint 9 with flat configuration.

## Important Folder Structure

```
├── public/
│   └── images/
│       ├── avatar.jpeg
│       └── memories/{1..14}.jpeg
├── src/
│   ├── App.tsx              // Main section assembly
│   ├── App.css              // Global styles (gradient, animation)
│   ├── components/
│   │   ├── HeroSection.tsx  // Avatar, title, CTA
│   │   ├── CountdownTimer.tsx
│   │   ├── EventDetails.tsx
│   │   ├── MemoriesCarousel.tsx
│   │   └── Footer.tsx
│   └── assets/              // For additional fonts/static assets
```

## Running Locally

1. `npm install`
2. `npm run dev` and open `http://localhost:5173`
3. `npm run build` to generate `dist/`
4. `npm run preview` to verify the build

> Requires Node.js ≥ 18.

## Customizing Content

- Replace avatar at `public/images/avatar.jpeg`.
- Update hero information in `src/components/HeroSection.tsx`.
- Adjust countdown time in the `TARGET_DATE` constant (`src/components/CountdownTimer.tsx`).
- Edit content and Google Maps link in `src/components/EventDetails.tsx`.
- Replace memory images and captions by editing the `MEMORIES` array + corresponding images in `public/images/memories/`.

## Deploying to Vercel

- The repo includes `vercel.json` declaring `framework: "vite"`, `buildCommand: npm run build`, `outputDirectory: dist`, and rewrites all requests to `index.html`.
- Setup:
  1. `npm install -g vercel` then `vercel login`.
  2. Run `vercel` in the root directory to create/link project, accepting suggested values.
  3. Use `vercel --prod` (or Git integration) for subsequent deployments.
  4. For environment variables, configure in Vercel Dashboard > Settings > Environment Variables then redeploy.

## Linting Conventions

- `npm run lint` to check style/type rules.
- Configuration is in `eslint.config.js`. Additional extended rules can be enabled as suggested in the file if the project scales up.
