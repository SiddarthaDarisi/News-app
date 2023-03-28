import { render, screen, fireEvent } from '@testing-library/react';
import Setting from './Setting.js';

test('should have at least one category selected', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    render(<Setting categories={['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']} handleClose={handleClose} handleSave={handleSave} />);

    // Initially, the Save button should be disabled
    const saveButton = screen.getByRole('button', { name: 'Save' });
    expect(saveButton).toBeDisabled();

    // Check a category and verify the Save button is enabled
    const generalCheckbox = screen.getByRole('checkbox', { name: 'general' });
    fireEvent.click(generalCheckbox);
    expect(saveButton).toBeEnabled();

    // Uncheck the category and verify the Save button is disabled again
    fireEvent.click(generalCheckbox);
    expect(saveButton).toBeDisabled();
});
