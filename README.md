# steve.engineer

Source for [steve.engineer](https://steve.engineer) - Steve Bullock: engineer, educator, other things.

Built with [Astro](https://astro.build) and Tailwind, starting from the
[Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus) theme. Hosted on
Cloudflare Pages; every push to `master` deploys automatically.

## Working on the site

Requires Node 22 (see `.nvmrc`).

```bash
npm install
npm run dev       # local preview at http://localhost:4321
npm run check     # astro check + biome
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

### Where things live

| What | Where |
| --- | --- |
| Homepage bio | `content/home.md` (frontmatter `title`/`tagline`, then plain markdown) |
| "Find me" links | `src/components/SocialList.astro` |
| Site title, description, nav | `src/site.config.ts` |
| Blog posts | `content/posts/*.md` - `draft: true` hides a post from production builds |
| Tag descriptions | `content/tags/*.md` |
| Colours, fonts, base styles | `src/styles/global.css` (Tailwind v4 `@theme` block) |
| Logo / favicon source | `public/icon.svg` (also inlined in `src/components/layout/Header.astro`) |
| Social-card (OG) image template | `src/pages/og-image/_ogMarkup.ts` |

### Design bits worth knowing

- **Fonts** are self-hosted, never loaded from a CDN. Departure Mono for headings and
  the wordmark, Commit Mono for body text. The same files feed the generated OG images.
- **Glitching wordmark** - `src/scripts/glitchText.ts` swaps the odd letter of anything
  wrapped in `<GlitchText>` for a look-alike glyph and snaps back. Timing and the
  character map are constants at the top of that file.
- **Tilt** - headings, nav links, icons and the logo sit at a small random angle,
  re-rolled on every page load by the inline script in `src/layouts/Base.astro`. Each
  element sets its range with `data-tilt-max`; the spring-back-on-hover lives in the
  `.tilt` rule in `global.css`. `src/utils/tilt.ts` provides the deterministic no-JS
  fallback angle.
- Both effects respect `prefers-reduced-motion`.

## Deployment

Cloudflare Pages builds from the `master` branch with `npm run build`, output `dist`.
Other branches get preview deployments at `<branch>.steve-engineer.pages.dev`.
`www.steve.engineer` redirects to the apex via a Cloudflare redirect rule.

## Licensing

- **Site code** - MIT, Steve Bullock. See [`LICENSE`](LICENSE).
- **Content** (posts, pages, homepage text, media) - CC BY 4.0, Steve Bullock.
  See [`LICENSE-content.md`](LICENSE-content.md).
- **Astro Cactus theme** - MIT, Chris Williams. See [`LICENSE-cactus-theme.md`](LICENSE-cactus-theme.md).
- **Glitch effect** - adapted from the [Departure Mono site](https://github.com/rektdeckard/departure-mono)
  (MIT, Helena Zhang and Tobias Fried); credited in `src/scripts/glitchText.ts`.
- **Departure Mono** font - SIL OFL 1.1, Helena Zhang. See `public/fonts/departure-mono/LICENSE`.
- **Commit Mono** font - SIL OFL 1.1, Eigil Nikolajsen. See `src/assets/font-licenses/`.
