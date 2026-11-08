# Type vs Interface in TypeScript

In TypeScript, both `type` aliases and `interface` are used to define the structure and shape of data. However, they have some important differences.

## 1. Type Alias

A `type` alias allows us to create a custom name for different types, including primitive types, objects, unions, intersections, and tuples.

**Example:**
```ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive" | "pending";
type UserID = number;
```

## 2. Interface

An `interface` is mainly used to define the structure of objects and classes. It describes the properties and methods an object should have.

**Example:**
```ts
interface User {
  name: string;
  age: number;
}
```

## 3. Extending and Combining

An interface can extend another interface using `extends`.

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}
```

With `type`, we can combine multiple types using the intersection (`&`) operator.

```ts
type Person = { name: string };
type Employee = { salary: number };

type FullEmployee = Person & Employee;
```

## 4. Declaration Merging

Interfaces support declaration merging, meaning multiple interfaces with the same name are automatically combined.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

Type aliases do not support declaration merging.

## 5. Core Differences

| Feature | Type | Interface |
|---|---|---|
| Object structure | Yes | Yes |
| Primitive aliases | Yes | No |
| Union types | Yes | No |
| Intersection | `&` | `extends` / intersections |
| Tuples | Yes | Less common |
| Declaration merging | No | Yes |

## 6. When to Choose?

**Choose `interface` when:**
- Defining object structures.
- Creating class contracts.
- Extending object structures.
- Using declaration merging.

**Choose `type` when:**
- Defining union or primitive types.
- Creating tuples.
- Combining complex types.

## Conclusion

Both `type` and `interface` are useful in TypeScript. Use `interface` mainly for object structures and `type` for unions, tuples, primitives, and complex type combinations. Neither is universally better; choose based on your requirements.