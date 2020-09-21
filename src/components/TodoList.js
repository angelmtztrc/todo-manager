import React from 'react';
import PropTypes from 'prop-types';

// Components
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <main className="mt-5 mx-auto bg-white w-full max-w-lg rounded-md shadow-md p-8">
      {todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </main>
  );
};

TodoList.propTypes = {
  // Array of todos
  todos: PropTypes.array.isRequired
};

export default TodoList;
