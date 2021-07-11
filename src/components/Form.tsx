import React, { FormEvent, useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { nanoid } from 'nanoid';

// interfaces
import { Todo } from '../interfaces/todo.interface';
import { Alert } from '../hooks/useAlert';

type FormProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setAlert: React.Dispatch<React.SetStateAction<Alert | null>>;
};

const Form = ({ todos, setTodos, setAlert }: FormProps) => {
  const [todo, setTodo] = useState<string>('');

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    setTodo(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (todo.trim() === '' || todo === undefined) {
      setAlert({ content: 'Please add a description', type: 'error' });
      return;
    }

    // create the new todo
    setTodos([
      ...todos,
      {
        id: nanoid(10),
        description: todo,
        isDone: false
      }
    ]);

    // print a success alert
    setAlert({ content: 'Todo created successfully', type: 'success' });

    // clear the local state
    setTodo('');
  };

  return (
    <form className="relative w-full" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        className="block px-4 py-2 w-full bg-gray-100 border rounded focus:outline-none focus:ring-4 focus:ring-indigo-300"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 px-4 py-2 bg-green-500 border rounded-r focus:outline-none"
      >
        <PlusIcon className="block w-5 h-5 text-gray-100" />
      </button>
    </form>
  );
};

export default Form;
