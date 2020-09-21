import React from 'react';

const Input = () => {
  return (
    <div className="w-full mt-5">
      <input
        type="text"
        placeholder="Todo description"
        className="px-6 py-3 mx-auto w-full block max-w-lg rounded-md shadow-md placeholder-gray-900"
      />
    </div>
  );
};

export default Input;
