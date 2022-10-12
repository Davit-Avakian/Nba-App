import { fireEvent, render, screen } from '@testing-library/react';
import Header from '.';

describe(Header, () => {
  test('Should call setShowMenu on menu button click', () => {
    const setShowMenu = jest.fn();

    render(<Header setShowMenu={setShowMenu} />);

    fireEvent.click(screen.getByAltText('menuBtn'));

    expect(setShowMenu).toHaveBeenCalledTimes(1);
  });
  test('Popup should be hidden', () => {
    render(<Header />);

    expect(screen.getByTestId('headerPopUp')).toHaveStyle('display: none');
  });

  test('Links container should be visible', () => {
    render(<Header />);

    expect(screen.getByTestId('headerLinks')).toHaveStyle('display: block');
  });
});
