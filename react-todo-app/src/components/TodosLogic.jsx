import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
import InputTodo from "./InputTodo";
import TodosList from '@/components/TodosList';

const TodosLogic = () => {
    // const todos = [
    //     {
    //       id: 1,
    //       title: 'Setup development environment',
    //       completed: true,
    //     },
    //     {
    //       id: 2,
    //       title: 'Develop website and add content',
    //       completed: false,
    //     },
    //     {
    //       id: 3,
    //       title: 'Deploy to live server',
    //       completed: false,
    //     },
    //   ];
    const [todos, setTodos] = useState([
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ]);
    const handleChange = (id) => {
      setTodos((prevState) =>
        prevState.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      );
    };
    const delTodo = (id) => {
      setTodos([
        ...todos.filter((todo) => {
          return todo.id !== id;
        }),
      ]);
    };
    const addTodoItem = (title) => {
      // update state with user's input
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    
    };
    return (
        <div>
            <InputTodo addTodoItem={addTodoItem} />
            <TodosList todosProps={todos} handleChange={handleChange} delTodo={delTodo} />
        {/* <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul> */}
      </div>
    )
  }
  export default TodosLogic;
  