Next.js starter (catalog / landing page)

I built this as an ASBIS phone catalog, but honestly it's really just a starter I put together for any catalog-ish landing page — brand cards, a filterable product grid, a CTA block, that kind of thing. Swap the content and colors and you've basically got a new site.

Stack is Next.js 16 (App Router), Tailwind 4, Lenis for the smooth scroll, and a small hand-rolled scroll-reveal thing. I copied the general feel from freshlab-v3.noface.agency and used the same stack under the hood.

What's actually in here

Header with nav, a hero with some floating decorative bits, a stats strip, brand cards, the filterable catalog itself, a "how it works" steps section, a CTA block, footer. Nothing exotic. Colors and fonts live in one file so you're not hunting through components to re-theme things, and all the product data is in one array so you never have to touch markup just to add a phone or change a price.

Files
app/
  layout.js       — fonts + wraps everything in <ReactLenis>
  page.js         — lists the sections in order, that's it
  globals.css     — colors/fonts as CSS vars, plus the reveal/float keyframes
components/
  Reveal.js       — the scroll-reveal wrapper
  Header.js       — nav, goes solid on scroll, has a mobile menu
  Hero.js         — the gradient hero
  SectionHead.js  — the little eyebrow + heading + text used before every section
  TrustStrip.js   — the stats bar
  Brands.js       — brand card grid
  Catalog.js      — filter + product grid, only component with real state
  Steps.js        — the 3-step block
  BuyBlock.js     — the blue CTA box
  Footer.js       — footer
data/
  phones.js       — all the catalog data lives here

Some notes on why it's put together this way:

Next.js App Router — every section is its own component, page.js just stacks them. Want to reorder things or cut a section? That's a one-line change in page.js, nothing else needs to move.

Tailwind 4 — no tailwind.config.js this time, colors and fonts are declared as tokens right at the top of globals.css via @theme inline. So bg-sky-light, text-blue-deep, font-jost — those aren't stock Tailwind classes, they're ours. Define your own the same way for a new project.

Fonts — Jost + Manrope, same pairing the reference site uses. Normally I'd just pull these in with next/font/google and be done with it, but the sandbox I was working in had fonts.googleapis.com blocked at the network level, so next/font/google couldn't fetch anything at build time. Worked around it by installing the same fonts as an npm package instead (@fontsource-variable/jost / @fontsource-variable/manrope — open license, same variable woff2 files, Cyrillic included). End result is identical, the font still gets baked into the build with zero runtime requests. If you're building this somewhere with normal internet access, just swap the two @fontsource imports in layout.js back for import { Jost, Manrope } from "next/font/google" — it's honestly the simpler option when it's available.

Lenis — one <ReactLenis root> wrapper in the layout and that's the whole integration. Regular anchor links and scrollIntoView just inherit the smoothing, no extra code needed anywhere else.

The reveal-on-scroll thing — I didn't reach for Framer Motion since the original site wasn't using it either (checked — no framer fingerprints in the DOM). It's just Reveal.js: wrap something in it, it sits slightly offset until 15% of it is on screen, then an IntersectionObserver flips a class and CSS transitions do the rest. delay prop lets a row of cards cascade in instead of popping in all at once.

Catalog.js is the only place with actual React state — the active filter. Everything else is static markup fed by data/phones.js, so changing prices or adding a phone never touches a component file.

Ran npm run build clean, no errors, and checked it in a headless browser — fonts render, Cyrillic works, the filter works, mobile layout holds up.

Running it
npm install
npm run dev

localhost:3000, hot reload included. npm run build && npm run start for a production build. Needs Node 18.18+, I used 22.

Turning this into a different site
Copy the folder, rename it, update name in package.json.
Gut data/phones.js and put in your own stuff — same shape (name, specs, price, tag) works for pretty much any product/service list.
Go through the components and change the copy — it's just plain JSX, the text is right there in the markup, nothing dynamic to worry about.
Re-theme by editing the color variables at the top of globals.css. That's it, that's the whole re-theme.
Want different fonts? Only layout.js and the --font-jost/--font-manrope vars need touching.
Add or remove sections in page.js.
Getting it onto a real domain

Easiest path is Vercel — connect the GitHub repo, it builds and deploys on its own, then add your domain under Domains in the project settings and point your DNS at what it gives you.

If the main site isn't on Next.js at all (WordPress, plain PHP, whatever), add output: 'export' to next.config.mjs and run npm run build — you get a plain out/ folder, no Node server needed, just drop it in a subfolder on whatever hosting you already have. Everything still works since the fonts and JS are self-contained.

If there's already a Next.js site and you just want this as a section of it, copy over components/ and data/, add a page that renders them, install lenis and @fontsource-variable/* (or reuse whatever fonts that project already has), done — it's just another route now.

Stuff I'd still want to fix
Product data should probably come from a real feed (Sheets, a CMS, whatever) instead of a hardcoded array.
The phone illustrations are placeholders, not real photos — swap those out.
The "Order" / "Contact manager" buttons don't do anything yet — wire them up to a form or a Telegram bot.
