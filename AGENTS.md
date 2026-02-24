# Agent Guidelines

## Package Manager

This project uses **Bun** exclusively. Never use `npm`, `npx`, or `yarn`. Always use `bun` and `bunx`.

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Start dev server
bun run build        # Vite production build
bun run preview      # Preview production build
bun run test         # Run tests
bun run format       # Format src/ with Prettier
```

## Commits

All commits must be in English and follow Conventional Commits format with a required scope:

```
<type>(<scope>): <subject>
```

Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

The `commit-msg` hook will reject non-conforming messages.

## Architecture

React 19 SPA built with Vite 6. Entry point is `src/main.jsx` -> `src/App.jsx`. Finance management and planning application (v0.1.0, early stage).

**Path alias:** `@` resolves to `./src` — use `@/components/...`, `@/lib/...`, etc. in all imports.

**Pre-commit hooks:** Husky runs lint-staged on commit, which applies Prettier to all staged `*.{js,jsx,json,css,md}` files automatically.

**Project structure:**

```
src/
├── main.jsx
├── App.jsx
├── assets/
│   └── images/          # SVG logos and static images
├── components/
│   └── ui/              # Reusable UI components
│       ├── AppBar/       # Each: .jsx, .module.css, .stories.jsx
│       ├── AppNavigation/
│       ├── Button/
│       ├── DateNavigation/
│       ├── ResumeItem/
│       ├── ResumeOverview/
│       └── Select/
├── pages/                # Route-level page components
│   ├── Planning.jsx
│   └── Resume.jsx
├── services/
│   ├── Database/         # Public data access layer — import this in components
│   │   ├── Database.js
│   │   └── index.js
│   └── Firebase/         # Internal — do not import in UI code
│       ├── firebase.js
│       └── DATA.mock.js
└── styles/               # Global CSS and design tokens
    ├── index.css
    └── tokens.css
```

**Component convention:** Each UI component lives in its own folder under `components/ui/` with co-located `.jsx`, `.module.css`, and `.stories.jsx` files.

**Styles:** `styles/tokens.css` holds design tokens; `styles/index.css` imports them and Radix themes.

## Services

### Data Access Layer

The project uses a two-layer service architecture. React components and pages must **only** interact with `DatabaseService` — never import or call `FirebaseService` directly from UI code.

```
React components/pages
        ↓
DatabaseService   (@/services/Database)
        ↓
FirebaseService   (@/services/Firebase/firebase)   ← internal, do not use in UI
```

### DatabaseService (`@/services/Database`)

Singleton. The public API for all data access in the application. Exposes domain-oriented methods with computed fields applied where relevant.

```javascript
import Database from '@/services/Database'

// Read
await Database.getCurrent(year, month) // returns current balance data or null
await Database.getBudget(year, month) // returns budget with computed balance per category + result totals, or null

// Write
await Database.updateCurrent(year, month, data)
await Database.updateBudget(year, month, data)
```

`getBudget` enriches each category with a computed `balance` field (`plan - spent`) and appends a `result` key with aggregated `plan`, `spent`, and `balance` totals. Never recompute these in components — rely on the values returned by `DatabaseService`.

### FirebaseService (`@/services/Firebase/firebase`)

Internal singleton. Handles Firestore reads/writes and mock mode. **Do not import this in React components or pages.** Only `DatabaseService` should depend on it.

Firestore document path: `budgets/{year}/months/{month}`

Mock mode is enabled when `VITE_USE_MOCK=true`. In mock mode, writes are not persisted and a console warning is emitted.

### Environment Variables

Required in `.env`:

```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID
VITE_USE_MOCK   # set to "true" to use mock data instead of Firestore
```

## JavaScript & JSX Standards

### Naming Conventions

- Booleans: `isActive`, `hasPermission`, `canEdit`
- Functions: verbs (`getUserData`, `calculateTotal`, `validateInput`)
- Classes: nouns (`UserService`, `PaymentProcessor`, `Config`)

### Memory Management

Always clean up side effects in React components:

```javascript
useEffect(() => {
  const controller = new AbortController()
  const timerId = setInterval(() => syncData(), 30_000)

  fetchData({ signal: controller.signal })

  return () => {
    controller.abort()
    clearInterval(timerId)
  }
}, [])
```

### Security

**Code Injection**

- Never use `eval()` or `Function()` constructor
- Validate URLs before redirects or `window.open()`

**XSS (Cross-Site Scripting)**

- Avoid `innerHTML` with user input; use `textContent` or DOM APIs
- Sanitize and encode user-generated content for the correct context (HTML, JavaScript, URL)

```javascript
// Bad
element.innerHTML = userInput

