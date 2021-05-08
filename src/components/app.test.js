import { render, screen } from '@testing-library/react';
import App from './app';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react app boilerplate/i);
  expect(linkElement).toBeInTheDocument();
});
