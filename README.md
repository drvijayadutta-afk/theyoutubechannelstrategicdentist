# The Strategic Dentist

A learning-in-public platform: where theory becomes practical execution.

Next.js (App Router) · TypeScript · Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where things live

```
app/            routes — home, about, blog, blog/[slug], resources, contact
                plus sitemap.ts, robots.ts and the two API routes
components/     layout/ ui/ content/ forms/ cta/
content/        all copy and data — the only place you edit to publish
lib/            types and content helpers (reading time, TOC, slugs)
```

Everything a visitor reads lives in `content/`. No copy is hard-coded into
components, so publishing never means touching JSX.

## Publishing

**A new article.** Create `content/articles/<slug>.ts` exporting an `article`
object, then import it into `content/articles/index.ts`. The body is an array of
typed blocks:

| Block | Renders as |
|---|---|
| `heading` | An `h2`, and an entry in the table of contents |
| `para` | Body paragraph |
| `list` | Bulleted, or numbered with `ordered: true` |
| `quote` | Pull quote |
| `callout` | Blue-bordered aside |
| `tryThis` | The signature tear-off card |

Reading time, the table of contents, the sitemap entry and the static route are
all derived automatically. Every article should end with a `tryThis` block —
that's the promise the site makes.

**Resources, pillars, the About timeline.** `content/resources.ts` and
`content/pillars.ts`.

**Site-wide details.** `content/site.ts` holds the name, newsletter copy, email
and social links, and the `nav` array that drives the header, footer and
sitemap. Adding `/resume` or a future `/shop` means adding one line there and
creating the page.

## Connecting the newsletter and contact form

Both forms are built and validated but do not yet reach a provider. Each route
has a single function to replace:

- `app/api/subscribe/route.ts` → `addSubscriber()` — point at Buttondown,
  ConvertKit, Resend audiences, or similar.
- `app/api/contact/route.ts` → `deliver()` — point at a transactional email API.

Read the key from the environment. Nothing else needs to change: the forms
already handle pending, success and error states.

**Until that's wired, subscribers are not stored anywhere.**

## Design system

Colour tokens mirror how a notebook gets marked up, and the roles matter more
than the hex values — defined in `app/globals.css`.

| Role | Tokens | Used for |
|---|---|---|
| Paper | `paper`, `paper-2`, `paper-3` | Surfaces |
| Ink | `ink`, `ink-soft` | Text, dark panels |
| Highlighter | `highlight`, `butter`, `gold` | Emphasis, primary buttons, sticky notes |
| Ballpoint | `pen`, `pen-light` | Hand-drawn arrows, annotations, diagrams |
| Correction | `pink`, `pink-deep` | The brand's own voice — CTAs, links, labels |

`pink` is for fills and large text only; use `pink-deep` for pink text at body
size and for any pink fill carrying white text. All rendered text currently
clears WCAG AA.

Four typefaces, four jobs: **Bricolage Grotesque** (display and UI),
**Newsreader** (article prose), **Kalam** (handwritten margin notes),
**Space Mono** (metadata labels).

Three recurring elements carry the identity: the **margin rail** on `Section`,
the **Try This card**, and the **highlighter swipe**. Spend boldness there and
keep everything else quiet.

## Motion and accessibility

Reveals use one `IntersectionObserver` in `components/ui/reveal.tsx` — no
animation library. Content is only hidden under `html.js` and
`prefers-reduced-motion: no-preference`, so it stays visible without JavaScript
and for anyone who asked for less motion.

Blog filters are links rather than buttons, so every filter combination is a
real, crawlable URL that works before JavaScript loads.
