import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import Menu from '.';

describe('Menu', () => {
  test('Popup should be visible after link hover', () => {
    render(<Menu />);

    expect(screen.getByTestId('menuPopUp')).toHaveStyle('display: none');

    // userEvent.hover(screen.getByTestId('menuLink'));
    fireEvent.mouseOver(screen.getByTestId('menuLink'));

    // expect(container.querySelector('[data-testid=menuLink]')).toHaveStyleRule('display', 'block');
  });
});
