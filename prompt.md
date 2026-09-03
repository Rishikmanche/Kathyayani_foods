# Build Prompt — Kathyayani Foods Website

Read `info.md` in this same folder first — it has all product data, copy, brand colors/fonts, the WhatsApp message templates, the exact asset filenames, and an image-asset mapping (section 6). Nothing in this prompt should require inventing content; if something seems missing, check `info.md` before guessing.

## ⚠️ Two open items — do not silently resolve these, flag back if unclear

1. **Product weight/unit.** The actual product photography shows `Net Weight: 500 g` (and one shot shows a 250 g size). This prompt and `info.md` price everything per **1kg**. Build against 1kg as specified, but do not "fix" the mismatch by editing the photographed net-weight text or changing prices — that decision belongs to the business owner. See `info.md` section 1.
2. **Only Dosa Batter has real product photography.** Ragi Idli, Pesarattu, and Vada Batter currently have no dedicated hero image — only a small crop inside the reference poster, which is not high-resolution enough to use as a full-width PDP image. Build the product grid and PDP to support this gracefully now (see "Handling missing product images" below) rather than stretching or upscaling the poster crop.

## What to build

A single-page, mobile-first website for Kathyayani Foods, a home business selling made-to-order South Indian batters. There is no cart, no checkout, no payment, and no backend. All ordering happens by opening a pre-filled WhatsApp chat. The only two conversion actions on the entire site are a general "Order on WhatsApp" button in the hero and a product-specific "Order on WhatsApp" button inside each product's detail view.

Build it mobile-first (design at ~375–430px viewport), then extend cleanly to desktop widths (up to ~1440px). No routing — everything lives on one URL. The product detail view is an overlay (bottom sheet on mobile, centered modal on desktop), not a separate page.

## Image assets — what to use where

Full mapping and filenames are in `info.md` section 6. Summary of what's actually available:

- **Hero background:** `dosa-lifestyle.png` — warm, golden-hour market scene. Use as a subtle background image behind the hero copy (dim/overlay it so headline text stays legible against the parchment palette), not as a hard-edged photo block. Layer the batter-swirl watermark motif on top per the visual system section below.
- **Dosa Batter product card:** `dosa.png` — clean, isolated tub shot on a neutral background. This is the only product with a genuinely clean product-style photo, so it sets the visual bar the other three cards should match once photographed (neutral background, single product, consistent framing/crop).
- **Dosa Batter PDP carousel:** build the carousel with three real slides — `dosa.png`, `dosa-served.png` (tub + plated dosa), `dosa-ingredients.png` (tub with raw ingredients). This is a case where the carousel component (already speculatively planned for future images) can be fully populated right now instead of holding just one image.
- **Ragi Idli, Pesarattu, Vada Batter — cards and PDP:** no dedicated photography exists yet. See "Handling missing product images" immediately below.

### Handling missing product images

Do not upscale or crop the small bowl images from `Poster.png` to full card/PDP size — they'll look soft and inconsistent next to `dosa.png`. Instead:
- Build the ProductCard and PDP image components to accept a single image path per product, same as if the photo existed, so no layout code needs to change once real photos are supplied.
- Until real photography exists, use a plain placeholder treatment for these three products — a parchment-colored card with the product name in the display typeface and the badge/swirl motif, rather than a stretched or blurry photo. This keeps the grid visually honest instead of shipping degraded images.
- Leave a clearly named placeholder path (e.g. `/images/ragiidli.png`) so dropping in a real photo later is a one-file swap.

## Page structure, top to bottom

1. **Header** — sticky, logo (`logo.png`) + wordmark, shrinks slightly on scroll. No search bar, no location switcher, no cart icon.
2. **Hero** — headline + short subhead built around the "ground fresh, only when you order" positioning, general "Order on WhatsApp" CTA, `dosa-lifestyle.png` as a dimmed background image, subtle batter-swirl motif layered on top.
3. **Trust strip** — the claims listed in `info.md` section 4, as short horizontally-scrollable items on narrow screens.
4. **Product grid** — 4 cards (data in `info.md` section 3), 2 columns on mobile, more on desktop. Each card: image (`dosa.png` for Dosa Batter; placeholder treatment for the other three per above), name, one-line hook, price ("₹X / 1kg" — pending the weight confirmation above). Tapping anywhere on the card opens that product's detail view. No heart/favorite icon, no star rating on the card.
5. **Contact section** — WhatsApp number written out as plain contact info (still tap-to-chat is fine), delivery areas, "Pickup or free delivery available," the soft "delivered fresh in the morning" line. Reads like a business card, not a pitch — no button styled like a CTA here.
6. **Footer** — logo mark, small print. Skip social links entirely; none exist yet.
7. **Floating WhatsApp button** — persistent across the whole page, bottom-right, thumb-reachable. Opens the general WhatsApp message from `info.md` section 5 when tapped from outside a product detail view.