// Good
element.textContent = userInput
```

**Authentication & Tokens**

- Never store tokens in `localStorage` (use `httpOnly` cookies or memory)
- No hardcoded credentials or API keys in code

**Data Exposure**

- No sensitive data in logs, console, or error messages
- No sensitive data in URLs or HTML attributes

**Prototype Pollution**

- Validate keys when merging objects from untrusted sources (avoid `__proto__`, `constructor`, `prototype`)
- Use `Object.create(null)` or schema validation (Zod, Joi) for external configs

**PostMessage Security**

- Always validate `event.origin` and message structure before processing
- Use specific `targetOrigin` (never `"*"`) when sending messages

## CSS & Styling Standards

### Stack

- Radix Themes (`@radix-ui/themes`) for pre-built UI components, layout primitives, and the design token system
- Plain CSS with CSS Modules (`.module.css`) for component-scoped styles
- CSS custom properties (tokens) in `src/styles/tokens.css` for project-level overrides on top of Radix tokens
- No Sass, Less, Tailwind, or other preprocessors
- No inline styles unless required for dynamic values (e.g. layout animations)

### Theme Configuration

The `<Theme>` provider in `src/main.jsx` sets the global theme baseline:

```jsx
<Theme
  appearance="light"
  accentColor="indigo"
  grayColor="slate"
  radius="medium"
  scaling="100%"
>
```

### Style Structure

```
src/styles/
├── index.css      # Import order: normalize → Radix → tokens → global
├── tokens.css     # Project font families and .radix-themes overrides only (not colors, spacing, radius)
└── global.css     # Global element resets and base styles
```

CSS import order in `index.css`:

```css
@import 'modern-normalize';
@import '@radix-ui/themes/styles.css';
@import './tokens.css';
@import './global.css';
```

Radix styles must be imported before project tokens and global styles so that `.radix-themes` overrides in `tokens.css` take precedence.

### CSS Conventions

- Use CSS Modules (`ComponentName.module.css`) for component-specific styles
- Reference tokens via `var(--token-name)` — never hardcode colors, spacing, or typography values
- Use native CSS nesting where supported (modern browsers)
- For third-party overrides, use `:global()` inside the module
- Override Radix tokens by targeting the `.radix-themes` selector in `tokens.css`

### Radix Themes Tokens

All tokens are available globally once the `<Theme>` provider is mounted.

**Colors** — `--accent-1` through `--accent-12` and `--gray-1` through `--gray-12` follow a semantic scale: steps 1-2 are backgrounds, 3-5 interactive, 6-8 borders, 9-10 solid fills, 11-12 accessible text. Use `--accent-9` for the primary solid accent, `--accent-contrast` for text on top of it.

**Surfaces** — `--color-background` (page), `--color-panel-solid` / `--color-panel-translucent` (cards, popovers), `--color-surface` (inputs), `--color-overlay` (dialogs).

**Spacing** — `--space-1` through `--space-9` (4px → 64px).

### Layout

Use Radix Themes layout primitives instead of writing flex or grid in CSS:

- `<Flex>` for flex containers — props: `direction`, `align`, `justify`, `gap`, `wrap`, `grow`, `shrink`
- `<Grid>` for grid containers — props: `columns`, `rows`, `gap`
- `<Box>` for generic block containers with spacing or sizing props

Do NOT use `display: flex` or `display: grid` in CSS Modules for structural layout. CSS Modules are for visual-only properties that have no Radix prop equivalent: borders, background colors, fixed dimensions, transitions, and animations.

All layout props accept responsive objects: `gap={{ initial: '2', md: '4' }}`.

When the rendered element matters semantically, use `asChild` to compose with the correct HTML element:

```jsx
<Flex asChild align="center">
  <header>...</header>
