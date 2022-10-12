import { render, screen } from '@testing-library/react';
import Footer from '.';

describe(Footer, () => {
  test('Popup links count should match given data', () => {
    render(<Footer />);

    expect(screen.getByTestId('footerLink').lastChild.childElementCount).toBe(4);
  });
});
