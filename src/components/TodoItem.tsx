import { CheckCircleIcon, TrashIcon } from '@heroicons/react/solid';

export type TodoItemProps = {};

const TodoItem = ({}: TodoItemProps) => {
  const handleDone = () => {
    console.log('[UPDATED]:');
  };
  const handleDelete = () => {
    console.log('[DELETED]:');
  };

  return (
    <li className="pl-4 py-2 border-l-4 border-red-500">
      <div className="flex items-center justify-between">
        <span>Hello, World!</span>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleDone}
            className="px-2 py-2 hover:bg-gray-50 rounded focus:outline-none focus:ring-4 focus:ring-gray-200"
          >
            <CheckCircleIcon className="w-6 h-6 text-green-500" />
          </button>
          <button
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
