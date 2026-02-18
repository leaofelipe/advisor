# Code Quality Standards

Always apply these rules to all files.

## Single Responsibility

- Each function/module does one thing well
- Keep functions small
- DRY: Avoid duplicated logic

## Code Clarity

- Write self-documenting code
- Use descriptive names
- Avoid magic numbers; use named constants

## Naming Conventions

- Booleans: `isActive`, `hasPermission`, `canEdit`
- Functions: verbs (`getUserData`, `calculateTotal`, `validateInput`)
- Classes/types: nouns (`UserService`, `PaymentProcessor`, `Config`)

## Control Flow

- Prefer early returns over nested conditionals
- Avoid deep nesting

```typescript
// ❌ BAD
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return doSomething(user);
      }
    }
  }
  return null;
}

// ✅ GOOD
function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return null;
  if (!user.hasPermission) return null;

  return doSomething(user);
}
```

## Error Handling

- Handle errors explicitly
- Don't ignore caught errors
- Log or re-throw with context

```typescript
// ❌ BAD
try {
  await fetchData();
} catch (e) {}

// ✅ GOOD
try {
  await fetchData();
} catch (e) {
  logger.error('Failed to fetch data', { error: e });
  throw new Error('Data fetch failed', { cause: e });
}
```

## Comments

- Comment the "why", not the "what"
- Use comments for non-obvious decisions, workarounds, or business context
- Avoid obvious comments that just narrate the code

```typescript
// ❌ BAD
// Increment counter
counter++;

// ✅ GOOD
// Using setTimeout to avoid blocking the main thread during heavy computation
setTimeout(() => processLargeDataset(), 0);
```

## Side Effects

- Isolate side effects (I/O, APIs, database operations) from business logic
- Make side effects explicit and easy to identify
- Keep pure functions pure

```typescript
// ❌ BAD - mixed concerns
function calculateDiscount(user, product) {
  const discount = product.price * 0.1;
  logToDatabase('discount_calculated', { user, discount }); // side effect
  return discount;
}

// ✅ GOOD - separated concerns
function calculateDiscount(product) {
  return product.price * 0.1;
}

function applyAndLogDiscount(user, product) {
  const discount = calculateDiscount(product);
  logToDatabase('discount_calculated', { user, discount });
  return discount;
}
```
