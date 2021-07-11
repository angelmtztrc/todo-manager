// components
import TodoItem from './TodoItem';

// interfaces
import { Todo } from '../interfaces/todo.interface';

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <ul className="px-6 py-4 w-full bg-gray-100 rounded space-y-2">
      {todos.length === 0 ? <p>No todo's yet</p> : null}
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
};

export default TodoList;
