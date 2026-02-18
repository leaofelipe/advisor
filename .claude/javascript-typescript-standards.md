# JavaScript & TypeScript Standards

Apply these rules to all `.js`, `.ts`, `.jsx`, `.tsx`, `.mjs`, `.cjs` files.

## Arrays & Iteration

- Use map/filter/reduce over forEach with side effects
- Use appropriate data structures (Map, Set) for lookups

## Async Operations

- Use async/await over .then()
- Use Promise.all() for parallel operations

```javascript
// ❌ BAD
async function fetchUsers() {
  const user1 = await fetchUser(1);
  const user2 = await fetchUser(2);
  return [user1, user2];
}

// ✅ GOOD
async function fetchUsers() {
  const [user1, user2] = await Promise.all([fetchUser(1), fetchUser(2)]);
  return [user1, user2];
}
```

## DOM & Browser Performance

- Use DocumentFragment for multiple DOM insertions
- Batch DOM operations (group reads, then writes to avoid layout thrashing)
- Cache DOM references
- Use event delegation instead of multiple listeners
- Debounce/throttle scroll/resize handlers
- Use passive listeners for touch/scroll events
- Use requestAnimationFrame for animations
- Use transform/opacity over layout-triggering properties

## Performance

- Offload heavy computations to Web Workers
- Avoid complex regex patterns (catastrophic backtracking)
- Profile before optimizing

## Memory Management

Always clean up resources:

- Clear timers, event listeners, and observers
- Close connections (websockets, streams, workers)
- Clean media elements and Blob URLs
- Implement cache limits/TTL
- Avoid large closures and dangling references

```javascript
// ✅ GOOD - cleanup pattern
class DataService {
  constructor() {
    this.ws = new WebSocket('wss://api.example.com');
    this.timerId = null;
  }

  destroy() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}
```

## Dependencies

- Justify new libraries (necessity? alternatives? bundle impact? vulnerabilities? maintained?)
- Consider transitive dependencies and tree-shaking compatibility

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

# Security

## Code Injection

- Never use eval() or Function() constructor
- Validate URLs before redirects or window.open()

## XSS (Cross-Site Scripting)

- Avoid innerHTML with user input; use textContent or DOM APIs
- Sanitize and encode user-generated content for the correct context (HTML, JavaScript, URL)

```javascript
// ❌ BAD
element.innerHTML = userInput;

// ✅ GOOD
element.textContent = userInput;
```

## Authentication & Tokens

- Never store tokens in localStorage (use httpOnly cookies or memory)
- No hardcoded credentials or API keys in code

## Data Exposure

- No sensitive data in logs, console, or error messages
- No sensitive data in URLs or HTML attributes

## Prototype Pollution

- Validate keys when merging objects from untrusted sources (avoid `__proto__`, constructor, prototype)
- Use Object.create(null) or schema validation (Zod, Joi) for external configs

```javascript
// ❌ BAD
function merge(target, source) {
  for (let key in source) {
    target[key] = source[key];
  }
}

// ✅ GOOD
function merge(target, source) {
  const dangerousKeys = ['__proto__', 'constructor', 'prototype'];
  for (let key in source) {
    if (!dangerousKeys.includes(key) && source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}
```

## PostMessage Security

- Always validate event.origin and message structure before processing
- Use specific targetOrigin (never "*") when sending messages

```javascript
// ✅ GOOD
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://trusted-domain.com') {
    return;
  }

  if (typeof event.data === 'object' && event.data.type === 'EXPECTED_TYPE') {
    processMessage(event.data);
  }
});
```

## External Resources

- Use rel="noopener noreferrer" for target="_blank" links
- Validate and sanitize third-party content
