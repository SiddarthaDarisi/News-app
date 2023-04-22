import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
    test('renders search bar correctly', () => {
        render(<SearchBar onSearch={() => {}} />);
        expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    test('triggers search on Enter key press', () => {
        const handleSearch = jest.fn();
        render(<SearchBar onSearch={handleSearch} />);
        const input = screen.getByPlaceholderText('Search...');

        fireEvent.keyDown(input, { key: 'Enter' });
        expect(handleSearch).toHaveBeenCalled();
    });

   
});
