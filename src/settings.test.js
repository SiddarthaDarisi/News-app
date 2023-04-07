import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Settings from './Setting';

describe('Settings', () => {
    const mockCategories = ['general', 'business', 'entertainment'];
    const mockHandleClose = jest.fn();
    const mockHandleSave = jest.fn();

    it('should call handleClose when cancel button is clicked', () => {
        render(
            <Settings
                categories={mockCategories}
                handleClose={mockHandleClose}
                handleSave={mockHandleSave}
            />
        );

        const cancelButton = screen.getByRole('button', { name: 'Cancel' });
        fireEvent.click(cancelButton);

        expect(mockHandleClose).toHaveBeenCalled();
    });
});
describe('Settings component', () => {
    it('should render at least one checked category', () => {
        const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
        render(React.createElement(Settings, { categories: categories }));
        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes.length).toBeGreaterThan(0);
        const checkedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked === true);
        expect(checkedCheckboxes.length).toBeGreaterThan(0);
    });
});
