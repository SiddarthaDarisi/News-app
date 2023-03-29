import Amplify from 'aws-amplify';
import { Auth } from '@aws-amplify/auth';
import crypto from 'crypto-browserify';
import awsconfig from './aws-exports.js';

// initialize Amplify
Auth.configure(awsconfig)

// describe the test suite
describe('Cognito authentication', () => {

  // test the login functionality
  it('should log in a user', async () => {
    const email = 'testuser1@gmail.com';
    const password = 'test123';
    const user = await Auth.signIn(email, password);
    expect(user.username).toEqual(email);
  });

  // test the logout functionality
  it('should log out a user', async () => {
    await Auth.signOut();
    const user = await Auth.currentAuthenticatedUser();
    expect(user).toBeNull();
  });

  // test the sign up functionality
  it('should sign up a new user', async () => {
    const email = 'ne1iwu@example.com';
    const password = 'cwordaifjiajf';
    const name="sid"
    const attributes = { email,name };
    const user = await Auth.signUp({ username: email, password, attributes });
    expect(user.user.username).toEqual(email);
  });
  
  it('should throw an error when password is not long enough', async () => {
    const email = 'nr1@example.com';
    const password = 'C@1'; // password length is less than 8
    const name = 'sid';
    const attributes = { email, name };

    try {
      await Auth.signUp({ username: email, password, attributes });
    } catch (error) {
      expect(error.code).toEqual('InvalidPasswordException');
      expect(error.message).toEqual('Password did not conform with policy: Password not long enough');
    }
  });
  it('should throw an error when password is not long enough', async () => {
    const email = 'nr1@example.com';
    const password = 'C21929i19i29'; // password length is less than 8
    const name = 'sid';
    const attributes = { email, name };

    try {
      await Auth.signUp({ username: email, password, attributes });
    } catch (error) {
      expect(error.code).toEqual('InvalidPasswordException');
      expect(error.message).toEqual('Password did not conform with policy: Password must have symbol characters');
    }
  });
  // test the confirmation of a new user
  it('should confirm a new user', async () => {
    const email = 'newuser@example.com';
    const code = '123456';
    const result = await Auth.confirmSignUp(email, code);
    expect(result).toEqual('SUCCESS');
  });
});