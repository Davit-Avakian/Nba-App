import { fireEvent, render, screen } from '@testing-library/react';
import { eastTeams, westTeams } from 'data/teams';
import Standings from '.';

describe('Standings Component', () => {
  test('League standings should change on west button click', () => {
    render(<Standings />);

    expect(screen.getByTestId(`teamName${eastTeams[0].teamId}`).textContent).toBe(
      eastTeams[0].teamName
    );

    fireEvent.click(screen.getByTestId('westBtn'));

    expect(screen.getByTestId(`teamName${westTeams[0].teamId}`).textContent).toBe(
      westTeams[0].teamName
    );
  });

  test('League standings should change on east button click', () => {
    render(<Standings />);

    fireEvent.click(screen.getByTestId('westBtn'));

    fireEvent.click(screen.getByTestId('eastBtn'));

    expect(screen.getByTestId(`teamName${eastTeams[0].teamId}`).textContent).toBe(
      eastTeams[0].teamName
    );
  });
});
