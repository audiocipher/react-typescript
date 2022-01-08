// React.FC is a type definition from @types/react used in TypeScript
// React.FC tells us that "this is a function that acts as a functional component"
// React.FC is a generic type
// We are "using" a generic type here as opposed to "defining" one
// We are explicitly setting what type we'll use with this generic type
// In this example, the items string array will be merged with the props that already has props.children
// To make the items prop optional, use items?: string[]

import { useContext } from 'react';

import { TodosContext } from '../store/todos-context';

import TodoItem from './TodoItem';
import styles from './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
