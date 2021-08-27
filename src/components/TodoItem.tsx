import { CheckCircleIcon, TrashIcon } from '@heroicons/react/solid';

// interfaces
import { Todo } from '../interfaces/todo.interface';

export type TodoItemProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem = ({ todo: { id, description, isDone }, todos, setTodos }: TodoItemProps) => {
  const handleDone = () => {
    setTodos(
      todos.map(item => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      })
    );
  };

  const handleDelete = () => {
    setTodos(todos.filter(item => item.id !== id));
  };

  return (
    <li
      aria-label="to-do"
      className={`
        ${isDone ? 'border-green-400' : 'border-red-400'}
        pl-4 py-2 border-l-4
    `}
    >
      <div className="flex items-center justify-between">
        <span
          className={`
        ${isDone && 'line-through text-gray-500'}
        text-gray-900 text-base
        `}
        >
          {description}
        </span>
        <div className="flex items-center space-x-4">
          <button
            aria-label="complete-todo"
            onClick={handleDone}
            className={`
              px-2 py-2 hover:bg-gray-50 rounded focus:outline-none focus:ring-4 focus:ring-gray-200
            `}
          >
            <CheckCircleIcon
              className={`
              ${isDone ? 'text-green-200' : 'text-green-500'}
              w-6 h-6 
            `}
            />
          </button>
          <button
            aria-label="delete-todo"
            onClick={handleDelete}
            className="px-2 py-2 hover:bg-gray-50 rounded focus:outline-none focus:ring-4 focus:ring-gray-200"
          >
            <TrashIcon className="w-6 h-6 text-red-500" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
