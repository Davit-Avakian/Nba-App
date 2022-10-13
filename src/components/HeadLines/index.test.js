import HeadLines from '.';
import headlines from 'data/headlines';
import { render, screen } from '@testing-library/react';

describe('HeadLines Component', () => {
  test('First Headline should be equal to given data', () => {
    render(<HeadLines />);

    expect(screen.getByTestId('headline0').textContent).toBe(headlines[0]);
  });
});
