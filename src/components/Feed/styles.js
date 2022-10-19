import styled from 'styled-components';

export const ListItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row !important;
  margin-bottom: 1rem;
  width: 100%;

  img {
    height: 130px;
  }

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;

export const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.7rem;

  & span:nth-child(1) {
    text-transform: uppercase;
    font-family: titleFont;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 0.8;
    margin-right: 0.5rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  & span:nth-child(2) {
    font-family: Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    margin: 0.8rem 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  & span:nth-child(3) {
    font-family: Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25;
    color: #868481;
  }
`;

export const FeedContainer = styled.div`
  height: fit-content;
  background-color: ${({ theme: { containerBgColor } }) => containerBgColor};
  padding: 1.25rem;
  margin-top: 2rem;

  & div:last-child {
    display: flex;
    flex-direction: ${({ flexRow }) => (flexRow ? 'row' : 'column')};
  }

  & div :last-child {
    display: flex;
    flex-direction: ${({ flexRow }) => (flexRow ? 'row' : 'column')};
  }

  @media (max-width: 1050px) {
    width: 100%;

    & div:last-child {
      margin-right: 1rem;
    }
  }

  @media (max-width: 920px) {
    & div:last-child {
      flex-direction: column;
    }

    & div ${ListItem} {
      flex-direction: row;
    }

    ${ListItem} {
      margin-top: 1rem;
    }
  }

  @media (max-width: 500px) {
    ${ListItem} {
      div {
        span {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
`;
