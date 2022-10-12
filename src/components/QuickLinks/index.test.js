import { render, screen } from '@testing-library/react';
import QuickLinks from '.';

describe(QuickLinks, () => {
  test('First link should match given data', () => {
    render(<QuickLinks />);

    expect(screen.getByTestId('quickLinks').childElementCount).toBe(9);
  });
});
