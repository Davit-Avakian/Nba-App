import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Trending from '.';

describe('Trending Component', () => {
  test('should scroll right on right arrow click', () => {
    const { getByTestId } = render(<Trending data={[]} />);

    const container = getByTestId('trendingContainer');

    expect(container).toHaveStyle('transform: translateX(0)');

    userEvent.click(getByTestId('trendingRightArrow'));

    expect(container).not.toHaveStyle('transform: translateX(0)');
  });

  test('should scroll left on left arrow click', () => {
    const { getByTestId } = render(<Trending data={[]} />);

    userEvent.click(getByTestId('trendingRightArrow'));

    userEvent.click(getByTestId('trendingLeftArrow'));

    expect(getByTestId('trendingContainer')).toHaveStyle('transform: translateX(0)');
  });
});
