# La Poetisa del Semáforo

Portfolio site for **Andrea Vaca Cifuentes**, a poet from Ambato, Ecuador, and her poetry collection *La Luz Verde*. The site is in Spanish.

The design follows the traffic light in her name: red is the brand color, and sections, poems and the hero cycle through *rojo, amarillo y verde*.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) and React 19, TypeScript
- [Once UI](https://docs.once-ui.com) (`@once-ui-system/core`) for layout, components, theming and effects
- [lucide-react](https://lucide.dev) for the icons Once UI doesn't include
- [Vercel Analytics](https://vercel.com/analytics)

There is no Tailwind. Styling uses Once UI props plus a few small animations in `app/globals.css`.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev     # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (all pages are prerendered as static) |
| `npm run start` | Serves the production build |
| `npm run lint` | ESLint |

Once UI also ships a checker for its own conventions:

```bash
npx once-ui-validate-ai-code app/components/*.tsx
```

## Project structure

```
app/
  layout.tsx              Root layout: Once UI CSS, fonts, providers, site metadata
  page.tsx                Home page (stacks the sections below)
  poemas/page.tsx         Poems page
  opengraph-image.tsx     Social share images, generated at build time
  twitter-image.tsx       (the poems page has its own pair in poemas/)
  globals.css             Small custom animations (floating icons, drop cap, cursor…)
  components/             One file per section, plus shared pieces
  resources/
    content.ts            Poems and shared text styles
    once-ui.config.ts     Theme: colors, light/dark, page background
    icons.ts              Extra lucide icons registered with Once UI
    og-image.tsx          Shared design for the social share images
public/                   Photos and book covers
```

Most sections are server components. Only the parts that need the browser run as client components: the hero (traffic light), typewriter, scroll reveals, theme switcher, scroll-to-top and copy button.

## Editing content

### Add a poem

Add an entry to `poems` in `app/resources/content.ts`:

```ts
{
  title: 'Título del poema',
  content: `Primer verso
segundo verso…`,            // line breaks are kept exactly as written
  author: 'Andrea Vaca Cifuentes',
  place: 'Ambato, 2015',     // optional
},
```

The poems page picks it up automatically: the poem count, the index, its anchor link, its color (red, amber, green, repeating) and the copy button. The home page preview always shows the first poem.

### Other text

The rest of the text lives in its section component, for example `PrologueSection.tsx`, `BookReviewSection.tsx` or `BookSection.tsx` (book details). Gallery photos and captions are listed at the top of `Gallery.tsx`.

### Images

Put new photos in `public/` and reference them as `/filename.jpg`. Gallery photos are shown uncropped, so any aspect ratio works.

## Theming

`app/resources/once-ui.config.ts` controls the theme. The brand color is `red`. Visitors can switch between light, dark and system themes from the header. First visits start dark, and dark mode uses a pure black background.

Use Once UI color tokens such as `brand-strong`, `warning-alpha-weak` or `success-strong` rather than hex values, so colors adapt to both themes. The traffic-light sections use `brand` (red), `warning` (amber) and `success` (green).

## Social share images

`opengraph-image.tsx` and `twitter-image.tsx` generate 1200×630 PNGs at build time with `next/og`. The shared design lives in `app/resources/og-image.tsx` and uses the Geist font files from the `geist` package. On Vercel, Next.js turns the image paths into absolute URLs using the deployment's domain. Local builds warn that `metadataBase` isn't set; that warning is harmless.

To preview them, run the dev server and open `/opengraph-image` or `/poemas/opengraph-image`.

## Deployment

The site deploys on [Vercel](https://vercel.com). Pushes to `main` go to production, and pull requests get preview deployments.

## Credits

- Poems and texts: Andrea Vaca Cifuentes
- Prologue: Dr. Luis Noé Mayorga
- Review: Verónica Chávez Gómez
- Book illustrations: Miguel Ángel Cifuentes
