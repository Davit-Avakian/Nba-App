import { render, screen } from '@testing-library/react';
import LeagueInfo from '.';
import leagueInfo from 'data/leagueInfo';

describe(LeagueInfo, () => {
  test('First League should be equal to given data', () => {
    render(<LeagueInfo />);

    expect(screen.getByTestId('league1').textContent).toBe(leagueInfo[0].title);
  });
});
