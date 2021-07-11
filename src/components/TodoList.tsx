import TodoItem from './TodoItem';

type TodoListProps = {};

const TodoList = ({}: TodoListProps) => {
  return (
    <ul className="px-6 py-4 w-full bg-gray-100 rounded">
      <TodoItem />
    </ul>
  );
};

export default TodoList;
