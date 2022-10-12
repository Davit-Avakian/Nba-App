import { render, screen } from '@testing-library/react';
import SocialMedias from '.';

describe(SocialMedias, () => {
  test('Icons container length should match icons count', () => {
    render(<SocialMedias />);

    expect(screen.getByTestId('mediaIcons').childElementCount).toBe(7);
  });
});
