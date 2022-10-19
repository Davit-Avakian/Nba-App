import { fireEvent, render, screen } from '@testing-library/react';
import Trending from '.';

describe('Trending Component', () => {
  test('should scroll right on right arrow click', () => {
    render(<Trending data={[]} />);

    const container = screen.getByTestId('trendingContainer');

    expect(container).toHaveStyle('transform: translateX(0)');

    fireEvent.click(screen.getByTestId('trendingRightArrow'));

    expect(container).not.toHaveStyle('transform: translateX(0)');
  });
});
