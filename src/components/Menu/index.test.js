import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Menu from '.';

describe('Menu Component', () => {
  test('Popup should be visible after link hover', () => {
    render(<Menu />);

    expect(screen.getByTestId('menuPopUp')).toHaveStyle('display: none');

    userEvent.hover(screen.getByTestId('menuLink'));

    expect(screen.getByTestId('menuLink')).toHaveStyle('display: block');
  });
});
