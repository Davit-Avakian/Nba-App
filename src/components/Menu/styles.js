import styled from 'styled-components';

export const Link = styled.div`
  border-bottom: 1px solid #363940;
  padding-left: 0.5rem;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  span {
    display: block;
    width: 100%;
    text-align: left;
    transition-property: opacity;
    opacity: 1;
    padding: 1rem 0.25rem;
    transition-duration: 0.15s;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 900;
  }
`;

const PopUp = styled.div`
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  list-style-type: none;
  left: 31%;
  top: 0;
  color: black;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    height: 100%;
    list-style: none;
    margin: 0;

    li {
      width: 100%;
      border-bottom: 1px solid #e7e7e7;
      font-family: Roboto, Arial, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      padding: 1rem 0;
      line-height: 1.25;

      &:hover {
        background-color: #e6e6e6;
      }
    }
  }

  @media (max-width: 630px) {
    left: 20%;
  }

  @media (max-width: 530px) {
    left: 30%;
  }
`;

export const GamesPopUp = styled(PopUp)``;

export const GamesLink = styled(Link)`
  &:hover ${GamesPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const SchedulePopUp = styled(PopUp)``;

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

export const NewsPopUp = styled(PopUp)``;

export const NewsLink = styled(Link)`
  &:hover ${NewsPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const StatsPopUp = styled(PopUp)``;

export const StatsLink = styled(Link)`
  &:hover ${StatsPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const StandingsPopUp = styled(PopUp)``;

export const StandingsLink = styled(Link)`
  &:hover ${StandingsPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const PlayersPopUp = styled(PopUp)``;

export const PlayersLink = styled(Link)`
  &:hover ${PlayersPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const NbaPopUp = styled(PopUp)``;

export const NbaLink = styled(Link)`
  &:hover ${NbaPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const StorePopUp = styled(PopUp)``;

export const StoreLink = styled(Link)`
  &:hover ${StorePopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const TicketsPopUp = styled(PopUp)``;

export const TicketsLink = styled(Link)`
  &:hover ${TicketsPopUp} {
    visibility: visible;
    opacity: 1;
  }
`;

export const AffiliatesPopUp = styled(PopUp)``;

export const AffiliatesLink = styled(Link)`
  height: 100%;

  &:hover ${AffiliatesPopUp} {
    visibility: visible;
    opacity: 1;
  }

  li {
    display: flex;
  }

  img {
    width: 54px;
    height: 54px;
    margin-right: 0.3rem;
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 55px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 40;
  width: 100%;

  & > div {
    height: 100%;
    min-width: 150px;
    width: 33.333333%;
    -webkit-overflow-scrolling: touch;
    height: 100%;
    color: #f6f6f6;
    background-color: #000;
  }

  @media (max-width: 630px) {
    & > div {
      width: 15%;
    }
  }
`;
