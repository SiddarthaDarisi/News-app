import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Settings from './Setting.js';

test('renders settings dialog', () => {
    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    const { getByText, getByLabelText } = render(
        <Settings categories={categories} handleClose={handleClose} handleSave={handleSave} />
    );

    fireEvent.click(getByLabelText('business'));
    fireEvent.click(getByLabelText('entertainment'));

    fireEvent.click(getByText('Save'));

    expect(handleSave).toHaveBeenCalledWith(['general', 'health', 'science', 'sports', 'technology']);
});