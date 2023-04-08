import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Landing from './Landing';
import { BrowserRouter } from 'react-router-dom';

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



describe('Landing', () => {
    it('to check categories correctly in navbar2', () => {
        render(<Landing />);

        const homeLink = screen.getByText('Home');
        const generalLink = screen.getByText('General');
        const businessLink = screen.getByText('Business');
        const entertainmentLink = screen.getByText('Entertainment');
        const healthLink = screen.getByText('Health');
        const scienceLink = screen.getByText('Science');
        const sportsLink = screen.getByText('Sports');
        const technologyLink = screen.getByText('Technology');

        expect(homeLink).toBeInTheDocument();
        expect(generalLink).toBeInTheDocument();
        expect(businessLink).toBeInTheDocument();
        expect(entertainmentLink).toBeInTheDocument();
        expect(healthLink).toBeInTheDocument();
        expect(scienceLink).toBeInTheDocument();
        expect(sportsLink).toBeInTheDocument();
        expect(technologyLink).toBeInTheDocument();
    });
});
