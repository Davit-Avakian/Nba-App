import React from 'react';
import leagueInfo from 'data/leagueInfo';
import firstLeague from 'assets/images/firstLeague.svg';
import secondLeague from 'assets/images/secondLeague.svg';
import thirdLeague from 'assets/images/thirdLeague.svg';
import fourthLeague from 'assets/images/fourthLeague.svg';
import fifthLeague from 'assets/images/fifthLeague.svg';
import sixthLeague from 'assets/images/sixthLeague.svg';
import seventhLeague from 'assets/images/seventhLeague.svg';
import eighthLeague from 'assets/images/eighthLeague.svg';
import share from 'assets/images/share.jpg';
import { LeagueContainer } from './styles';
import { ContainerTitle } from '../../App.styled';

// keeps all imported images
const images = {
  firstLeague,
  secondLeague,
  thirdLeague,
  fourthLeague,
  fifthLeague,
  sixthLeague,
  seventhLeague,
  eighthLeague
};

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
                <img src={images[image]} />
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
