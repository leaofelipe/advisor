# Style Standards

Apply these rules to all CSS and styling in the project.

## Stack

- Plain CSS with CSS Modules (`.module.css`) for component-scoped styles
- CSS custom properties (tokens) in `src/styles/tokens.css` for design system values
- Radix Themes (`@radix-ui/themes`) for styled components (Button, Dialog, etc.)
- Radix UI Primitives (`radix-ui`) for headless components when Themes does not provide one
- No Sass, Less, or other preprocessors
- No inline styles unless required for dynamic values (e.g. layout animations)

## Radix Themes

- Wrap the app with `<Theme>` in `src/main.jsx` — configure via props: `accentColor`, `radius`, `appearance`, etc.
- Import styles: `@import '@radix-ui/themes/styles.css'` in `src/styles/index.css` (before project tokens so overrides apply)
- Use Themes components directly: `import { Button, Dialog } from '@radix-ui/themes'`
- Customize via Theme props, CSS variables (tokens like `--accent-9`, `--radius-2`), or `className`/`style`
- Custom wrappers in `src/components/ui/` only when a Themes component does not exist or needs significant extension

## Radix Primitives

- Use `radix-ui` when Themes has no equivalent: `import { Slot } from "radix-ui"`
- Wrap primitives in `src/components/ui/` — each in its own folder with `.jsx` and `.module.css`
- Style `[data-state]` attributes inside CSS Modules; use `:global()` for portal/overlay elements

## Structure

```
src/
├── components/ui/     # Custom wrappers (only when Themes lacks a component)
├── styles/
│   ├── index.css     # Entry — normalize, themes, tokens, global
│   ├── tokens.css    # Project tokens (colors, spacing, typography, radii, animation)
│   └── global.css    # Global element styles
```

## Conventions

- Use CSS Modules (`ComponentName.module.css`) for component-specific styles
- Reference tokens via `var(--token-name)` — never hardcode colors, spacing, or typography values
- Use native CSS nesting where supported (modern browsers)
- For third-party overrides, use `:global()` inside the module

## Token Usage

```css
/* Good */
.button {
  background: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
}

/* Bad */
.button {
  background: #3b82f6;
  padding: 8px 16px;
  border-radius: 4px;
}
```
