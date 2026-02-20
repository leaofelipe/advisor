---
name: create-component
description: Creates UI components using Radix primitives and CSS Modules with a Storybook story. Use when asked to create, build, or add a component, UI element, or widget.
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

### 2. Check Radix documentation

Use the documentation-lookup skill to check whether Radix UI has a primitive or Radix Themes has a component that matches the behavior needed.

- **Radix Primitives** (`@radix-ui/react-*`): headless, unstyled components for complex interactive patterns — use for things like Dialog, DropdownMenu, Select, Tooltip, Tabs, Accordion, etc.
- **Radix Themes**: pre-styled components — check if a Themes component fits before building from scratch.

If a suitable Radix primitive exists, use it as the base and compose with CSS Modules for styling. Do not re-implement accessibility behavior (focus management, keyboard navigation, ARIA) that Radix already provides.

If no Radix primitive covers the use case, fall back to semantic HTML with explicit accessibility handling.

### 3. Determine file locations

| File      | Path                                                            |
| --------- | --------------------------------------------------------------- |
| Component | `src/components/ui/<ComponentName>/<ComponentName>.jsx`         |
| Styles    | `src/components/ui/<ComponentName>/<ComponentName>.module.css`  |
| Story     | `src/components/ui/<ComponentName>/<ComponentName>.stories.jsx` |

### 4. Implement the component

- Use a Radix primitive as the base when one is available (see step 2)
- Fall back to semantic HTML only when no Radix primitive applies
- Use CSS Modules (`.module.css`) for all styles — never use Radix Themes' built-in style props
- Reference tokens via `var(--token-name)` — never hardcode font-family values
- Use native CSS nesting where supported
- No inline styles unless strictly required for dynamic values

**Available tokens** (`src/styles/tokens.css`):

- Font families: `--default-font-family` (body/UI text), `--heading-font-family` (display/titles), `--code-font-family` (monospace/code)
- These are Radix theme tokens wired to the project fonts — never use `--font-family-display` or `--font-family-body` directly in component styles

### 5. Write the Storybook story

Read the Storybook project rule and follow the story conventions defined there.

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
- [ ] Checked Radix docs for a matching primitive or Themes component
- [ ] Component file created at correct path
- [ ] CSS Module uses only design tokens (no hardcoded font families)
- [ ] Radix primitive used for accessibility behavior (or semantic HTML with ARIA if no primitive applies)
- [ ] Story has a Default export and at least one named story
