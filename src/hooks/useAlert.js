import React, { useState } from 'react';

const useAlert = () => {
  const [alert, setAlert] = useState(null);

  const Alert = () => (
    <div
      className={`${
        alert.type === 'error' ? 'bg-red-600' : 'bg-green-600'
      } absolute top-0 right-0 mt-10 mr-10 px-6 py-3 rounded-md`}
    >
      <p className="text-white font-bold text-lg">{alert.message}</p>
    </div>
  );

  // State - Component - Functions
  return [alert, Alert, setAlert];
};

export default useAlert;
