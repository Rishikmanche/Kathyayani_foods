# Kathyayani Foods — Project Info
### Reference data file. The build prompt (prompt.md) points here for all content — nothing in this file needs to be invented, only laid out.

---

## 1. Business

**Name:** Kathyayani Foods
**Tagline:** Pure · Hygiene · Organic
**What they sell:** Fresh, made-to-order South Indian batters — nothing pre-made, nothing stocked. Every order is ground fresh after it comes in.
**WhatsApp (only ordering channel):** +91 90598 20583
**Delivery areas (free):** Old Alwal, Macha Bolarum, Jonnabanda
**Delivery slot:** Mornings — **do not put an exact time window on the site.** Only a soft line like "Delivered fresh in the morning" is allowed. Exact slots and cutoffs are handled live in the WhatsApp chat, never pre-committed on the page.
**Pickup:** Available, free, same three areas. One-line mention near contact info is enough — no scheduling detail.
**Storage instruction (same for all products):** Refrigerate on arrival. Use within 2 days. Bring to room temperature before cooking.

⚠️ **OPEN — unit/weight conflict:** the actual packaging photos (see section 6) show `Net Weight: 500 g`, and one shot shows a 250 g size too. This entire file prices products **per 1kg**. Before shipping, confirm one of:
- (a) the 1kg pricing is correct and the photographed tubs are just a different/older packaging run, or
- (b) prices are actually per 500g and need to be corrected (and the `unit` field in the data model changed from `"1kg"`).
Do not resolve this by guessing in the build — pricing errors go straight to the WhatsApp order message.

---

## 2. Brand visual identity

**Colors:**
| Role | Hex |
|---|---|
| Background (parchment) | `#F7F0E1` |
| Primary text / headers (oxblood maroon) | `#4A1616` |
| Accent / CTA (temple brass gold) | `#C79A3E` |
| Secondary accent (moong green, freshness badges only) | `#7C8C4E` |
| Body text (near-black brown) | `#2E1B12` |

**Typography:**
- Display / headings: **Marcellus** (carved, temple-signage feel)
- Eyebrow labels / small caps: **Cinzel**
- Body text and UI chrome (steppers, badges, buttons): **Work Sans**

**Signature motif:** the batter swirl visible in the bowl shots on the poster. Reuse as: the PDP drag-handle shape, a subtle background watermark behind the hero, and the transition cue when the PDP opens. This replaces generic spinners/icons — it's the one visual element that's actually specific to this business.

**Tone:** warm, traditional, unhurried — not a slick marketplace. Borrow app *mechanics* (bottom sheet, stepper, sticky CTA) from Zepto/Instamart-style references, but the skin stays temple-brass/parchment, not neon/coral.

---

## 3. Products (all 4, full data)

### Dosa Batter — ₹90 / 1kg *(⚠️ see unit conflict above)*
- **Hook:** No rice, low-GI, diabetic-friendly
- **Description:** Homemade jowar & split urad dal dosa batter, naturally fermented, no rice added. A lower-GI alternative for crispy, golden dosas — diabetic-friendly, made fresh on order.
- **Ingredients:** Jowar, Split Urad Dal (No Rice)
- **Best for:** Dosas, Uttapams
- **Badges:** No Rice, Diabetic-Friendly, 100% Homemade
- **How to use:** Refrigerate on arrival → Use within 2 days → Bring to room temperature before cooking
- **Image (card/PDP hero):** `dosa.png`
- **Image (PDP carousel, additional):** `dosa-served.png`, `dosa-ingredients.png` — see section 6

### Ragi Idli Batter — ₹90 / 1kg
- **Hook:** Rich in finger millet, wholesome & healthy
- **Description:** Soft, fluffy idlis made easy with our fresh ragi batter — naturally fermented and packed with the wholesome goodness of finger millet. A healthier twist on your everyday idli, made fresh to order.
- **Ingredients:** Ragi (Finger Millet)
- **Best for:** Soft idlis, mini idlis
- **Badges:** Finger Millet, Naturally Fermented, 100% Homemade
- **How to use:** Refrigerate on arrival → Use within 2 days → Bring to room temperature before cooking
- **Image:** `ragiidli.png` ⚠️ **not yet photographed** — see section 6

### Pesarattu Batter — ₹120 / 1kg
- **Hook:** Protein-rich moong dal, light & nutritious
- **Description:** Protein-rich pesarattu batter made with split moong dal, ground fresh for that authentic Andhra taste. Light, nutritious, and perfect for a wholesome breakfast or dinner.
- **Ingredients:** Split Moong Dal
- **Best for:** Pesarattu, MLA Pesarattu
- **Badges:** Protein-Rich, 100% Homemade
- **How to use:** Refrigerate on arrival → Use within 2 days → Bring to room temperature before cooking
- **Image:** `pesarattu.png` ⚠️ **not yet photographed** — see section 6

### Vada Batter — ₹170 / 1kg
- **Hook:** Crispy outside, soft inside, made fresh
- **Description:** Thick, fluffy vada batter made with split urad dal, beaten to perfection for that classic crispy-outside, soft-inside vada. Made fresh on order — just shape, fry, and enjoy.
- **Ingredients:** Split Urad Dal
- **Best for:** Medu Vada, Ulundu Vada
- **Badges:** 100% Homemade, No Preservatives
- **How to use:** Refrigerate on arrival → Use within 2 days → Bring to room temperature before cooking
- **Image:** `vada.png` ⚠️ **not yet photographed** — see section 6

