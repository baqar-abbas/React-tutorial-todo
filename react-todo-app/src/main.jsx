// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import '@/app.css';
import React from "react";
import ReactDOM from "react-dom/client";

// import TodoApp from "./components/TodoApp";
import TodoApp from '@/components/TodoApp';


const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
<React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);

