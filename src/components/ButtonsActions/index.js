import React from 'react';
import { MdDelete, MdCheckCircle } from "react-icons/md";

import { useDispatch } from "react-redux";
import * as todoActions from "../../store/actions/todos";

import './styles.css';

function ButtonsActions(props) {
  const dispatch = useDispatch();
  function toogleTodo() {
    dispatch(todoActions.toogleTodoAction(props.id))
  }

  function removeTodo() {
    dispatch(todoActions.removeTodoAction(props.id))
  }

  return (
    <>
      <button onClick={toogleTodo}><MdCheckCircle></MdCheckCircle></button>
      <button onClick={removeTodo}><MdDelete></MdDelete></button>
    </>
  );
}

export default ButtonsActions;