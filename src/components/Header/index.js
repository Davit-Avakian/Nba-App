import React from 'react';
import logoImg from 'assets/images/headerLogo.svg';
import moreImg from 'assets/images/headerMore.png';
import closeImg from 'assets/images/closeImg.png';
import menuImg from 'assets/images/menuImage.png';
import storeImage from 'assets/images/storeImage.svg';
import leagueInfo from 'data/leagueInfo';
import {
  GamesPopUp,
  HeaderContainer,
  ImageLink,
  ImagePopUp,
  Logo,
  MainContainer,
  MenuImage,
  SchedulePopUp,
  SignInContainer,
  SignInPopUp,
  StoreLink,
  StorePopUp,
  TicketsLink,
  PopUp,
  Link
} from './styles';
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
import { drawPopUp } from 'helpers';

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
          <div data-testid="headerLinks">
            <Link>
              <span>Games</span>
              <GamesPopUp data-testid="headerPopUp">{drawPopUp(GamesLinks)}</GamesPopUp>
            </Link>
            <Link>
              <span>Schedule</span>
              <SchedulePopUp>{drawPopUp(ScheduleLinks)}</SchedulePopUp>
            </Link>
            <Link>
              <span>Watch</span>
              <PopUp>{drawPopUp(WatchLinks)}</PopUp>
            </Link>
            <Link>
              <span>News</span>
              <PopUp width={170}>{drawPopUp(NewsLinks)}</PopUp>
            </Link>
            <Link>
              <span>Stats</span>
              <PopUp width={210}>{drawPopUp(StatsLinks)}</PopUp>
            </Link>
            <Link>
              <span>Standings</span>
              <PopUp minWidth={250}>{drawPopUp(StandingsLinks)}</PopUp>
            </Link>
            <Link>
              <span>Teams</span>
            </Link>
            <Link>
              <span>Players</span>
              <PopUp width={160}>{drawPopUp(PlayersLinks)}</PopUp>
            </Link>
            <Link>
              <span>Fantasy</span>
            </Link>
            <Link>
              <span>NBABet</span>
              <PopUp width={240}>{drawPopUp(NbaLinks)}</PopUp>
            </Link>
          </div>
        )}
      </MainContainer>

      <SignInContainer>
        <div>
          {!showMenu && (
            <Link>
              <span>League Pass</span>
            </Link>
          )}

          {!showMenu && (
            <StoreLink>
              <span>Store</span>
              <StorePopUp>
                <ul>
                  <li>
                    <img src={storeImage} />
                  </li>
                  {StoreLinks.map((el) => {
                    return <li key={el}>{el}</li>;
                  })}
                </ul>
              </StorePopUp>
            </StoreLink>
          )}
          {!showMenu && (
            <TicketsLink>
              <span>Tickets</span>
              <PopUp width={240}>{drawPopUp(TicketsLinks)}</PopUp>
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
                      <img src={image} />
                      <span>{title}</span>
                    </li>
                  );
                })}
              </ul>
            </ImagePopUp>
          </ImageLink>
        )}
        <Link>
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
        </Link>
      </SignInContainer>
    </HeaderContainer>
  );
};

export default Header;
