// React.FC is a type definition from @types/react used in TypeScript
// React.FC tells us that "this is a function that acts as a functional component"
// React.FC is a generic type
// We are "using" a generic type here as opposed to "defining" one
// We are explicitly setting what type we'll use with this generic type
// In this example, the items string array will be merged with the props that already has props.children
// To make the items prop optional, use items?: string[]

import TodoItem from './TodoItem';
import Todo from '../models/todo';
import styles from './Todos.module.css';

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
