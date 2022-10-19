import axios from 'axios';
// const axios = require('axios');
// NODE_OPTIONS=--experimental-vm-modules
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Error,
  ForgotLink,
  Input,
  LoginContainer,
  LoginForm,
  LoginTitle,
  SignInBtn
} from './styles.js';

/**
 *  Login and Register page component
 *  @param {function} setSignedIn for changing signed in state
 *  @param {boolean} register for register page
 *  @returns {component} Page for logging in to the home page or signing up
 */
const Login = ({ setSignedIn, register }) => {
  // keeps entered email value
  const [emailValue, setEmailValue] = useState('');

  // keeps entered password value
  const [passwordValue, setPasswordValue] = useState('');

  // keeps error message
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError('');

    try {
      // fetch users from api
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users?email=${emailValue}`
      );

      //   check if user exists and password matches
      if (!data.length || data[0].password !== passwordValue) {
        throw { message: 'Incorrect Password or Email!' };
      }

      setSignedIn(true);

      //   navigate to home page
      navigate('/home');
    } catch (error) {
      // set error
      setError(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // fetch users from api
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users?email=${emailValue}`
      );

      //   check if user exists
      if (data.length) {
        throw new Error();
      }

      await axios.post(`${process.env.REACT_APP_BASE_URL}/users`, {
        id: data.length + 1,
        email: emailValue,
        password: passwordValue
      });

      setSignedIn(true);

      //   navigate to home page
      navigate('/home');
    } catch (error) {
      // set error
      setError('Account With That Email Exists');
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>
        <img src="https://cdn.nba.com/logos/leagues/L/nba-id.svg" />
        <h1>{!register ? 'Sign in with your NBA ID' : 'CREATE NBA ID'}</h1>
      </LoginTitle>

      <LoginForm
        onSubmit={(e) => {
          register ? handleSignUp(e) : handleLogin(e);
        }}>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          required
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <Input
          data-testid="passwordInput"
          id="password"
          required
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />

        {error && <Error data-testid="signInError">{error}</Error>}

        <ForgotLink>{!register && 'Forgot password?'}</ForgotLink>

        <SignInBtn data-testid="signInBtn">{!register ? 'Sign In' : 'Create Account'}</SignInBtn>

        <a
          onClick={() => {
            register ? navigate('/') : navigate('/register');
          }}>
          {!register ? 'Dont have an NBA ID?' : 'Already have an account? Sign in'}
        </a>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
