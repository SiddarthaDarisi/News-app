import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Auth, Hub } from 'aws-amplify';
import Login from './login';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { Authenticator, ThemeProvider,useTheme} from '@aws-amplify/ui-react';
Amplify.configure(config);

jest.mock('aws-amplify');
describe('Login component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Login component and authenticates user', async () => {
    Auth.currentAuthenticatedUser.mockResolvedValue({
      attributes: { name: 'John Doe' },
      username: 'user123',
    });

    render(<Login />);

    await waitFor(() => screen.getByText('News-App'));

    expect(screen.getByText('News-App')).toBeInTheDocument();
    expect(screen.getByText('Hi, John Doe')).toBeInTheDocument();
  });

  test('listens for signOut event and updates signedUser state', async () => {
    const hubCallback = jest.fn();
    Hub.listen.mockImplementation((channel, callback) => {
      hubCallback.mockImplementation(callback);
    });

    render(<Login />);

    const signOutEvent = {
      payload: {
        event: 'signOut',
      },
    };

    hubCallback(signOutEvent);

    await waitFor(() => expect(Auth.currentAuthenticatedUser).toHaveBeenCalledTimes(1));

   
  });


});