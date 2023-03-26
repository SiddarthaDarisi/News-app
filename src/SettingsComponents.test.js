import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Settings from './Setting.js';

describe('Settings component', () => {
    test('renders with some categories selected by default and saves changes correctly when Save is clicked', () => {
        const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
        const selectedCategories = ['general', 'business', 'health', 'science', 'sports'];
        const handleClose = jest.fn();
        const handleSave = jest.fn();

        const { getByText, getByLabelText } = render(
            <Settings categories={categories} handleClose={handleClose} handleSave={handleSave} selectedCategories={selectedCategories} />
        );

        expect(getByText('Settings')).toBeInTheDocument();

        categories.forEach((category) => {
            const checkbox = getByLabelText(category);
            expect(checkbox).toBeInTheDocument();

            if (selectedCategories.includes(category)) {
                expect(checkbox.checked).toBe(true);
            }
        });

        fireEvent.click(getByLabelText('business'));
        fireEvent.click(getByLabelText('entertainment'));

        fireEvent.click(getByText('Save'));

        expect(handleSave).toHaveBeenCalledWith(['general', 'health', 'science', 'sports', 'technology']);
    });
});