## Product Detail View (the core interactive piece)

Opens when a product card is tapped. Mobile: slides up from the bottom, drag handle at top, swipe-down or backdrop-tap to dismiss. Desktop: fades/scales in as a centered modal, dismiss via backdrop click or a visible close icon.

Layout, top to bottom, inside the sheet:
1. Close affordance — drag handle on mobile, back arrow or × floating over the image top-left/top-right
2. Product image carousel with dot indicators. **Dosa Batter ships with 3 real slides** (`dosa.png`, `dosa-served.png`, `dosa-ingredients.png`); the other three products ship with a single placeholder slide until photographed (see "Handling missing product images" above) — build the carousel component generically so it works correctly with either 1 image or several, including hiding the dot indicators entirely when there's only one slide.
3. Product name and price together near the top
4. **Badge row directly under the title/price** (this is a locked decision — see `info.md` section 8) — small pill-shaped tags using the product's badges from `info.md`
5. Tabs: **"Description"** and **"How to Use"**. Description tab shows the product description and ingredients. How to Use tab shows the three-step storage instruction from `info.md` (same for every product).
6. Quantity stepper (− 1kg +), whole-kilogram increments
7. **Sticky bottom bar**, always visible without scrolling: live price (unit price × quantity) on one side, full-width "Order on WhatsApp" button on the other. Tapping it builds the WhatsApp deep link using the product-specific template in `info.md` section 5, with the current quantity substituted in, and opens it.

Do not include: a cart icon, color/variant swatches, a review tab or fabricated review content, or any rating badge.

## Visual system

Use the exact colors, fonts, and motif described in `info.md` section 2. In short: parchment background, oxblood maroon text/headers, brass-gold accents and CTAs, a small moong-green accent reserved only for freshness-related badges. Display headings in a carved/temple-signage serif (Marcellus), small caps labels in Cinzel, everything else (body copy, buttons, badges, stepper) in Work Sans. The batter-swirl motif (visible in the bowl shots on the reference poster) should recur as a background watermark in the hero and as the shape of the PDP's drag handle — this is the one signature visual element specific to this brand; don't substitute a generic icon or spinner in its place.

The interaction mechanics (bottom sheet, sticky CTA bar, quantity stepper, badge-pill styling) are borrowed from Zepto/Instamart-style apps — reproduce that *rhythm and responsiveness*, not their color scheme or their marketplace features (no ratings, no cart, no wishlist, no search — see the exclusions list in `info.md` section 7).

## Technical constraints

- No backend, no database, no forms that submit anywhere. The only external action is opening a `wa.me` link (format in `info.md` section 5).
- No shopping cart or persistent state beyond what's needed to open/close the currently-viewed product and its quantity.
- Keep all product data in one central data structure (array/JSON) so a 5th product can be added later by adding one entry, not editing layout code. The `images` field per product should be an array (even if it currently holds just one path), not a single string, so Dosa Batter's multi-image carousel and the other products' single placeholder both work off the same schema.
- Respect safe-area insets on mobile so the sticky bottom bar doesn't collide with the iPhone home indicator.
- Minimum 44×44px tap targets throughout.
- Compress/appropriately size the product images — they're large studio photos and there are several of them (up to 3 for Dosa Batter alone) plus the logo on a single page load.
- Accessibility: alt text on all product images (use the product name + hook), focus trapped inside the product detail view while it's open, sufficient contrast for gold-on-parchment text (verify, don't assume).

## Explicit exclusions

Re-stated from `info.md` section 7 because these are easy to accidentally reintroduce from habit when building something that resembles a delivery app: no cart, no checkout, no payments, no star ratings, no reviews, no search bar, no location switcher, no exact delivery time or cutoff anywhere on the page, no wishlist icons, no product variant swatches.
