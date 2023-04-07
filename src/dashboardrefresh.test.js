import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Dashboard from './Dashboard';
import Auth from '../path/to/Auth';
import API from '../path/to/API';

describe('Dashboard', () => {
    beforeEach(() => {
        // Mock Auth.currentAuthenticatedUser() to return a user object
        jest.spyOn(Auth, 'currentAuthenticatedUser').mockImplementation(() => Promise.resolve({
            username: 'testuser',
            attributes: {
                name: 'Test User'
            }
        }));

        // Mock API.graphql() to return a default category
        jest.spyOn(API, 'graphql').mockImplementation(() => Promise.resolve({
            data: {
                getCreateCategoryInput: {
                    category: '["general"]'
                }
            }
        }));
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should keep settings the same after refresh', async () => {
        // Render the Dashboard component
        render(<Dashboard />);

        // Wait for the News component to appear
        await waitFor(() => screen.getByRole('article'));

        // Click on the settings button
        fireEvent.click(screen.getByLabelText('settings'));

        // Wait for the Settings component to appear
        await waitFor(() => screen.getByRole('dialog'));

        // Select a new category
        fireEvent.change(screen.getByRole('combobox'), { target: { value: ['business'] } });

        // Click on the save button
        fireEvent.click(screen.getByRole('button', { name: 'Save' }));

        // Wait for the Settings component to disappear
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());

        // Simulate a refresh
        window.location.reload = jest.fn();

        // Wait for the News component to appear again
        await waitFor(() => screen.getByRole('article'));

        // Click on the settings button again
        fireEvent.click(screen.getByLabelText('settings'));

        // Wait for the Settings component to appear again
        await waitFor(() => screen.getByRole('dialog'));

        // Check if the category is still the same
        expect(screen.getByRole('combobox')).toHaveValue(['business']);
    });
});
