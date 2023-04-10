import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Landing from './Landing';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
describe('Landing', () => {
    test('renders the title', () => {
        render(<BrowserRouter><Landing /></BrowserRouter>);
        const title = screen.getByText('News-App');
        expect(title).toBeInTheDocument();
    });

    test('renders the login button', () => {
        render(<BrowserRouter><Landing /></BrowserRouter>);
        const button = screen.getByRole('button', { name: 'login' });
        expect(button).toBeInTheDocument();
    });



});


