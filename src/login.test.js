import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the "Hello" message with the user name', () => {
    const user = { username: 'JohnDoe' };
    const signOut = jest.fn();
    render(<App isPassedToWithAuthenticator={true} signOut={signOut} user={user} />);
    const helloMessage = screen.getByText(`Hello ${user.username}`);
    expect(helloMessage).toBeInTheDocument();
  });

  test('calls the signOut function when "Sign out" button is clicked', () => {
    const user = { username: 'JohnDoe' };
    const signOut = jest.fn();
    render(<App isPassedToWithAuthenticator={true} signOut={signOut} user={user} />);
    const signOutButton = screen.getByText('Sign out');
    fireEvent.click(signOutButton);
    expect(signOut).toHaveBeenCalled();
  });

  test('throws an error if isPassedToWithAuthenticator prop is not provided', () => {
    const user = { username: 'JohnDoe' };
    const signOut = jest.fn();
    const consoleError = console.error;
    console.error = jest.fn(); // Suppress console.error output
    expect(() => {
      render(<App signOut={signOut} user={user} />);
    }).toThrow('isPassedToWithAuthenticator was not provided');
    console.error = consoleError; // Restore console.error
  });
});
