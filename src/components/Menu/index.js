import React from 'react';
import './styles.css';
import storeImage from '@images/storeImage.svg';
import leagueInfo from '@data/leagueInfo';
import firstLeague from '@images/firstLeague.svg';
import secondLeague from '@images/secondLeague.svg';
import thirdLeague from '@images/thirdLeague.svg';
import fourthLeague from '@images/fourthLeague.svg';
import fifthLeague from '@images/fifthLeague.svg';
import sixthLeague from '@images/sixthLeague.svg';
import seventhLeague from '@images/seventhLeague.svg';
import eighthLeague from '@images/eighthLeague.svg';
import {
  AffiliatesLink,
  AffiliatesPopUp,
  GamesLink,
  GamesPopUp,
  Link,
  MenuContainer,
  NbaLink,
  NbaPopUp,
  NewsLink,
  NewsPopUp,
  PlayersLink,
  PlayersPopUp,
  ScheduleLink,
  SchedulePopUp,
  StandingsLink,
  StandingsPopUp,
  StatsLink,
  StatsPopUp,
  StoreLink,
  StorePopUp,
  TicketsLink,
  TicketsPopUp,
  WatchLink,
  WatchPopUp
} from './styles';

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

const Menu = () => {
  return (
    <MenuContainer>
      <div>
        <GamesLink>
          <span>Games</span>
          <GamesPopUp>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Tickets</a>
              </li>
            </ul>
          </GamesPopUp>
        </GamesLink>
        <ScheduleLink>
          <span>Schedule</span>
          <SchedulePopUp>
            <ul>
              <li>
                <a>2022-23 Season Schedule</a>
              </li>
              <li>
                <a>League Pass Schedule</a>
              </li>
              <li>
                <a>Key Dates</a>
              </li>
              <li>
                <a>Tickets</a>
              </li>
            </ul>
          </SchedulePopUp>
        </ScheduleLink>
        <WatchLink>
          <span>Watch</span>
          <WatchPopUp>
            <ul>
              <li>Featured</li>
              <li>NBA TV</li>
            </ul>
          </WatchPopUp>
        </WatchLink>
        <NewsLink>
          <span>News</span>
          <NewsPopUp>
            <ul>
              <li>Home</li>
              <li>Top Stories</li>
              <li>30 Teams in 30 Days</li>
              <li>New Uniforms</li>
              <li>Hall of Fame</li>
              <li>Free Agency</li>
              <li>Draft</li>
              <li>Features</li>
              <li>Writer Archive</li>
              <li>More</li>
            </ul>
          </NewsPopUp>
        </NewsLink>
        <StatsLink>
          <span>Stats</span>
          <StatsPopUp>
            <ul>
              <li>Home</li>
              <li>Players</li>
              <li>Teams</li>
              <li>Leaders</li>
              <li>Stats 101</li>
              <li>Cume Stats</li>
              <li>Lineups Tool</li>
              <li>Media Central Game Stats</li>
              <li>Draft</li>
              <li>Quick Links</li>
              <li>Contact Us</li>
            </ul>
          </StatsPopUp>
        </StatsLink>
        <StandingsLink>
          <span>Standings</span>
          <StandingsPopUp>
            <ul>
              <li>2021-22 Standings</li>
              <li>2022-23 Preseason Results</li>
            </ul>
          </StandingsPopUp>
        </StandingsLink>
        <Link>
          <span>Teams</span>
        </Link>
        <PlayersLink>
          <span>Players</span>
          <PlayersPopUp>
            <ul>
              <li>Home</li>
              <li>Player Stats</li>
              <li>Starting Lineups</li>
              <li>Transactions</li>
            </ul>
          </PlayersPopUp>
        </PlayersLink>
        <Link>
          <span>Fantasy</span>
        </Link>
        <NbaLink>
          <span>NBABet</span>
          <NbaPopUp>
            <ul>
              <li>NBABet Home</li>
              <li>Authorized Gaming Operators</li>
              <li>Yahoo Fantasy Sports</li>
              <li>FanDuel DFS</li>
              <li>DraftKings DFS</li>
              <li>Starting Lineups</li>
            </ul>
          </NbaPopUp>
        </NbaLink>

        <Link>
          <span>League Pass</span>
        </Link>
        <StoreLink>
          <span>Store</span>
          <StorePopUp>
            <ul>
              <li>
                <img src={storeImage} style={{ width: '100px' }} />
              </li>
              <li>Jerseys</li>
              <li>Men</li>
              <li>Women</li>
              <li>Custom Shop</li>
              <li>Hardwood Classic</li>
              <li>Hats</li>
              <li>Footwear</li>
              <li>Auctions</li>
              <li>NBA Game Worn</li>
              <li>NYC Store</li>
              <li>NBA Photo Store</li>
            </ul>
          </StorePopUp>
        </StoreLink>
        <TicketsLink>
          <span>Tickets</span>
          <TicketsPopUp>
            <ul>
              <li>NBATickets.com</li>
              <li>Official Tickets by Ticketmaster</li>
            </ul>
          </TicketsPopUp>
        </TicketsLink>

        <AffiliatesLink>
          <span>Affiliates</span>

          <AffiliatesPopUp>
            <ul>
              {leagueInfo.map(({ id, title, image }) => {
                return (
                  <li key={id}>
                    <img src={images[image]} />
                    <span>{title}</span>
                  </li>
                );
              })}
            </ul>
          </AffiliatesPopUp>
        </AffiliatesLink>
      </div>
    </MenuContainer>
  );
};

export default Menu;
