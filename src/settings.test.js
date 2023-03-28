import React from 'react';
import { render, screen } from '@testing-library/react';
import Settings from './Setting.js';

describe('Settings component', () => {
    it('should render at least one checked category', () => {
        const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
        render(<Settings categories={categories} />);
        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes.length).toBeGreaterThan(0);
        const checkedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked === true);
        expect(checkedCheckboxes.length).toBeGreaterThan(0);
    });
});