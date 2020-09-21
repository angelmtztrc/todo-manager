import React, { useState } from 'react';

// Components
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  // Save todos in local state
  const [todos, setTodos] = useState([]);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto flex flex-col justify-center items-center pt-20">
        <h1 className="text-5xl text-white font-bold">Todo Manager</h1>
        <Input />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
