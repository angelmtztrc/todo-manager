import { render, screen, fireEvent } from '@testing-library/react';

// components
import TodoItem from '../../components/TodoItem';

const mockedTodo = {
  id: '1',
  description: 'Hello, World!',
  isDone: false
};
const mockedTodos = [{ ...mockedTodo }];
const mockedSetTodos = jest.fn();

describe('TodoItem', () => {
  it('should render the component successfully', () => {
    render(<TodoItem todo={mockedTodo} todos={mockedTodos} setTodos={mockedSetTodos} />);

    const spanElement = screen.getByText(/Hello, World!/);
    expect(spanElement).toBeInTheDocument();
  });

  it('should not have the className line-through if the to-do is uncompleted', () => {
    render(<TodoItem todo={mockedTodo} todos={mockedTodos} setTodos={mockedSetTodos} />);

    const spanElement = screen.getByText(/Hello, World!/);
    expect(spanElement).not.toHaveClass('line-through');
  });

  it('should have the className line-through if the to-do is completed', () => {
    render(
      <TodoItem
        todo={{ ...mockedTodo, isDone: true }}
        todos={mockedTodos}
        setTodos={mockedSetTodos}
      />
    );

    const spanElement = screen.getByText(/Hello, World!/);
    expect(spanElement).toHaveClass('line-through');
  });
});
