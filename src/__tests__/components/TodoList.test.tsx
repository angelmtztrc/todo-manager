import { render, screen } from '@testing-library/react';

// components
import TodoList from '../../components/TodoList';

// constants
import { FILTER_OPTIONS } from '../../constants';

const mockedSetTodos = jest.fn();
const mockedTodos = [
  {
    id: '1',
    description: 'Hello, World!',
    isDone: false
  },
  {
    id: '2',
    description: 'Hello, World! x2',
    isDone: false
  },
  {
    id: '3',
    description: 'Hello, World! x3',
    isDone: true
  },
  {
    id: '4',
    description: 'Hello, World! x4',
    isDone: true
  }
];

describe('TodoList', () => {
  it("should display the correct message if we don't have todos", () => {
    render(<TodoList todos={[]} filter={FILTER_OPTIONS.all} setTodos={mockedSetTodos} />);

    const paragraphElement = screen.getByText("No todo's yet");
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should display all todos', () => {
    render(<TodoList todos={mockedTodos} filter={FILTER_OPTIONS.all} setTodos={mockedSetTodos} />);

    const paragraphElement = screen.queryByText("No todo's yet");
    expect(paragraphElement).not.toBeInTheDocument();

    const listItemsElements = screen.getAllByRole('listitem');
    expect(listItemsElements.length).toBe(mockedTodos.length);
  });

  it('should display only uncompleted todos', () => {
    render(
      <TodoList todos={mockedTodos} filter={FILTER_OPTIONS.active} setTodos={mockedSetTodos} />
    );

    const todosUncompletedCount = mockedTodos.filter(todo => todo.isDone !== false).length;

    const paragraphElement = screen.queryByText("No todo's yet");
    expect(paragraphElement).not.toBeInTheDocument();

    const listItemsElements = screen.getAllByRole('listitem');
    expect(listItemsElements.length).toBe(todosUncompletedCount);
  });

  it('should display only completed todos', () => {
    render(<TodoList todos={mockedTodos} filter={FILTER_OPTIONS.done} setTodos={mockedSetTodos} />);

    const todosCompletedCount = mockedTodos.filter(todo => todo.isDone === true).length;

    const paragraphElement = screen.queryByText("No todo's yet");
    expect(paragraphElement).not.toBeInTheDocument();

    const listItemsElements = screen.getAllByRole('listitem');
    expect(listItemsElements.length).toBe(todosCompletedCount);
  });
});
