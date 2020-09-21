import React from 'react';
import PropTypes from 'prop-types';

// Components
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  return (
    <main className="mt-5 mx-auto bg-white w-full max-w-lg rounded-md shadow-md p-8">
      {todos.length > 0 ? (
        todos.map(todo => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))
      ) : (
        <p className="text-center text-gray-700">No todos yet</p>
      )}
    </main>
  );
};

TodoList.propTypes = {
  // Array of todos
  todos: PropTypes.array.isRequired,

  // Set todos
  setTodos: PropTypes.func.isRequired
};

export default TodoList;
