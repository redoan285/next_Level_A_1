# Type vs Interface in TypeScript

In TypeScript, `type` and `interface` are both used to define data types. But they have some differences.

## 1. Type Alias

A `type` alias gives a name to a type. We can use it for objects, strings, numbers, unions, and tuples.

**Example:**

```ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
```

## 2. Interface

An `interface` is mainly used to describe the structure of an object.

**Example:**

```ts
interface User {
  name: string;
  age: number;
}
```

## 3. Extending and Combining

An interface uses `extends` to inherit properties from another interface.

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}
```

We can use `&` with type aliases to combine two types.

```ts
type Person = { name: string };
type Employee = { salary: number };

type FullEmployee = Person & Employee;
```

## 4. Declaration Merging

Interfaces support declaration merging. It means two interfaces with the same name can be combined.

Type aliases do not support this feature.

## 5. Main Differences

| Feature | Type | Interface |
|---|---|---|
| Object | Yes | Yes |
| Primitive | Yes | No |
| Union | Yes | No |
| Intersection | Yes | Yes |
| Declaration Merging | No | Yes |

## 6. When Should We Use Them?

**Use Interface for:**
- Defining object structures.
- Working with classes.
- Extending other interfaces.

**Use Type for:**
- Creating union types.
- Defining primitive types.
- Creating tuples.
- Combining different types.

## Conclusion

Both `type` and `interface` are useful in TypeScript. Use `interface` mainly for objects and `type` for unions, tuples, and other types. Choose one based on your needs.