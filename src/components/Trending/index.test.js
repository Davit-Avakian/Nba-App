import { fireEvent, render, screen } from '@testing-library/react';
import Trending from '.';
import trending from 'data/trending';

describe('Trending Component', () => {
  test('should scroll right on right arrow click', () => {
    render(<Trending data={[]} />);

    const container = screen.getByTestId('trendingContainer');

    expect(container).toHaveStyle('transform: translateX(0)');

    fireEvent.click(screen.getByTestId('trendingRightArrow'));

    expect(container).not.toHaveStyle('transform: translateX(0)');
  });

  test('should scroll left on left arrow click', async () => {
    render(<Trending data={trending} />);

    // const container = screen.getByTestId('trendingContainer');

    // fireEvent.click(lala.querySelector('[data-testId=trendingRightArrow]'));
    // expect(screen.getByTestId('trendingContainer')).toHaveStyle('transform: translateX(-95px)');

    // fireEvent.click(lala.querySelector('[data-testId=trendingLeftArrow]'));
    // expect(screen.getByTestId('trendingContainer')).toHaveStyle('transform: translateX(0)');
  });
});
