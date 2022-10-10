import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 50px;
  display: block;
  margin-right: 1rem;
`;

export const MenuImage = styled.img`
  display: none;
  height: 30px;
  margin-right: 1.5rem;
  margin-top: 0.9rem;

  &:hover {
    opacity: 0.8;
  }
`;

export const SignInContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 24px;
    cursor: pointer;
  }
`;

export const Link = styled.div`
  box-sizing: border-box;
  padding-top: 20px;
  display: inline-block;
  position: relative;
  height: 100%;
`;

const PopUp = styled.div`
  left: -5%;
  top: 100%;
  position: absolute;
  z-index: 20;
  visibility: hidden;
  padding: 0.4rem;
  background-color: #fff;
  color: #000;
  opacity: 0;
  font-size: 0.875rem;
  font-weight: 600;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  li {
    padding: 0.75rem 1.2rem;
    height: 100%;
  }

  li:hover {
    background-color: #d8d6d6;
  }
`;

export const GamesPopUp = styled(PopUp)`
  li {
    width: 52%;
  }
`;

export const GamesLink = styled(Link)`
  &:hover ${GamesPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const SchedulePopUp = styled(PopUp)`
  min-width: 200px;

  li {
    width: 83%;
  }
`;

export const ScheduleLink = styled(Link)`
  &:hover ${SchedulePopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const WatchPopUp = styled(PopUp)``;

export const WatchLink = styled(Link)`
  &:hover ${WatchPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const NewsPopUp = styled(PopUp)`
  width: 170px;
`;

export const NewsLink = styled(Link)`
  &:hover ${NewsPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const StatsPopUp = styled(PopUp)`
  width: 210px;
`;

export const StatsLink = styled(Link)`
  &:hover ${StatsPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const StandingsPopUp = styled(PopUp)`
  min-width: 250px;
`;

export const StandingsLink = styled(Link)`
  &:hover ${StandingsPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const TeamsLink = styled(Link)``;

export const PlayersPopUp = styled(PopUp)`
  width: 160px;
`;

export const PlayersLink = styled(Link)`
  &:hover ${PlayersPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const FantasyLink = styled(Link)``;

export const NbaPopUp = styled(PopUp)`
  width: 240px;
`;

export const NbaLink = styled(Link)`
  &:hover ${NbaPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const LeagueLink = styled(Link)``;

export const StorePopUp = styled(PopUp)`
  width: 160px;

  img:first-child {
    height: 30px;
    width: 100%;
  }
`;

export const StoreLink = styled(Link)`
  height: 55px !important;

  &:hover ${StorePopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const TicketsPopUp = styled(PopUp)`
  width: 240px;
`;

export const TicketsLink = styled(Link)`
  height: 55px !important;

  &:hover ${TicketsPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const ImagePopUp = styled(PopUp)`
  left: -13rem;
  width: 310px;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
    max-width: 20rem;
  }

  li {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    overflow: hidden;
    border-radius: 0.125rem;
    width: 15%;
    margin-right: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin-left: 0;
      margin-top: 0.75rem;
      font-family: Roboto, Arial, sans-serif;
      font-weight: 400;
      font-size: 0.7rem;
      line-height: 1.25;
      color: black;
    }
  }

  img {
    overflow: visible;
    width: 3rem;
    height: 3rem;
  }
`;

export const ImageLink = styled(Link)`
  padding-top: 15px;

  &:hover ${ImagePopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const SignInPopUp = styled(PopUp)`
  left: -10.8rem;
  width: 230px;

  a:first-child {
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    white-space: nowrap;
    width: 75%;
    border-bottom: 1px solid #c9c5c5;
  }

  div {
    padding: 0.75rem 1rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    padding-left: 0.5rem;
    margin-top: 0.5rem;

    span:first-child {
      color: black;
    }
  }

  div:hover,
  a:hover {
    background-color: #d8d6d6;
  }

  span:last-child {
    height: 1.1rem;
    width: 1.5rem;
    border-radius: 9999px;
    cursor: pointer;
    background-color: #bbbdbe;
    color: #343232;
    border: 1px solid #bbbdbe;
    border-color: #343232;
  }

  a:last-child {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    white-space: nowrap;
    padding: 0.75rem 1rem;
  }
`;

export const SignInLink = styled(Link)`
  &:hover ${SignInPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  background-color: black;
  display: flex;
  justify-content: space-around;
  font: 14px 'Roboto', 'arial', 'sans-serif';
  z-index: 5;

  span {
    cursor: pointer;
    color: #ffff;
    height: 55px;
    font-size: 0.875rem;
    padding: 0 0.5rem;
    font-weight: 600;
  }

  @media (max-width: 1300px) {
    justify-content: space-between;
    padding: 0rem;

    ${MenuImage} {
      display: inline-block;
    }
  }

  @media (max-width: 1200px) {
    ${ImageLink} {
      display: none;
    }
  }

  @media (max-width: 1090px) {
    ${TicketsLink} {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    ${StoreLink}, ${LeagueLink} {
      display: none;
    }
  }

  @media (max-width: 840px) {
    ${NbaLink} {
      display: none;
    }
  }

  @media (max-width: 770px) {
    ${FantasyLink} {
      display: none;
    }
  }

  @media (max-width: 710px) {
    ${PlayersLink}, ${TeamsLink} {
      display: none;
    }
  }

  @media (max-width: 570px) {
    ${StandingsLink}, ${StatsLink} {
      display: none;
    }
  }

  @media (max-width: 450px) {
    ${NewsLink}, ${WatchLink} {
      display: none;
    }
  }

  @media (max-width: 400px) {
    ${ScheduleLink}, ${GamesLink} {
      display: none;
    }
  }
`;
