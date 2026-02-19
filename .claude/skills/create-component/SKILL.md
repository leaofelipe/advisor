---
name: create-component
description: Create React components for this project using shadcn/ui, Tailwind CSS v4, and TypeScript. Checks the shadcn registry first and installs existing components, or builds custom ones following project conventions.
---

This skill guides creation of React components in this project (shadcn/ui new-york style, Tailwind CSS v4, TypeScript strict, React 19).

## Step 1 — Understand the request

Before writing any code, clarify:

- What is the component and what does it do?
- Does it need variants (size, intent/color, state)?
- Does it compose with or extend an existing component?

## Step 2 — Gather up-to-date documentation

Pull relevant docs using whatever tools are available:

- **If Context7 MCP is available:** use `resolve-library-id` then `query-docs` to fetch shadcn/ui docs for the target component and Tailwind CSS v4 utility docs.
- **Fallback:** WebFetch `https://ui.shadcn.com/docs/components` to check the registry manually.

## Step 3 — Check the shadcn registry

Using the docs gathered above, determine if the component already exists in shadcn:

- **If found:** install it with `bunx shadcn add <component>`. It will land in `src/components/ui/`. After installation, review the generated component for any project-specific adjustments (extra variants, prop extensions, composition wrappers).
- **If not found:** proceed to Step 4.

## Step 4 — Build a custom component

Follow project conventions exactly:

**Location**

- Generic UI primitive → `src/components/ui/<component-name>.tsx`
- Feature/composite component → `src/components/<component-name>.tsx`

**Styling**

- Tailwind CSS v4 utility classes only (no arbitrary PostCSS config)
- Use `cn()` from `@/lib/utils` for all conditional/merged class names
- Mirror shadcn new-york conventions: `rounded-md`, `border`, `ring-offset-background`, `focus-visible:ring-2` focus patterns

**Variants**

- **`cva`**: component has named variants (size, intent, color) — always use `cva` + export the variants object and `VariantProps` type
- **`cn()` only**: no variants, just conditional/merged classes (e.g., active state from a prop)

**Icons**

- Use `lucide-react` exclusively (already installed)

**TypeScript**

- Strict mode — no `any` types
- Export a named `<ComponentName>Props` type
- Extend the underlying HTML element props where appropriate: `React.ComponentProps<'button'>`, `React.ComponentProps<'div'>`, etc.
- React 19 passes `ref` as a regular prop — do NOT use `forwardRef`. Use `React.ComponentProps<'element'>` which already includes `ref`.

**Example structure for a custom primitive:**

```tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground border-transparent',
        outline: 'text-foreground',
        destructive:
          'bg-destructive text-destructive-foreground border-transparent'
      }
    },
    defaultVariants: { variant: 'default' }
  }
)

type BadgeProps = React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants>

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
export type { BadgeProps }
```

## Step 5 — Export & usage example

- Use named exports (no default exports for components)
- Provide a concise usage snippet with the correct import path:

```tsx
import { Badge, badgeVariants } from '@/components/ui/badge'
;<Badge variant="outline">New</Badge>
```
