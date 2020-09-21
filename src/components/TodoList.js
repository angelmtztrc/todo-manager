import React from 'react';

// Components
import Todo from './Todo';

const TodoList = () => {
  return (
    <main className="mt-5 mx-auto bg-white w-full max-w-lg rounded-md shadow-md p-8">
      <Todo />
    </main>
  );
};

export default TodoList;
