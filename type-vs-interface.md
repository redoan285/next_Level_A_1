# 1. What are the core differences between `type` aliases and `interface` in TypeScript? When should you choose one over the other?

In TypeScript, both `type` aliases and `interface` are used to define the structure and shape of data. However, they have some important differences in their features and use cases.

## 1. Type Alias

A `type` alias allows us to create a custom name for any type. It can define primitive types, object types, union types, intersection types, tuples, and more.

### Example:

```ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Rakib",
  age: 25,
};
```

We can also use `type` for primitive types:

```ts
type UserID = number;

const id: UserID = 101;
```

### Union Type Example:

```ts
type Status = "active" | "inactive" | "pending";

const userStatus: Status = "active";
```

## 2. Interface

An `interface` is mainly used to define the structure of objects and classes. It describes which properties and methods an object should have.

### Example:

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Sadia",
  age: 22,
};
```

## 3. Extending an Interface

An interface can extend another interface using the `extends` keyword.

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

const employee: Employee = {
  name: "Alice",
  salary: 50000,
};
```

Here, the `Employee` interface inherits the `name` property from the `Person` interface.

## 4. Intersection with Type Alias

We can combine multiple types using the intersection (`&`) operator.

```ts
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type FullEmployee = Person & Employee;

const employee: FullEmployee = {
  name: "Alice",
  salary: 50000,
};
```

## 5. Declaration Merging

One important difference is that interfaces support declaration merging, but type aliases do not.

### Interface Example:

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Rakib",
  age: 25,
};
```

TypeScript automatically combines both interface declarations.

However, declaring another type alias with the same name in the same scope will cause an error.

## 6. Core Differences Between Type and Interface

| Feature | Type Alias | Interface |
|---|---|---|
| Object Structure | Yes | Yes |
| Primitive Types | Yes | No |
| Union Types | Yes | No |
| Intersection Types | Yes (`&`) | Can extend or combine |
| Tuple Types | Yes | Possible, but less common |
| Extending | Intersection (`&`) | `extends` |
| Declaration Merging | No | Yes |

## 7. When Should You Choose One Over the Other?

### Choose Interface When:

- Defining object structures.
- Defining class contracts.
- Extending other interfaces.
- Working with declaration merging.

### Choose Type When:

- Defining union types.
- Creating primitive type aliases.
- Defining tuple types.
- Combining multiple types using intersections.
- Creating complex type compositions.

## Conclusion

Both `type` and `interface` are useful for defining types in TypeScript.

Use `interface` when working mainly with object structures and inheritance.

Use `type` when you need union types, tuples, primitive aliases, or more complex type combinations.

Neither is universally better. Choose the one that best fits your requirements and maintain consistency throughout your project.