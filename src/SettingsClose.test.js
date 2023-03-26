import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Settings from './Setting.js';

test('renders settings dialog', () => {
    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    const { getByText } = render(
        <Settings categories={categories} handleClose={handleClose} handleSave={handleSave} />
    );

    fireEvent.click(getByText('Cancel'));

    expect(handleClose).toHaveBeenCalled();
});