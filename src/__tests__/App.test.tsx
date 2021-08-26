import { render, screen } from '@testing-library/react';

// components
import App from '../App';

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
});
