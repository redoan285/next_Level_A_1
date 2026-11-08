# 2. How does TypeScript's type hierarchy work with `any`, `unknown`, and `never`? Why is `unknown` always preferred over `any`?

In TypeScript, `any`, `unknown`, and `never` are three important types. Each has a different purpose and behaves differently in the type system.

Understanding these types helps us write safer and more reliable code.

## 1. Any Type

The `any` type disables most TypeScript type checking for a particular value.

It allows us to assign values of any type and use them without checking their actual type.

### Example:

```ts
let value: any = "Hello";

value = 100;
value = true;

console.log(value);
```

Here, the same variable can store a string, number, or boolean.

### Disadvantage of Any

```ts
let data: any = "TypeScript";

console.log(data.toFixed());
```

TypeScript will not report an error for this operation, even though `toFixed()` is not a string method.

This can cause runtime errors.

Therefore, using `any` unnecessarily reduces type safety.

## 2. Unknown Type

The `unknown` type can accept values of any type, just like `any`.

However, unlike `any`, we cannot directly perform operations on an unknown value without checking its type first.

### Example:

```ts
let value: unknown = "Hello";

value = 100;
value = true;
```

All these assignments are valid.

However, the following code will produce a TypeScript error:

```ts
let data: unknown = "TypeScript";

// TypeScript Error
console.log(data.toUpperCase());
```

Why?

Because TypeScript does not know whether `data` is actually a string.

### Correct Way: Type Narrowing

```ts
let data: unknown = "TypeScript";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

Here, we use `typeof` to check the type before accessing the string method.

This makes our code safer.

## 3. Never Type

The `never` type represents values that never occur.

It is commonly used for functions that never return normally, such as functions that always throw an error or run an infinite loop.

### Example 1: Throwing an Error

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

This function always throws an error and never returns normally.

### Example 2: Infinite Loop

```ts
function infiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}
```

This function never finishes execution, so its return type is `never`.

### Example 3: Exhaustive Checking

```ts
type Status = "success" | "error";

function handleStatus(status: Status): string {
  switch (status) {
    case "success":
      return "Operation successful";

    case "error":
      return "Something went wrong";

    default: {
      const check: never = status;
      return check;
    }
  }
}
```

Here, `never` helps ensure that all possible status values have been handled.

If another status is added without updating the switch statement, TypeScript can report an error.

## 4. Difference Between Any, Unknown, and Never

| Feature | Any | Unknown | Never |
|---|---|---|---|
| Accepts Any Value | Yes | Yes | No |
| Direct Operations | Yes | No | Not applicable |
| Type Checking Required | No | Yes | Not applicable |
| Type Safety | Low | High | Strict |
| Main Purpose | Disable type checking | Safely handle unknown data | Represent impossible values |

## 5. Why Is Unknown Preferred Over Any?

`unknown` is preferred over `any` because it provides better type safety.

### Main Reasons:

1. **Type Safety:** Unknown prevents unsafe operations before checking the actual type.
2. **Type Narrowing:** We must use `typeof`, `instanceof`, or other checks before using the value.
3. **Fewer Runtime Errors:** It helps catch potential mistakes during development.
4. **Safer External Data:** It is useful when handling API responses, user inputs, and other untrusted data.

### Example Comparison:

Using `any`:

```ts
let value: any = "Hello";

console.log(value.toFixed());
```

TypeScript allows this, but it can fail at runtime.

Using `unknown`:

```ts
let value: unknown = "Hello";

if (typeof value === "number") {
  console.log(value.toFixed());
}
```

Here, TypeScript allows `toFixed()` only after confirming that the value is a number.

## 6. Understanding the Type Hierarchy

A simplified way to understand these types:

- `any`: Allows almost any operation and bypasses most type checking.
- `unknown`: Can hold any value, but requires type checking before use.
- `never`: Represents a value that cannot exist or a function that never returns normally.

An important point is that `unknown` is the safer top type, while `never` is the bottom type in TypeScript's type system. `any` behaves differently and can bypass normal type relationships.

## Conclusion

`any`, `unknown`, and `never` have different roles in TypeScript.

- Use `any` only when absolutely necessary.
- Prefer `unknown` when handling data whose type is not known.
- Use `never` for impossible states, exhaustive checking, and functions that never return normally.

The most important lesson is to prefer `unknown` over `any` whenever possible because it helps maintain type safety and prevents unsafe operations.