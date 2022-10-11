import styled from 'styled-components';

export const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  cursor: pointer;
  margin-bottom: 1rem;

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
