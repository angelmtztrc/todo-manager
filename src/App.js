import React, { useState } from 'react';

// Components
import Input from './components/Input';
import TodoList from './components/TodoList';
import useAlert from './hooks/useAlert';

function App() {
  // Save todos in local state
  const [todos, setTodos] = useState([]);

  // Alert Custom Hook
  const [alert, Alert, setAlert] = useAlert();

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {alert ? <Alert /> : null}
      <div className="container mx-auto flex flex-col justify-center items-center pt-20">
        <h1 className="text-5xl text-white font-bold">Todo Manager</h1>
        <Input setAlert={setAlert} todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center mb-10">
        <p className="text-gray-500">
          Made with ❤ by{' '}
          <a
            href="https://github.com/angel-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-400"
          >
            Angel Martinez
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
