import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Landing from './Landing';

describe('Landing', () => {
    test('renders the title', () => {
        render(<Landing />);
        const title = screen.getByText('News-App');
        expect(title).toBeInTheDocument();
    });

    test('renders the login button', () => {
        render(<Landing />);
        const button = screen.getByRole('button', { name: 'login' });
        expect(button).toBeInTheDocument();
    });



});
