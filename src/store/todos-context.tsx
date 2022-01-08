import React, { useState } from 'react';

import Todo from '../models/todo';

interface TodosContextObj {
  // type definitions
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (todoId: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
  // instantiations
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: React.FC<{}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log('todos:', todos);

  const handleAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const handleRemoveTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
