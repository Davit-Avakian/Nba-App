import React, { useState } from 'react';
import { ContainerTitle } from '../../App.styled';
import {
  ButtonsContainer,
  EastButton,
  StandingsContainer,
  TeamList,
  TeamName,
  WestButton
} from './styles';
import { eastTeams, westTeams } from 'data/teams';

/**
 *  Creates component for Teams Standings
 *  @returns {component} Standings component shows league's teams stats and standings
 */
const Standings = () => {
  // keeps information about league type
  const [conference, setConference] = useState('East');

  return (
    <StandingsContainer>
      <ContainerTitle>
        <h1>2021-22 STANDINGS</h1>
        <a>Go to Standings</a>
      </ContainerTitle>

      <div>
        <ButtonsContainer>
          <EastButton
            data-testid="eastBtn"
            conference={conference}
            onClick={() => setConference('East')}>
            EASTERN
          </EastButton>
          <WestButton
            data-testid="westBtn"
            conference={conference}
            onClick={() => setConference('West')}>
            WESTERN
          </WestButton>
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
                              <TeamName data-testid={`teamName${teamId}`}>{teamName}</TeamName>
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
                              <TeamName data-testid={`teamName${teamId}`}>
                                {teamName.split(' ')[0]}
                              </TeamName>
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
