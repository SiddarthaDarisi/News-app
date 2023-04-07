import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import News from './News';


describe('News component', () => {
  it('renders loading state initially', () => {
    render(<News category="technology" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders news data after loading', async () => {
    render(<News category="technology" />);
    await waitFor(() => expect(screen.getByAltText('news')).toBeInTheDocument());
    expect(screen.getByText('News Title')).toBeInTheDocument();
    expect(screen.getByText('News Description')).toBeInTheDocument();
  });
});
