---
name: Syntactic Flux
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1b1c'
  on-surface-variant: '#584045'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#8c7075'
  outline-variant: '#dfbec4'
  surface-tint: '#b31e58'
  primary: '#b01b55'
  on-primary: '#ffffff'
  primary-container: '#d2386d'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb1c2'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#bb0057'
  on-tertiary: '#ffffff'
  tertiary-container: '#e2216f'
  on-tertiary-container: '#140004'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#ffb1c2'
  on-primary-fixed: '#3f0019'
  on-primary-fixed-variant: '#8f0041'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffd9e0'
  tertiary-fixed-dim: '#ffb1c3'
  on-tertiary-fixed: '#3f0019'
  on-tertiary-fixed-variant: '#8f0041'
  background: '#fcf9f8'
  on-background: '#1b1b1c'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Montserrat
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  headline-md-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2.5rem
  container-max: 1280px
  gutter: 1rem
---

## Brand & Style

The design system is engineered for technical clarity and high-density information architecture. It targets developers, data engineers, and analysts who require a frictionless environment for documenting and discovering data schemas. 

The aesthetic is **Modern Minimalist**, leaning heavily into a "utility-first" visual language. It prioritizes content over container, utilizing significant whitespace to separate complex data structures while maintaining a professional, tool-like rigor. The emotional response is one of precision, systematic order, and institutional reliability, reminiscent of high-end developer tooling.

## Colors

The palette utilizes a high-contrast **Light Mode** aesthetic, featuring a clean, white-based "Gallery & Rose" palette with deeper neutral grounding.
- **Primary (Deep Rose):** A vibrant berry tone (#d53b70) used for primary actions, active states, and critical paths. It provides the core visual energy against the neutral background.
- **Secondary (Pure White):** Utilized for surface levels and container backgrounds to maximize brightness and clarity.
- **Tertiary (Magenta Accent):** A deep, saturated magenta (#ce0461) used for accenting specific data highlights or supplemental interactive elements.
- **Neutral Scale:** Backgrounds use crisp white and light gray tokens. The neutral base (#1f1f1f) ensures high-contrast text tiers, moving from deep off-blacks for headings to nuanced grays for metadata, ensuring legibility under various lighting conditions.
- **Semantic Colors:** Success, Warning, and Error colors are optimized for light surfaces, ensuring high accessibility ratings for data validation states.

## Typography

The typography system strikes a balance between editorial elegance and functional utility. **Playfair Display** is used for headings to provide a sophisticated, authoritative character. **Roboto** serves as the primary body face, ensuring high readability for dense documentation and data. **Montserrat** is introduced for labels and small UI elements to provide a clean, geometric contrast.

- **Headings:** Use tight letter-spacing and semi-bold weights to create a strong hierarchy with an editorial feel.
- **Body:** Set at 14px for standard data views to balance density and readability.
- **Labels:** Geometric sans-serifs are used for technical keys (e.g., table names, column types) to differentiate them from descriptive text.

## Layout & Spacing

The layout utilizes a **Fixed Grid** model for desktop to maintain structural integrity in data-heavy views, transitioning to a fluid model for mobile.

- **Grid:** A 12-column grid with a 1280px maximum width.
- **Rhythm:** An 8pt linear scale governs all padding and margins. 
- **Density:** High-density views (data tables) use `sm` (8px) padding, while marketing or landing pages use `lg` and `xl` units to increase breathing room.
- **Breakpoints:**
  - Mobile: < 640px (single column, 16px margins).
  - Tablet: 640px - 1024px (reduced gutters).
  - Desktop: > 1024px (standard 12-column).

## Elevation & Depth

To maintain the "flat" modern aesthetic, this design system eschews traditional shadows in favor of **Tonal Layers** and **Low-contrast Outlines**, now optimized for a bright, light-mode interface.

- **Surfaces:** Depth is created by shifting neutral grays. The base page uses pure white or the lightest gray, while primary content containers (cards, sidebars) use subtle borders or slightly darker backgrounds to suggest proximity or grouping.
- **Borders:** Elements are defined by 1px solid borders using subtle, low-contrast variants of the neutral scale to maintain the "utility" feel without visual clutter.
- **Active States:** Instead of elevation, active elements use the primary Deep Rose color for borders or subtle background tints.
- **Overlays:** Modals and dropdowns use a very soft, diffused light shadow to provide separation from the underlying interface.

## Shapes

The shape language is **Rounded** and friendly, moving away from sharp corners to a more approachable geometry. 
- **Standard Elements:** Buttons, inputs, and cards use a 0.5rem (8px) radius. This provides a soft, modern touch that contrasts beautifully with the sharp serifs of the headings.
- **Small Elements:** Tooltips and tags use a smaller 4px radius.
- **Exceptions:** Search bars in the navigation may use a pill shape (rounded-xl) to distinguish global actions from structural data elements.

## Components

- **Buttons:** Primary buttons are solid Deep Rose with high-contrast white text and 8px corners. Secondary buttons use a white background with a subtle neutral border. Tertiary buttons may utilize the new Magenta accent for specific callouts.
- **Inputs:** Use a 1px border. On focus, the border transitions to Deep Rose with a 2px outer glow (ring) of the same color at 20% opacity.
- **Cards:** White or light-gray surface background, 1px subtle border, 8px corner radius, no shadow. Header and footer sections within cards are separated by a 1px horizontal rule.
- **Data Tables:** Zebra striping is avoided. Rows are separated by 1px borders and use a subtle light-gray highlight on hover to aid scannability.
- **Chips/Tags:** Used for data types (e.g., `VARCHAR`, `INT`). These use the Montserrat font, 11px size, and a light-gray background with a subtle border and 4px radius.
- **Status Indicators:** Small 8px dots with semantic coloring to show data freshness or pipeline health.