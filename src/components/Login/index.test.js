import { createBrowserHistory } from '@remix-run/router';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router';
import Login from './index.js';

describe('Login Component', () => {
  const mockedNavigate = jest.fn();
  const setSignedIn = jest.fn();
  const email = 'admin@gmail.com';
  const password = 'admin';

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
  }));

  beforeEach(() => {
    const history = createBrowserHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Login setSignedIn={setSignedIn} />
      </Router>
    );
  });

  test('Should not show error message and redirect user to /home after successful sign in', async () => {
    userEvent.type(screen.getByLabelText('Email'), email);

    userEvent.type(screen.getByTestId('passwordInput'), password);

    userEvent.click(screen.getByTestId('signInBtn'));

    expect(screen.queryByTestId('signInError')).not.toBeInTheDocument();
    await waitFor(() => expect(window.location.pathname).toBe('/home'));
  });

  test('Should show error message after entering wrong login info', async () => {
    userEvent.type(screen.getByLabelText('Email'), 'wrong@gmail.com');

    userEvent.type(screen.getByTestId('passwordInput'), 'wrong');

    userEvent.click(screen.getByTestId('signInBtn'));

    expect(await screen.findByTestId('signInError')).toBeInTheDocument();
    expect(mockedNavigate).toHaveBeenCalledTimes(0);
  });
});
