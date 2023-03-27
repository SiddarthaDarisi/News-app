import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './Landing.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/News-App/);
  expect(linkElement).toBeInTheDocument();
});