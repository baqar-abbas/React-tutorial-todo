import { useState } from 'react';
const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    } else {
      // alert('Please add item');
      setError('Please add item');
      setTimeout(() => {
        setError('');
      }, 2000);
    }
    // addTodoItem(title);
    // console.log(title);
    // setTitle('');
  };
    return (
      <>
      <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
        className="input-text"
      />
      
      <button className="input-submit">Submit</button>
      <br />
      {/* {error && <span className="error">{error}</span>} */}
    </form>
    {error && <span className="error">{error}</span>}
    </>
    );
  };
  export default InputTodo;
  