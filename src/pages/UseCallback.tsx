import * as React from 'react';
import Todos from '../pages/Todos';

export default function UseCallback() {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, 'New Todo']);
  };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
