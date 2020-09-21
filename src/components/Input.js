import React, { useState } from 'react';

const Input = () => {
  // Save todo in local state
  const [todo, setTodo] = useState({
    description: '',
    isDone: false
  });

  const handleChange = e => {
    setTodo({
      ...todo,
      description: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <div className="w-full mt-5">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full block max-w-lg relative"
      >
        <input
          onChange={handleChange}
          value={todo.description}
          type="text"
          name="description"
          placeholder="Todo description"
          className="w-full block px-6 py-3 rounded-md shadow-md placeholder-gray-500"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 mt-2 mr-6 py-1 px-2 bg-green-600 hover:bg-green-700 transition-all ease-out duration-300 rounded-md"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Input;
