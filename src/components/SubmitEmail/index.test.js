import { fireEvent, render, screen } from '@testing-library/react';
import SubmitEmail from '.';

describe('SubmitEmail Component', () => {
  test('email input should match typed value', () => {
    render(<SubmitEmail />);

    const value = 'test@gmail.com';

    fireEvent.change(screen.getByPlaceholderText('Email address'), { target: { value } });

    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  });
});
