import React, { useState } from 'react';
import ButtonsActions from "../ButtonsActions";

import { useSelector, useDispatch } from "react-redux";

import { Creators as todoActions } from "../../store/ducks/todos";

import './styles.css';

export default function Todolist() {
  const [textTodo, setTextTodo] = useState('');
  const { todos } = useSelector(state => state);
  const dispatch = useDispatch();

  function addTodo(text){
    dispatch(todoActions.addTodoAction(text));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(textTodo);
    setTextTodo("");
  }
  return (
    <section>
      <h3>Todo APP - React, Redux</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={textTodo} 
          onChange={e => setTextTodo(e.target.value)} 
          required />
        <input type="submit" value="ADD"></input>
      </form>
      <ul style={{}}>
        {todos.map(todo => (
          <li key={todo.id} 
              style={{
                  backgroundColor: todo.complete ? "#26A69A" : "", 
                  transition: "linear 0.5s"
              }}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}
            <ButtonsActions id={todo.id}/>
          </li>
        ))}
      </ul>
      <pre>
        <code>
          Aplicação ToDo criada com as seguintes tecnologias:
          <p>ReactJs, Redux, React-Redux, Redux-Sauce, React-Hooks</p>
        </code>
      </pre>
    </section>
  );
}