import React from 'react';
import logoImg from 'assets/images/headerLogo.svg';
import moreImg from 'assets/images/headerMore.png';
import closeImg from 'assets/images/closeImg.png';
import menuImg from 'assets/images/menuImage.png';
import storeImage from 'assets/images/storeImage.svg';
import leagueInfo from 'data/leagueInfo';
import firstLeague from 'assets/images/firstLeague.svg';
import secondLeague from 'assets/images/secondLeague.svg';
import thirdLeague from 'assets/images/thirdLeague.svg';
import fourthLeague from 'assets/images/fourthLeague.svg';
import fifthLeague from 'assets/images/fifthLeague.svg';
import sixthLeague from 'assets/images/sixthLeague.svg';
import seventhLeague from 'assets/images/seventhLeague.svg';
import eighthLeague from 'assets/images/eighthLeague.svg';
import {
  FantasyLink,
  GamesLink,
  GamesPopUp,
  HeaderContainer,
  ImageLink,
  ImagePopUp,
  LeagueLink,
  Logo,
  MainContainer,
  MenuImage,
  NbaLink,
  NbaPopUp,
  NewsLink,
  NewsPopUp,
  PlayersLink,
  PlayersPopUp,
  ScheduleLink,
  SchedulePopUp,
  SignInContainer,
  SignInLink,
  SignInPopUp,
  StandingsLink,
  StandingsPopUp,
  StatsLink,
  StatsPopUp,
  StoreLink,
  StorePopUp,
  TeamsLink,
  TicketsLink,
  TicketsPopUp,
  WatchLink,
  WatchPopUp
} from './styles';

// keeps imported images for this component
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
 *  Creates header and its items
 *  @param {function} setShowMenu function for showing or hiding menu
 *  @param {boolean} showMenu boolean that shows if menu is open or closed
 *  @returns {component} Header Component
 */
const Header = ({ setShowMenu, showMenu }) => {
  return (
    <HeaderContainer>
      <MainContainer>
        <MenuImage
          src={showMenu ? closeImg : menuImg}
          alt=""
          onClick={() => setShowMenu((prev) => !prev)}
        />
        <Logo src={logoImg} alt="" />
        {!showMenu && (
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
            <TeamsLink>
              <span>Teams</span>
            </TeamsLink>
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
            <FantasyLink>
              <span>Fantasy</span>
            </FantasyLink>
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
          </div>
        )}
      </MainContainer>

      <SignInContainer>
        <div>
          {!showMenu && (
            <LeagueLink>
              <span>League Pass</span>
            </LeagueLink>
          )}

          {!showMenu && (
            <StoreLink>
              <span>Store</span>
              <StorePopUp>
                <ul>
                  <li>
                    <img src={storeImage} />
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
          )}
          {!showMenu && (
            <TicketsLink>
              <span>Tickets</span>
              <TicketsPopUp>
                <ul>
                  <li>NBATickets.com</li>
                  <li>Official Tickets by Ticketmaster</li>
                </ul>
              </TicketsPopUp>
            </TicketsLink>
          )}
        </div>
        {!showMenu && (
          <ImageLink>
            <img src={moreImg} alt="" />

            <ImagePopUp>
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
            </ImagePopUp>
          </ImageLink>
        )}
        <SignInLink>
          <span>Sign in</span>
          <SignInPopUp>
            <a>
              <b>Sign in with NBA ID</b>
            </a>
            <div>
              <span>Hide Scores</span>
              <span></span>
            </div>
            <a>Help</a>
          </SignInPopUp>
        </SignInLink>
      </SignInContainer>
    </HeaderContainer>
  );
};

export default Header;
