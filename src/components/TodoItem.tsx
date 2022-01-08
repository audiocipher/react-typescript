import styles from './TodoItem.module.css';

const TodoItem: React.FC<{
  id: string;
  text: string;
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  const handleClickTodo = (event: React.MouseEvent) => {
    props.onRemoveTodo(props.id);
  };

  return (
    <li className={styles.item} onClick={handleClickTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
