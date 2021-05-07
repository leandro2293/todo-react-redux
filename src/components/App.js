import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import Todolist from "./TodoList";

import "./global.css";

function App() {
  return (
    <Provider store={store}>
      <Todolist />
    </Provider>
  );
}

export default App;

/**
 * Aplicação Todo
 */