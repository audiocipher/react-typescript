import { useRef } from 'react';

import styles from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  // the ref we're creating will be connected to an HTML input element
  const todoTextInputRef = useRef<HTMLInputElement>(null); // must provide an initial value, we use null here

  // FormEvent is for the form submission event
  // MouseEvent would be used for the onclick event
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // const enteredText = todoTextInputRef.current?.value;
    const enteredText = todoTextInputRef.current!.value; // can use "!" when you are sure the value won't access null/undefined

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
