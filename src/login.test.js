import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from './login.js';

describe('Login', () => {
    it('renders the Login form', () => {
        const { getByText, getByLabelText } = render(<Login />);
        expect(getByText('Login')).toBeInTheDocument();
        expect(getByLabelText('Username:')).toBeInTheDocument();
        expect(getByLabelText('Password:')).toBeInTheDocument();
        expect(getByText('Log in')).toBeInTheDocument();
        expect(getByText('Reset Password')).toBeInTheDocument();
    });

    it('submits the login form with valid credentials', async () => {
        const { getByText, getByLabelText } = render(<Login />);
        const usernameInput = getByLabelText('Username:');
        const passwordInput = getByLabelText('Password:');
        const loginButton = getByText('Log in');

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(console.log).toHaveBeenCalledWith('Logged in');
        });
    });

    it('displays the password reset form after UserNotConfirmedException', async () => {
        const { getByText, getByLabelText } = render(<Login />);
        const usernameInput = getByLabelText('Username:');
        const passwordInput = getByLabelText('Password:');
        const resetPasswordButton = getByText('Reset Password');

        // Simulate UserNotConfirmedException
        jest.spyOn(console, 'log').mockImplementation(() => { });
        Auth.signIn = jest.fn().mockRejectedValue({ code: 'UserNotConfirmedException' });

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        fireEvent.click(resetPasswordButton);

        await waitFor(() => {
            expect(getByText('Reset Password')).toBeInTheDocument();
            expect(getByLabelText('Verification code:')).toBeInTheDocument();
            expect(getByLabelText('New password:')).toBeInTheDocument();
        });
    });

    it('submits the password reset form with valid code and new password', async () => {
        const { getByText, getByLabelText } = render(<Login />);
        const usernameInput = getByLabelText('Username:');
        const resetPasswordButton = getByText('Reset Password');

        // Simulate UserNotConfirmedException
        jest.spyOn(console, 'log').mockImplementation(() => { });
        Auth.forgotPassword = jest.fn().mockResolvedValue({});
        Auth.forgotPasswordSubmit = jest.fn().mockResolvedValue({});

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.click(resetPasswordButton);

        const verificationCodeInput = getByLabelText('Verification code:');
        const newPasswordInput = getByLabelText('New password:');
        const resetPasswordSubmitButton = getByText('Reset Password');

        fireEvent.change(verificationCodeInput, { target: { value: '123456' } });
        fireEvent.change(newPasswordInput, { target: { value: 'newpassword' } });
        fireEvent.click(resetPasswordSubmitButton);

        await waitFor(() => {
            expect(Auth.forgotPassword).toHaveBeenCalledWith('testuser');
            expect(Auth.forgotPasswordSubmit).toHaveBeenCalledWith('testuser', '123456', 'newpassword');
            expect(console.log).toHaveBeenCalledWith('Password reset successful');
        });
    });
});
