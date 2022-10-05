import React from 'react';
import leagueInfo from '@data/leagueInfo';
import firstLeague from '@images/firstLeague.svg';
import secondLeague from '@images/secondLeague.svg';
import thirdLeague from '@images/thirdLeague.svg';
import fourthLeague from '@images/fourthLeague.svg';
import fifthLeague from '@images/fifthLeague.svg';
import sixthLeague from '@images/sixthLeague.svg';
import seventhLeague from '@images/seventhLeague.svg';
import eighthLeague from '@images/eighthLeague.svg';
import share from '@images/share.jpg';
import { LeagueContainer } from './styles';
import { ContainerTitle } from '../../App.styled';

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
