import React, { useState } from 'react';
import { eastTeams, westTeams } from '@data/teams';
import { ContainerTitle } from '../../App.styled';
import { ButtonsContainer, StandingsContainer, TeamList, TeamName } from './styles';

const Standings = () => {
  const [conference, setConference] = useState('East');

  return (
    <StandingsContainer>
      <ContainerTitle>
        <h1>2021-22 STANDINGS</h1>
        <a>Go to Standings</a>
      </ContainerTitle>

      <div>
        <ButtonsContainer>
          <button
            style={{
              backgroundColor: `${conference === 'East' ? 'black' : 'white'}`,
              color: `${conference === 'East' ? 'white' : 'black'}`
            }}
            onClick={() => setConference('East')}>
            EASTERN
          </button>
          <button
            style={{
              backgroundColor: `${conference === 'West' ? 'black' : 'white'}`,
              color: `${conference === 'West' ? 'white' : 'black'}`
            }}
            onClick={() => setConference('West')}>
            WESTERN
          </button>
        </ButtonsContainer>

        <TeamList>
          <table>
            <thead>
              <tr>
                <th>TEAM</th>
                <th>W</th>
                <th>L</th>
                <th>LAST 10</th>
              </tr>
            </thead>

            <tbody>
              {conference === 'East'
                ? eastTeams.map(
                    (
                      {
                        teamId,
                        teamName,
                        homeWin,
                        homeLoss,
                        awayWin,
                        awayLoss,
                        nearlyTenWin,
                        nearlyTenLoss
                      },
                      index
                    ) => {
                      return (
                        <tr key={teamId}>
                          <td>
                            <a>
                              <span>
                                <b>{index + 1}</b>
                              </span>
                              <TeamName>{teamName}</TeamName>
                            </a>
                          </td>

                          <td>{homeWin + awayWin}</td>
                          <td>{homeLoss + awayLoss}</td>
                          <td>
                            <div
                              className="Last-10"
                              style={{
                                backgroundColor: `${
                                  nearlyTenWin - nearlyTenLoss >= 4
                                    ? '#64bc61'
                                    : nearlyTenWin - nearlyTenLoss >= 2
                                    ? '#d7ee8e'
                                    : nearlyTenWin - nearlyTenLoss >= -2
                                    ? '#fedd8d'
                                    : '#f16e43'
                                }`
                              }}>
                              {nearlyTenWin} - {nearlyTenLoss}
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )
                : westTeams.map(
                    (
                      {
                        teamId,
                        teamName,
                        homeWin,
                        homeLoss,
                        awayWin,
                        awayLoss,
                        nearlyTenWin,
                        nearlyTenLoss
                      },
                      index
                    ) => {
                      return (
                        <tr key={teamId}>
                          <td>
                            <a>
                              <span>
                                <b>{index + 1}</b>
                              </span>
                              <TeamName>{teamName}</TeamName>
                            </a>
                          </td>

                          <td>{homeWin + awayWin}</td>
                          <td>{homeLoss + awayLoss}</td>
                          <td>
                            <div
                              className="Last-10"
                              style={{
                                backgroundColor: `${
                                  nearlyTenWin - nearlyTenLoss >= 4
                                    ? '#64bc61'
                                    : nearlyTenWin - nearlyTenLoss >= 2
                                    ? '#d7ee8e'
                                    : nearlyTenWin - nearlyTenLoss >= -2
                                    ? '#fedd8d'
                                    : '#f16e43'
                                }`
                              }}>
                              {nearlyTenWin} - {nearlyTenLoss}
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )}
            </tbody>
          </table>
        </TeamList>
      </div>
    </StandingsContainer>
  );
};

export default Standings;
