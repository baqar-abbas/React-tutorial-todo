import { useState } from 'react';
import styles from '@/styles/TodoItem.module.css';
const TodoItem = ({ itemProp, handleChange, delTodo }) => {
    const [editing, setEditing] = useState(false);
    // const handleChange = (id) => {
    //     console.log('clicked', id);
    //   };
    // const handleEditing = () => {
    //     setEditing(true);
    //   };
    //   let viewMode = {};
    //   let editMode = {};
    //   if (editing) {
    //     viewMode.display = 'none';
    //   } else {
    //     editMode.display = 'none';
    //   }
    return  (
    <li className={styles.item}>
        {/* <input type="checkbox" /> */}
        <div className={styles.content} >
        <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
        className={styles.textInput}
      />
      {/* <button onClick={handleEditing}>Edit</button> */}
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
        </div>
        </li>
    );
  };
  export default TodoItem;
  