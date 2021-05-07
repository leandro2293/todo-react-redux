import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addTodoAction: ['text'],
  toogleTodoAction: ['id'],
  removeTodoAction: ['id']
});

const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), 
    text: action.text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), 
    complete: false 
  }
];

const toogle = (state = INITIAL_STATE, action) => state.map(
  todo =>
    todo.id === action.id
      ? { ...todo, complete: !todo.complete }
      : todo
);

const remove = (state = INITIAL_STATE, action) => state.filter(todo => todo.id !== action.id);

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO_ACTION]: add,
  [Types.TOOGLE_TODO_ACTION]: toogle,
  [Types.REMOVE_TODO_ACTION]: remove
})