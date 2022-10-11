import NewsTopics from '.';
import news from 'data/news.js';
import { fireEvent, render, screen } from '@testing-library/react';

describe(NewsTopics, () => {
  test('Active topic should change on button click', () => {
    render(<NewsTopics />);

    expect(screen.getByTestId('activeTitle').textContent).toBe(news[0].title);

    fireEvent.click(screen.getByTestId('news2'));

    expect(screen.getByTestId('activeTitle').textContent).toBe(news[1].title);
  });
});
