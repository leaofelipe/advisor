---
name: create-component
description: Creates new UI components for the advisor project following established conventions. Builds plain JSX components wrapped with CSS Modules and adds a Storybook story. Use when the user asks to create, build, or add a new component, UI element, or widget.
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

### 2. Determine file locations

| File      | Path                                                            |
| --------- | --------------------------------------------------------------- |
| Component | `src/components/ui/<ComponentName>/<ComponentName>.jsx`         |
| Styles    | `src/components/ui/<ComponentName>/<ComponentName>.module.css`  |
| Story     | `src/components/ui/<ComponentName>/<ComponentName>.stories.jsx` |

### 3. Implement the component

- Use semantic HTML elements
- Handle focus, keyboard navigation, and ARIA attributes explicitly
- Use CSS Modules (`.module.css`) for all styles
- Reference tokens via `var(--token-name)` — never hardcode font-family values
- Use native CSS nesting where supported
- No inline styles unless strictly required for dynamic values

**Available tokens** (`src/styles/tokens.css`):

- Font families: `--font-family-display`, `--font-family-body`

### 4. Write the Storybook story

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
- [ ] Component file created at correct path
- [ ] CSS Module uses only design tokens (no hardcoded font families)
- [ ] Uses semantic HTML with appropriate ARIA attributes
- [ ] Story has a Default export and at least one named story
