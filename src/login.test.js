import { Auth } from "aws-amplify";
import config from './aws-exports';
import { Amplify } from 'aws-amplify'

Amplify.configure(config);

describe('Auth', () => {
  it('should sign in a user', async () => {
    const username = 'siddarthadarisi@gmail.com';
    const password = 'Cvr7894@';

    const result = await Auth.signIn(username, password);

    expect(result).toBeDefined();
    expect(result.username).toEqual("25bff222-ecb6-4011-8c1c-643c12ea6fd5");
  });
});