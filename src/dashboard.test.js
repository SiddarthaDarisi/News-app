/* 
 * This is the first test in the file, and it tests to make sure that the Dashboard component renders
 * correctly. It uses the render function from the testing library to render the component and then
 * checks to make sure that the text 'learn react' is present in the rendered component. The text 
 * 'learn react' is present in the component because it is a link to the React documentation. 
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Dashboard from './Dashboard';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Auth, API } from 'aws-amplify';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
test('News-app logo in app', () => {
    render(<Dashboard />);
    const linkElement = screen.getByText("News-App");
    expect(linkElement).toBeInTheDocument();
});






describe('Dashboard', () => {
    it('to check categories correctly in navbar2', () => {
        render(<Dashboard />);

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
jest.mock('aws-amplify');
describe('Dashboard component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders Dashboard component', async () => {
        Auth.currentAuthenticatedUser.mockResolvedValue({
            attributes: { name: 'John Doe' },
            username: 'user123',
        });

        render(<Dashboard />);

        await waitFor(() => screen.getByText('News-App'));

        expect(screen.getByText('News-App')).toBeInTheDocument();
        expect(screen.getByText('Hi, John Doe')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Sign Out' })).toBeInTheDocument();
        expect(screen.getByLabelText('settings')).toBeInTheDocument();
    });

    test('opens and closes settings dialog', async () => {
        Auth.currentAuthenticatedUser.mockResolvedValue({
            attributes: { name: 'John Doe' },
            username: 'user123',
        });

        render(<Dashboard />);

        await waitFor(() => screen.getByText('News-App'));

        fireEvent.click(screen.getByLabelText('settings'));

        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    });


});
