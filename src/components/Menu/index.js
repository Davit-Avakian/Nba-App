import React from 'react';
import storeImage from 'assets/images/storeImage.svg';
import leagueInfo from 'data/leagueInfo';
import { AffiliatesLink, Link, MenuContainer, PopUp } from './styles';
import {
  GamesLinks,
  NbaLinks,
  NewsLinks,
  PlayersLinks,
  ScheduleLinks,
  StandingsLinks,
  StatsLinks,
  StoreLinks,
  TicketsLinks,
  WatchLinks
} from 'data/links';

/**
 *  Creates Menu component for mobile
 *  @returns {component} Menu component contains all header information for mobile users
 */
const Menu = () => {
  return (
    <MenuContainer>
      <div>
        <Link>
          <span>Games</span>
          <PopUp>
            <ul>
              {GamesLinks.map((el) => {
                return (
                  <li key={el}>
                    <a>{el}</a>
                  </li>
                );
              })}
            </ul>
          </PopUp>
        </Link>
        <Link>
          <span>Schedule</span>
          <PopUp>
            <ul>
              {ScheduleLinks.map((el) => {
                return (
                  <li key={el}>
                    <a>{el}</a>
                  </li>
                );
              })}
            </ul>
          </PopUp>
        </Link>
        <Link>
          <span>Watch</span>
          <PopUp>
            <ul>
              {WatchLinks.map((el) => {
                return (
                  <li key={el}>
                    <a>{el}</a>
                  </li>
                );
              })}
            </ul>
          </PopUp>
        </Link>
        <Link>
          <span>News</span>
          <PopUp>
            <ul>
              {NewsLinks.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          </PopUp>
        </Link>
        <Link>
          <span>Stats</span>
          <PopUp>
            <ul>
              {StatsLinks.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          </PopUp>
        </Link>
        <Link>
          <span>Standings</span>
          <PopUp>
            <ul>
              {StandingsLinks.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          </PopUp>
        </Link>
        <Link>
          <span>Teams</span>
        </Link>
        <Link>
          <span>Players</span>
          <PopUp>
            <ul>
              {PlayersLinks.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          </PopUp>
        </Link>
        <Link>
          <span>Fantasy</span>
        </Link>
        <Link>
          <span>NBABet</span>
          <PopUp>
            <ul>
              {NbaLinks.map((el) => {
                return (
                  <li key={el}>
                    <a>{el}</a>
                  </li>
                );
              })}
            </ul>
          </PopUp>
        </Link>

        <Link>
          <span>League Pass</span>
        </Link>
        <Link>
          <span>Store</span>
          <PopUp>
            <ul>
              <li>
                <img src={storeImage} style={{ width: '100px' }} />
              </li>
              {StoreLinks.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          </PopUp>
        </Link>
        <Link>
          <span>Tickets</span>
          <PopUp>
            <ul>
              {TicketsLinks.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          </PopUp>
        </Link>

        <AffiliatesLink>
          <span>Affiliates</span>

          <PopUp>
            <ul>
              {leagueInfo.map(({ id, title, image }) => {
                return (
                  <li key={id}>
                    <img src={image} />
                    <span>{title}</span>
                  </li>
                );
              })}
            </ul>
          </PopUp>
        </AffiliatesLink>
      </div>
    </MenuContainer>
  );
};

export default Menu;
