import { render, screen, fireEvent } from '@testing-library/react';

// components
import App from '../App';

const createTodo = (todos: string[]): void => {
  const inputElement = screen.getByPlaceholderText(/Create a Todo/) as HTMLInputElement;
  const buttonElement = screen.getByLabelText('create');

  todos.forEach(todo => {
    fireEvent.change(inputElement, { target: { value: todo } });
    fireEvent.click(buttonElement);
  });
};

describe('App', () => {
  it('should display the heading correctly', () => {
    render(<App />);

    const headingElement = screen.getByRole('heading');
    expect(headingElement.textContent).toBe('Todo Manager');
  });

  it('should display the author name in an anchor', () => {
    render(<App />);

    const anchorElement = screen.getByRole('link');
    expect(anchorElement.textContent).toBe('Angel Martinez');
  });

  it('should be able to create a to-do', () => {
    render(<App />);

    createTodo(['Go to Grocery Store']);

    const spanElement = screen.getByText('Go to Grocery Store');

    expect(spanElement).toBeInTheDocument();
  });

  it("should be able to create multiples to-do's", () => {
    render(<App />);

    createTodo(['Go to Grocery Store', 'Buy a Xbox Series X', 'Pet my dog']);

    const liElements = screen.getAllByLabelText('to-do');

    expect(liElements.length).toBe(3);
  });

  it('should be uncompleted the initial status of a to-do', () => {
    render(<App />);

    createTodo(['Go to Grocery Store']);

    const spanElement = screen.getByText('Go to Grocery Store');
    expect(spanElement).not.toHaveClass('line-through');
  });

  it('should be able to complete a to-do', () => {
    render(<App />);

    createTodo(['Go to Grocery Store']);

    const spanElement = screen.getByText('Go to Grocery Store');
    const completeButton = screen.getByLabelText('complete-todo');
    fireEvent.click(completeButton);

    expect(spanElement).toHaveClass('line-through');
  });

  it('should be able to complete and uncompleted a to-do', () => {
    render(<App />);

    createTodo(['Go to Grocery Store']);

    const spanElement = screen.getByText('Go to Grocery Store');
    const completeButton = screen.getByLabelText('complete-todo');
    fireEvent.click(completeButton); // complete
    fireEvent.click(completeButton); // uncompleted

    expect(spanElement).not.toHaveClass('line-through');
  });

  it('should be able to delete a to-do', () => {
    render(<App />);

    createTodo(['Go to Grocery Store']);

    const spanElement = screen.getByText('Go to Grocery Store');
    const deleteButton = screen.getByLabelText('delete-todo');
    fireEvent.click(deleteButton);

    expect(spanElement).not.toBeInTheDocument();
  });

  it("should be able to mark all to-do's as completed", () => {
    render(<App />);

    createTodo(['Go to Grocery Store', 'Buy a Xbox Series X', 'Pet my dog']);

    const liElements = screen.getAllByLabelText('to-do');
    const markAllButton = screen.getByRole('button', { name: 'Mark All' });
    fireEvent.click(markAllButton);

    liElements.forEach(element => {
      expect(element).toHaveClass('border-green-400');
    });
  });
});
