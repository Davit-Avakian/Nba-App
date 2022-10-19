import { render, screen } from '@testing-library/react';
import Feed from '.';

describe('Feed Component', () => {
  const title = 'test title';

  const data = [
    {
      id: 1,
      image: 'testImage',
      title: 'test title',
      description: 'test desc',
      date: '6 hours ago'
    }
  ];

  test('Container title should match given prop name', () => {
    render(<Feed title={title} data={data} />);

    expect(screen.getByTestId('feedTitle').textContent).toBe(title);
  });

  test('Feed description should match given data', () => {
    render(<Feed title={title} data={data} />);

    expect(screen.getByTestId(`feedItem${data[0].id}`).textContent).toBe(data[0].description);
  });
});