---

## 4. Site-wide trust claims (for the trust strip)

- Made Fresh on Order
- No Preservatives
- 100% Homemade
- Free Delivery in Old Alwal, Macha Bolarum & Jonnabanda
- Delivered fresh in the morning *(soft line only — no exact time)*

---

## 5. WhatsApp message templates

General (hero / floating button, no product selected):
```
Hi, I'd like to place an order with Kathyayani Foods
```

Product-specific (from inside the PDP, quantity-aware):
```
Hi, I'd like to order {qty}kg {Product Name}
```
Example: `Hi, I'd like to order 2kg Dosa Batter`

WhatsApp deep link format (works cross-platform, no extra logic needed):
```
https://wa.me/919059820583?text=<URL-encoded message>
```

---

## 6. Asset manifest (updated against what's actually been generated)

Place these in the Antigravity project's images folder using these exact filenames so the build prompt's references line up. **Rename the uploaded files as shown below when copying them into `/images`.**

| Rename to | Source file (as uploaded) | Use |
|---|---|---|
| `logo.png` | *(crop from `Poster.png` or supply separately — the deity medallion at the top of the poster)* | Brand mark — header, footer, hero |
| `dosa.png` | `ChatGPT_Image_Sep_3__2026_at_01_28_02_PM.png` | **Primary** — Dosa Batter card thumbnail + PDP hero. Clean marble background, isolated tub — closest in style to what the other 3 products should eventually match |
| `dosa-served.png` | `ChatGPT_Image_Sep_3__2026_at_01_45_01_PM.png` | Dosa Batter PDP carousel, slide 2 — tub + plated dosa with chutneys on banana leaf |
| `dosa-ingredients.png` | `ChatGPT_Image_Sep_3__2026_at_01_29_17_PM.png` | Dosa Batter PDP carousel, slide 3 — tub nested among raw urad dal, ginger, curry leaves. Good to sit alongside the Ingredients section of the Description tab |
| `dosa-lifestyle.png` | `ChatGPT_Image_Sep_3__2026_at_01_36_39_PM.png` | Homepage **hero background** — market scene, golden hour, on-brand "warm and unhurried" tone. Must render as a clearly visible photo, not dimmed to near-invisibility. Not a product/card image |
| `dosa-stack.png` | `ChatGPT_Image_Sep_3__2026_at_01_31_40_PM.png` (3 tubs stacked) | Used in the new "Ground Fresh, Every Time" process section alongside `dosa-basket.png` — see prompt.md |
| `dosa-basket.png` | `ChatGPT_Image_Sep_3__2026_at_01_33_28_PM.png` (tub in grocery basket) | Used in the new "Ground Fresh, Every Time" process section alongside `dosa-stack.png` — see prompt.md |
| `dosa-sizes.png` (held out) | `ChatGPT_Image_Sep_3__2026_at_01_34_33_PM.png` (500g vs 250g in hand) | ⚠️ Shows two pack sizes, which conflicts with the "1kg is the only unit" rule in section 7 and the open weight question above. Hold this one out until the weight/unit question is resolved |
| `ragiidli.png` | *interim: cropped from `Poster.png`* | No standalone studio photography exists yet. **Use a tight crop of this product's bowl shot from `Poster.png`** as the card + PDP image until real photography exists — this replaces the "studio shot coming soon" blank placeholder from the first build. Swap for full studio photography (matching `dosa.png`'s style) when available |
| `pesarattu.png` | *interim: cropped from `Poster.png`* | Same as above |
| `vada.png` | *interim: cropped from `Poster.png`* | Same as above |

Reference-only (style inspiration, not used as final site assets — keep in a separate `/references` folder, not `/images`, so nothing accidentally ships):
- `Poster.png` — original promotional flyer, source of the brand's color/type direction and the only current reference for what Ragi Idli, Pesarattu, and Vada should look like once photographed (bowl + swirl style, not tub-packaging style)
- Zepto/Instamart-style listing screenshot — source of the product grid pattern *(not included in this upload batch)*
- Zepto/Instamart-style product detail screenshot — source of the PDP pattern *(not included in this upload batch)*

**Practical note for the build:** since only Dosa Batter has real photography, build the PDP image carousel as a generic component that takes an array of image paths per product (the data model in the build plan already supports this). Dosa Batter ships with 3–4 real images in its carousel; the other three ship with a single placeholder/poster-crop image until photographed, without needing any code changes later.

---

## 7. Explicit exclusions (things that must NOT appear on the site)

- No shopping cart, no checkout flow, no payment integration
- No star ratings or review system (none exist — don't fabricate placeholder ones)
- No search bar or location switcher (fixed catalog, fixed delivery area)
- No exact delivery time slots or order cutoff times anywhere on the page
- No wishlist/favorite icons (no accounts exist)
- No color/variant swatches (products have no variants; 1kg is the only unit for now — ⚠️ pending resolution of the weight conflict in section 1)

---

## 8. Locked design decision

Badge row sits directly under the product title/price in the PDP, in the position a star-rating badge would occupy in a typical marketplace app — not down near the tabs.
