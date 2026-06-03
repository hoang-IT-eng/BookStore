---
name: Literary Modernist
colors:
  surface: '#f9f9f8'
  surface-dim: '#dadad9'
  surface-bright: '#f9f9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e8e8e7'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#40484b'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1f0'
  outline: '#70787c'
  outline-variant: '#c0c8cb'
  surface-tint: '#306576'
  primary: '#003441'
  on-primary: '#ffffff'
  primary-container: '#0f4c5c'
  on-primary-container: '#87bbce'
  inverse-primary: '#9acee1'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#fd7729'
  on-secondary-container: '#5e2300'
  tertiary: '#660010'
  on-tertiary: '#ffffff'
  tertiary-container: '#90001b'
  on-tertiary-container: '#ff9694'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b6ebfe'
  primary-fixed-dim: '#9acee1'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#114d5d'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b0'
  on-tertiary-fixed: '#410007'
  on-tertiary-fixed-variant: '#92001b'
  background: '#f9f9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.5'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
---

## Brand & Style

The design system is anchored in the concept of a "Modern Library"—combining the authoritative, timeless feel of traditional publishing with the efficiency of a high-end digital SaaS platform. It targets a diverse audience of readers who value both the intellectual depth of a physical bookstore and the frictionless convenience of modern e-commerce.

The visual style is **Corporate Modern with Editorial Accents**. It leans heavily on structured layouts and generous whitespace (Minimalism) to reduce cognitive load while shopping, but uses high-contrast serif typography and subtle warmth to evoke an emotional connection to literature. The result is a UI that feels trustworthy, premium, and inherently focused on the content: the books.

## Colors

The palette is designed to prioritize readability and clear action hierarchy.

- **Primary (Deep Teal):** Used for navigation, headers, and primary interactions to establish trust and a "scholarly" foundation.
- **Secondary (Warm Amber):** Reserved exclusively for high-conversion moments—Flash Sales, "Add to Cart" buttons, and limited-time offers.
- **Background (Off-White):** A soft `#F9F9F8` tint is used instead of pure white to reduce eye strain during long periods of reading book descriptions and reviews.
- **Status Colors:** Functional tokens for inventory management. "In Stock" uses a deep forest green to maintain the sophisticated tone without appearing too "neon" or jarring.

## Typography

This system employs a dual-typeface strategy to balance utility and character.

1.  **Editorial Serif (Playfair Display):** Used for book titles, section headings, and promotional banners. It signals quality and a literary tradition.
2.  **Systematic Sans (Inter):** Used for all functional UI elements, metadata, price tags, and long-form descriptions. 

The scale emphasizes a comfortable reading experience. `body-lg` is optimized for book synopses, utilizing a generous `1.7` line height to ensure maximum legibility for dense text. `label-sm` is used for metadata like "ISBN" or "Publisher" to create a clear information hierarchy.

## Layout & Spacing

The system follows an **8px linear scale** to ensure mathematical harmony across all components.

- **Grid Model:** A 12-column fixed-width grid for desktop (`1280px` max-width) which centers the content to feel like a curated catalog.
- **Vertical Rhythm:** Use `xl (40px)` or `xxl (64px)` between major sections (e.g., between "Trending Now" and "Editor's Choice") to provide the "breathing room" associated with premium brands.
- **Mobile Reflow:** On mobile devices, the 12-column grid collapses to a 2-column or 4-column layout with `16px` outer margins. Book cards should transition from a horizontal layout (on desktop search) to a vertical stack or 2-up grid on mobile.

## Elevation & Depth

To maintain a clean and professional aesthetic, this design system avoids heavy shadows in favor of **Tonal Layers** and **Soft Ambient Depth**.

- **Level 0 (Surface):** The `#F9F9F8` background.
- **Level 1 (Cards/Inputs):** White (#FFFFFF) surfaces with a subtle `1px` border in a light neutral gray (`#E5E5E5`). No shadow.
- **Level 2 (Hover/Floating):** When a book card is hovered or a dropdown is active, apply a very soft, diffused shadow: `0px 10px 25px rgba(0, 0, 0, 0.04)`.
- **Depth Hierarchy:** Modals and "Quick View" overlays should use a semi-transparent backdrop blur (10px) to maintain context while focusing the user's attention.

## Shapes

The shape language is **Rounded (Level 2)**. 

- **Standard Elements:** Buttons, input fields, and book cards use a `0.5rem (8px)` radius. This strikes a balance between professional precision and approachable warmth.
- **Container Elements:** Large promotional banners or "Feature of the Month" sections use `1rem (16px)` to feel more like distinct, welcoming objects.
- **Interactive Indicators:** Small badges (e.g., "New", "Sale") use a fully rounded/pill shape to distinguish them from structural elements.

## Components

### Buttons
- **Primary:** Deep Teal background with White text. Bold and authoritative.
- **Secondary (CTA):** Warm Amber background with White text. Used exclusively for "Add to Cart" or "Buy Now."
- **Outline:** 1px Teal border with Teal text. Used for secondary actions like "Add to Wishlist" or "Read Sample."

### Search Bar
The search bar is a centerpiece of the bookstore. It should be oversized with a `body-lg` font size, a 1px border that darkens on focus, and a leading "Magnifying Glass" icon in the Primary color. It should utilize a Level 2 shadow when active to suggest it is "lifting" off the page.

### Book Cards
Book covers must have a subtle `1px` inner stroke to ensure light-colored book jackets don't bleed into the white card background. Titles use `headline-sm` (Serif) and authors use `label-md` (Sans).

### Inputs & Selection
Checkboxes and radio buttons use the Primary Teal color when selected. Text inputs use a 16px (body-md) size to prevent iOS zoom-on-focus and should feature clear error states in the `status.error` red.

### Status Indicators
- **In Stock:** A small green dot paired with "In Stock" in `label-md`.
- **Out of Stock:** Grayscale text with a strikethrough or "Notify Me" secondary button.