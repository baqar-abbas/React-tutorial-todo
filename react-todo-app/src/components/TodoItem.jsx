import { useState } from 'react';
import styles from '@/styles/TodoItem.module.css';
const TodoItem = ({ itemProp, handleChange, delTodo }) => {
    const [editing, setEditing] = useState(false);
    
    return  (
    <li className={styles.item}>
        
        <div className={styles.content} >
        <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
        className={styles.textInput}
      />
      
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
        </div>
        </li>
    );
  };
  export default TodoItem;
  