</Flex>
```

### Typography

- `--font-family-display` (`JetBrains Mono`) — display, headlines, titles (H1-H6, hero numbers, card titles)
- `--font-family-body` (`DM Sans`) — body text, labels, buttons, inputs, captions, navigation

Never hardcode `font-family` values. Always reference these tokens.

## Storybook

### Conventions

- Stories colocated with their component in the same folder
- CSF3 format: named exports for stories, default export with `meta`
- Use `argTypes` to document props via Controls addon
- No hardcoded colors or spacing in story markup; use CSS tokens via `var(--token)` in component styles
- Story names in English, PascalCase
- One story per meaningful visual state (Default, Disabled, Loading, etc.)

### Example

```jsx
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' }
  }
}

export const Default = {
  args: { children: 'Click me', variant: 'primary' }
}

export const Disabled = {
  args: { children: 'Disabled', disabled: true }
}
```

## Unit Tests

- Test behavior, not implementation
- Focus on critical paths over 100% coverage
- Each test should run independently without shared state
- Clean up after tests (`afterEach`/`afterAll` when needed)

## Skills

Skills are step-by-step workflows for recurring tasks. Full skill files live in `.agents/skills/`.

### Create Component (`.agents/skills/create-component/SKILL.md`)

Use when asked to create, build, or add a component, UI element, or widget.

**Before starting** — if the component's purpose, variants, controlled/uncontrolled behavior, or prop API is ambiguous, ask the user before writing any code.

**Workflow:**

1. **Check for an existing component** — look in `src/components/ui/` before creating a new one; extend or adapt if one already covers the use case.

2. **Check Radix** — use the Context7 MCP tool (`resolve-library-id` + `get-library-docs`) to find a matching Radix Primitives (`@radix-ui/react-*`) or Radix Themes component. Use Radix as the base when available; do not re-implement accessibility behavior it already provides. Fall back to semantic HTML with explicit ARIA only when no Radix primitive applies.

3. **File locations:**

| File      | Path                                                            |
| --------- | --------------------------------------------------------------- |
| Component | `src/components/ui/<ComponentName>/<ComponentName>.jsx`         |
| Styles    | `src/components/ui/<ComponentName>/<ComponentName>.module.css`  |
| Story     | `src/components/ui/<ComponentName>/<ComponentName>.stories.jsx` |

4. **Implement** — CSS Modules only, no Radix Themes style props, no hardcoded font families. Reference tokens via `var(--token-name)`. Available out of the box from Radix: color scales (`--gray-*`, `--accent-*`), surfaces (`--color-background`, `--color-panel-solid`, etc.), spacing (`--space-*`), radius (`--radius-1` through `--radius-6`). Project-specific tokens in `tokens.css`: `--default-font-family`, `--heading-font-family`, `--code-font-family`.

5. **Write the story** — follow the Storybook conventions in this file. At minimum: a default export with `meta` and one named story per meaningful visual state.

**Checklist:**

- [ ] Checked `src/components/ui/` for an existing component to extend
- [ ] Checked Radix docs for a matching primitive or Themes component
- [ ] Component, styles, and story created at correct paths
- [ ] CSS Module uses only design tokens (no hardcoded values)
- [ ] Story has a default export and at least one named story
