import React, { useState } from 'react';
// import axios from 'axios';
import { ContainerTitle } from '../../App.styled';
import { ButtonsContainer, StandingsContainer, TeamList, TeamName } from './styles';
import { eastTeams, westTeams } from 'data/teams';

/**
 *  Creates component for Teams Standings
 *  @returns {component} Standings component shows league's teams stats and standings
 */
const Standings = () => {
  // keeps information about league type
  const [conference, setConference] = useState('East');

  // keeps eastern teams data
  // const [eastTeams, setEastTeams] = useState([]);

  // keeps western teams data
  // const [westTeams, setWestTeams] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const estTeams = [];
  //     const wstTeams = [];

  //     try {
  //       // fetch teams data from api
  //       const {
  //         data: { data }
  //       } = await axios.get(`http://api.isportsapi.com/sport/basketball/standing/league?api_key=oL4R9ztcBsE1CoZI
  //       &leagueId=111&season=21-22`);

  //       // split fetched data into 2 arrays by league type
  //       data.forEach((team) => {
  //         if (team.leagueName === 'NBA Eastern') {
  //           estTeams.push(team);
  //         } else {
  //           wstTeams.push(team);
  //         }
  //       });

  //       // store teams in state
  //       setEastTeams(estTeams);
  //       setWestTeams(wstTeams);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

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
                              <TeamName>{teamName.split(' ')[0]}</TeamName>
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
                              <TeamName>{teamName.split(' ')[0]}</TeamName>
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
