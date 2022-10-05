import styled from 'styled-components';

export const CoverageItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  cursor: pointer;

  img {
    height: 130px;
  }

  div {
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
      -webkit-line-clamp: 2;
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
  }
`;

export const CoverageContainer = styled.div`
  height: fit-content;
  background-color: #ffff;
  padding: 1.25rem;
  margin-top: 2rem;

  & div:last-child {
    display: flex;
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

    ${CoverageItem} {
      margin-top: 1rem;
    }
  }

  @media (max-width: 500px) {
    ${CoverageItem} {
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
