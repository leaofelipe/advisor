---
name: create-component
description: Creates new UI components for the advisor project following established conventions. Checks Base UI docs for an existing headless primitive, wraps it with CSS Modules, and adds a Storybook story. Use when the user asks to create, build, or add a new component, UI element, or widget.
---

# Create Component

## Before starting

If anything is unclear or ambiguous about the requested component, ask the user before writing any code. Do not assume or proceed with guesses.

Things that commonly need clarification:

- The component's purpose or behavior if the name alone is ambiguous
- Expected variants or states (e.g. sizes, disabled, loading)
- Whether the component should be controlled or uncontrolled
- Any specific props or API shape the user has in mind

Only proceed to implementation once you have enough information to build it correctly.

## Workflow

Follow these steps in order:

### 1. Check for an existing component

Look inside `src/components/ui/` for a component that already covers the same purpose. If one exists, extend or adapt it instead of creating a duplicate.

### 2. Check Base UI docs

Use the `plugin-context7-plugin-context7` MCP server to look up the Base UI documentation.

```
resolve-library-id: query "base-ui"
get-library-docs: use the resolved id, topic = "<component name>"
```

- If Base UI has the component (e.g. Dialog, Menu, Select, Checkbox, Popover, Tooltip, etc.), use it as the headless foundation.
- If Base UI does not have it, build the component from scratch in plain JSX.

### 3. Determine file locations

| File      | Path                                                            |
| --------- | --------------------------------------------------------------- |
| Component | `src/components/ui/<ComponentName>/<ComponentName>.jsx`         |
| Styles    | `src/components/ui/<ComponentName>/<ComponentName>.module.css`  |
| Story     | `src/components/ui/<ComponentName>/<ComponentName>.stories.jsx` |

### 4. Implement the component

**When using Base UI:**

- Import from `@base-ui/react/<component-name>` (e.g. `import { Menu } from '@base-ui/react/menu'`)
- Use the compound component pattern: `Component.Root`, `Component.Trigger`, `Component.Popup`, etc.
- Apply styles via CSS Modules; use `[data-*]` attribute selectors for states (`[data-popup-open]`, `[data-highlighted]`, `[data-checked]`, `[data-disabled]`, etc.)
- Use `:global()` for portal/overlay elements that render outside the component tree

**When building from scratch:**

- Use semantic HTML elements
- Handle focus, keyboard navigation, and ARIA attributes explicitly

**CSS rules (always):**

- Use CSS Modules (`.module.css`)
- Reference tokens via `var(--token-name)` — never hardcode colors, spacing, or type values
- Use native CSS nesting where supported
- No inline styles unless strictly required for dynamic values

**Token reference** (`src/styles/tokens.css`):

- Colors: `--color-primary`, `--color-text`, `--color-text-muted`, `--color-border`, `--color-surface`, etc.
- Spacing: `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`
- Typography: `--font-size-sm`, `--font-size-base`, `--font-size-lg`
- Radius: `--radius-sm`, `--radius-md`, `--radius-lg`
- Motion: `--duration-fast`, `--duration-normal`, `--ease-out`

### 5. Write the Storybook story

Read Storybook project's Rule and follow the story conventions defined there.

Place the story at `src/components/ui/<ComponentName>/<ComponentName>.stories.jsx`.

## Example structure

```
src/components/ui/
└── Button/
    ├── Button.jsx
    ├── Button.module.css
    └── Button.stories.jsx
```

## Checklist

- [ ] Checked `src/components/ui/` for an existing component to extend
- [ ] Checked Base UI docs for an existing primitive
- [ ] Component file created at correct path
- [ ] CSS Module uses only design tokens
- [ ] Portal/overlay elements use `:global()` where needed
- [ ] Story has a Default export and at least one named story
- [ ] No hardcoded colors, spacing, or type values
