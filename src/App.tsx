import { useState } from 'react';

// custom hooks
import useAlert from './hooks/useAlert';

// components
import Form from './components/Form';
import Options from './components/Options';
import TodoList from './components/TodoList';

// interfaces
import { Todo } from './interfaces/todo.interface';

// constants
import { FILTER_OPTIONS } from './constants';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>(FILTER_OPTIONS.all);
  const [alert, setAlert, Alert] = useAlert();

  return (
    <div className="relative bg-gray-900">
      {alert && <Alert />}
      <main className="flex flex-col items-center min-h-screen">
        <div className="mt-10 w-full max-w-xs space-y-10 sm:max-w-md lg:max-w-lg">
          <h1 className="text-center text-gray-100 text-5xl font-extrabold">Todo Manager</h1>
          <Form todos={todos} setTodos={setTodos} setAlert={setAlert} />
          <div className="space-y-4">
            <TodoList todos={todos} setTodos={setTodos} filter={filter} />
            <Options todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 mb-5">
          <p className="text-center text-gray-400">
            Made with ❤ by{' '}
            <a
              href="https://github.com/angelmtztrc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:underline"
            >
              Angel Martinez
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
