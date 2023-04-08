import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import News from './news';

import { Pagination } from '@mui/material';
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
describe('Dashboard pagination', () => {
  it('should render a pagination component with the correct number of pages', () => {
    const totalPages = 5;
    const currentPage = 1;
    const onPageChange = jest.fn();

    render(
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
      />
    );

    // Assert that the correct number of pages is displayed
    const pagination = screen.getByRole('navigation');
    const pageButtons = screen.getAllByRole('button');
    expect(pagination).toBeInTheDocument();
    expect(pageButtons).toHaveLength(totalPages);

    // Click a page button and assert that onPageChange is called
    userEvent.click(pageButtons[2]);
    expect(onPageChange).toHaveBeenCalledWith(expect.any(Object), 3);
  });
});