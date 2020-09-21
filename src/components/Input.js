import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const Input = ({ setAlert, todos, setTodos }) => {
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

    // prevent user from sending empty field
    if (todo.description.trim() === '' || todo.description.trim() === null) {
      console.log('error');
      setAlert({
        message: 'Description is required',
        type: 'error'
      });

      // Clear Alert
      setTimeout(() => {
        setAlert(null);
      }, 2000);

      return;
    }

    // Create todo
    setTodos([
      ...todos,
      {
        ...todo,
        id: shortid.generate()
      }
    ]);

    // Clear input
    setTodo({
      description: '',
      isDone: false
    });

    // Show success alert
    setAlert({
      message: 'Todo created successfully',
      type: 'success'
    });

    // Clear Alert
    setTimeout(() => {
      setAlert(null);
    }, 2000);
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

Input.propTypes = {
  // Set values of the Alerts
  setAlert: PropTypes.func.isRequired,

  // Array of all todos
  todos: PropTypes.array.isRequired,

  // Function to add more todos
  setTodos: PropTypes.func.isRequired
};

export default Input;
