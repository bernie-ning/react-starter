import * as React from 'react';

const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            complete: !todo.complete,
            title: action.id + ' complete',
          };
        } else {
          return todo;
        }
      });
    default:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            complete: !todo.complete,
            title: action.id + ' not complete',
          };
        } else {
          return todo;
        }
      });
  }
};

export default function UseReducer() {
  const [todos, dispatch] = React.useReducer(reducer, initialTodos);

  const handleComplete = (todo, event) => {
    console.log(todo);
    console.log(event.target.checked);
    if (event.target.checked) {
      dispatch({ type: 'COMPLETE', id: todo.id });
    } else {
      dispatch({ type: 'NOT COMPLETE', id: todo.id });
    }
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={(e) => handleComplete(todo, e)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
