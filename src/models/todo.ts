// models file for Todos.tsx
// describes the shape of a Todo object (what a Todo looks like)
// can use an interface, class, or type to describe the shape
// Rule of thumb: use a class if you need custom logic, otherwise use an interface

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// The class also creates a "Todo" type
class Todo {
  id: string;
  text: string;

  // custom logic for instantiating a Todo object
  constructor(todoText: string) {
    this.id = Math.random().toString(); // use a UUID to create an id
    this.text = todoText;
  }

  // could add custom methods for the object as well
  // ...
}

// a simple interface we could use if we didn't need any custom logic
// interface Todo {
//   id: string;
//   text: string;
// }

export default Todo;
