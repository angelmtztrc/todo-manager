import { render, screen, fireEvent } from '@testing-library/react';

// components
import Form from '../../components/Form';

const mockedSetTodos = jest.fn();
const mockedSetAlert = jest.fn();

describe('Form', () => {
  it('should render the input element successfully', () => {
    render(<Form todos={[]} setTodos={mockedSetTodos} setAlert={mockedSetAlert} />);

    const inputElement = screen.getByPlaceholderText(/Create a Todo/);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type in the input', () => {
    render(<Form todos={[]} setTodos={mockedSetTodos} setAlert={mockedSetAlert} />);

    const inputElement: HTMLInputElement = screen.getByPlaceholderText(
      /Create a Todo/
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });

    expect(inputElement.value).toBe('Hello, World!');
  });

  it('should clear the input value after add button is clicked', () => {
    render(<Form todos={[]} setTodos={mockedSetTodos} setAlert={mockedSetAlert} />);

    const inputElement = screen.getByPlaceholderText(/Create a Todo/) as HTMLInputElement;
    const buttonElement = screen.getByRole('button');

    fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe('');
  });
});
