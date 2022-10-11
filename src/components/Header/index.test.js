import { render, screen } from '@testing-library/react';
import Header from '.';

describe(Header, () => {
  test('Popup should be hidden', () => {
    render(<Header />);

    expect(screen.getByTestId('headerPopUp')).toHaveStyle('display: none');
  });

  test('Links container should be visible', () => {
    render(<Header />);

    expect(screen.getByTestId('headerLinks')).toHaveStyle('display: block');
  });
});
