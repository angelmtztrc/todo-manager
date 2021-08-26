// components
import TodoItem from './TodoItem';

// interfaces
import { Todo } from '../interfaces/todo.interface';

// constants
import { FILTER_OPTIONS } from '../constants';

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  filter: string;
};

const TodoList = ({ todos, setTodos, filter }: TodoListProps) => {
  return (
    <ul className="px-6 py-4 w-full bg-gray-100 rounded space-y-2">
      {todos.length === 0 ? <p>No todo's yet</p> : null}
      {todos
        .filter((todo: Todo) => {
          // returns all todos
          if (filter === FILTER_OPTIONS.all) return true;

          // returns uncompleted todos
          if (filter === FILTER_OPTIONS.active) return todo.isDone === false;

          // returns completed todos
          if (filter === FILTER_OPTIONS.done) return todo.isDone === true;

          // return all if the filters has an invalid value
          return true;
        })
        .map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
    </ul>
  );
};

export default TodoList;
