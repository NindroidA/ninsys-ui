# v1.1.2
- Forgor to add index.ts into utils directory.
- Added export of utils directory to main project index.

# v1.1.1
- Organized types directory for components.
- Updated trigger for publish workflow
- Updated bun dependencies.

# v1.1.0
- Components updated with more options/parameters for customization.
- Added utils directory will ScrollToTop component (to make pages scroll to the top for whatever reason).

## Badge
- Added more color variants: `purple`, `pink`, `cyan`
- Added `icon` prop for displaying icons alongside text
- Added `pulse` animation option
- Added `lg` size option

## Button
- Added new variants: `glass`, `outline`
- Added `icon` prop with configurable `iconPosition` (`left` or `right`)
- Added `fullWidth` prop for full-width buttons
- Enhanced hover animations and visual feedback

## Card
- Added new variants: `gradient`, `bordered`
- Added `padding` prop with options: `none`, `sm`, `md`, `lg`, `xl`
- Added `onClick` handler support
- Improved previously buggy hover animations with scale and translate effects

## Section
- Added new background options: `dark`, `purple`
- Expanded padding options: `none`, `2xl`
- Added `titleIcon` prop for icons next to section titles
- Added `centered` prop to control title alignment
- Increased max-width options: added `4xl`, `7xl`

## GradientText
- Maintained backward compatibility with existing variants: `primary`, `secondary`, `accent`
- Added new color variants: `purple`, `pink`, `blue`, `rainbow`, `sunset`, `ocean`
- Added `animated` prop for gradient animation effects

## Grid
- Added `cols` option: `5`
- Added `gap` option: `xl` (48px)
- Added `responsive` prop (defaults to `true`)

## FloatingElements
- Complete rewrite using Framer Motion for smooth animations
- Added variant system: `default`, `purple`, `blue`, `rainbow`, `minimal`
- Added `intensity` control: `low`, `medium`, `high`
- Each element now has unique animation timing

# v1.0.7
- Forgor to add the index.ts in components directory.
- Added eslint for consistency.

# v1.0.0-1.0.6
Initial setup of everything:
- Migrated components from main react app.
- GitHub workflow for publishing to npm.