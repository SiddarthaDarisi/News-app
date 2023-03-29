import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard component', () => {
    test('categories are saved after refresh', async () => {
        // Render the component
        render(<Dashboard />);

        // Wait for news articles to load
        await waitFor(() => {
            expect(screen.getByTestId('news')).toBeInTheDocument();
        });

        // Get the current categories
        const initialCategories = screen.getAllByTestId('category').map((category) => category.textContent);

        // Refresh the page
        window.location.reload();

        // Wait for news articles to load again
        await waitFor(() => {
            expect(screen.getByTestId('news')).toBeInTheDocument();
        });

        // Get the updated categories
        const updatedCategories = screen.getAllByTestId('category').map((category) => category.textContent);

        // Check if the categories are the same before and after refresh
        expect(updatedCategories).toEqual(initialCategories);
    });
});
