export function addTodoAction(text){
  return {
    type: 'ADD_TODO',
    payload: {
      text
    }
  };
}

export function toogleTodoAction(id) {
  return {
    type: "TOOGLE_TODO",
    payload: {
      id
    }
  };
}

export function removeTodoAction(id) {
  return {
    type: "REMOVE_TODO",
    payload: {
      id
    }
  };
}