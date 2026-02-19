# JavaScript & TypeScript Standards

Apply these rules to all `.js`, `.ts`, `.jsx`, `.tsx`, `.mjs`, `.cjs` files.

# Naming Conventions

- Booleans: `isActive`, `hasPermission`, `canEdit`
- Functions: verbs (`getUserData`, `calculateTotal`, `validateInput`)
- Classes/types: nouns (`UserService`, `PaymentProcessor`, `Config`)

---

# TypeScript Standards

## Type Safety

- Avoid `any`; use `unknown` for truly dynamic types
- Prefer union types over enums when possible
- Use `as const` for literal types
- Leverage type guards and discriminated unions

```typescript
// ❌ BAD
function processData(data: any) {
  return data.value;
}

// ✅ GOOD
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null && 'value' in data) {
    return data.value;
  }
  throw new Error('Invalid data structure');
}
```

## Type Design

- Use generics to avoid duplication
- Keep types close to usage (avoid premature abstraction)

## Utility Types

- Use built-in utility types (Partial, Pick, Omit, Record)
- Prefer `satisfies` over type assertions when validating structure

```typescript
// ✅ GOOD
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
} satisfies Config;
```

## Error Handling

- Type errors explicitly (custom error classes)

---

# Memory Management

Always clean up side effects in React components:

```typescript
// ✅ GOOD - cleanup in useEffect
useEffect(() => {
  const controller = new AbortController();
  const timerId = setInterval(() => syncData(), 30_000);

  fetchData({ signal: controller.signal });

  return () => {
    controller.abort();
    clearInterval(timerId);
  };
}, []);
```

---

# Security

## Code Injection

- Never use `eval()` or `Function()` constructor
- Validate URLs before redirects or `window.open()`

## XSS (Cross-Site Scripting)

- Avoid `innerHTML` with user input; use `textContent` or DOM APIs
- Sanitize and encode user-generated content for the correct context (HTML, JavaScript, URL)

```javascript
// ❌ BAD
element.innerHTML = userInput;

// ✅ GOOD
element.textContent = userInput;
```

## Authentication & Tokens

- Never store tokens in `localStorage` (use `httpOnly` cookies or memory)
- No hardcoded credentials or API keys in code

## Data Exposure

- No sensitive data in logs, console, or error messages
- No sensitive data in URLs or HTML attributes

## Prototype Pollution

- Validate keys when merging objects from untrusted sources (avoid `__proto__`, `constructor`, `prototype`)
- Use `Object.create(null)` or schema validation (Zod, Joi) for external configs

## PostMessage Security

- Always validate `event.origin` and message structure before processing
- Use specific `targetOrigin` (never `"*"`) when sending messages
