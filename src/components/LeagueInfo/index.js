import React from 'react';
import leagueInfo from 'data/leagueInfo';
import share from 'assets/images/share.jpg';
import { LeagueContainer } from './styles';
import { ContainerTitle } from '../../App.styled';

/**
 *  Creates component width information about leagues
 *  @returns {component} LeagueInfo Component contains links to all nba leagues
 */
const LeagueInfo = () => {
  return (
    <LeagueContainer>
      <ContainerTitle>
        <h1>More League Info</h1>
      </ContainerTitle>

      <div>
        <ul>
          {leagueInfo.map(({ id, image, title }) => {
            return (
              <li key={id}>
                <img src={image} />
                <a>
                  {title}
                  <img src={share} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </LeagueContainer>
  );
};

export default LeagueInfo;
