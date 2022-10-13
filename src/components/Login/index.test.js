import { fireEvent, render, screen } from '@testing-library/react';
import * as router from 'react-router';
import Login from './index.js';

describe('Login Component', () => {
  const navigate = jest.fn();
  const email = 'admin@gmail.com';
  const password = 'admin';

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  });

  test('Should redirect user to /home after successful sign in', () => {
    render(<Login />);

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: email } });

    fireEvent.change(screen.getByTestId('passwordInput'), { target: { value: password } });

    fireEvent.click(screen.getByTestId('signInBtn'));

    expect(screen.getByTestId('signInError')).not.toBeInTheDocument();
    expect(navigate).toHaveBeenCalledWith('/home');
  });

  test('Should show error message after entering wrong login info', () => {
    render(<Login />);

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'wrong@gmail.com' } });

    fireEvent.change(screen.getByTestId('passwordInput'), { target: { value: 'wrong' } });

    fireEvent.click(screen.getByTestId('signInBtn'));

    expect(screen.getByTestId('signInError')).toBeInTheDocument();
    expect(navigate).toHaveBeenCalledTimes(0);
  });
});
