import React, { useState } from 'react';
import './styles.css';
import { eastTeams, westTeams } from '@data/teams';

const Standings = () => {
  const [conference, setConference] = useState('East');

  return (
    <div className="Standings-Container">
      <div className="Container-Title">
        <h1>2021-22 STANDINGS</h1>
        <a>Go to Standings</a>
      </div>

      <div>
        <div className="Standings-Buttons">
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
        </div>

        <div className="Teams-List">
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
                              <span className="Team-Name">{teamName}</span>
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
                              <span className="Team-Name">{teamName}</span>
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
        </div>
      </div>
    </div>
  );
};

export default Standings;
