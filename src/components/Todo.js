import React from 'react';

const Todo = () => {
  return (
    <div className="px-4 py-2 border-l-4 border-green-500">
      <div className="flex justify-between items-center">
        <p className="text-base line-through text-gray-600">
          Buy Xbox Game Pass Ultimate Subscription
        </p>
        <div>
          <button className="mr-2 px-2 py-2 bg-green-600 hover:bg-green-700 transition-all ease-out duration-300 rounded-md">
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </button>
          <button className="px-2 py-2 bg-red-600 hover:bg-red-700 transition-all ease-out duration-300 rounded-md">
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
