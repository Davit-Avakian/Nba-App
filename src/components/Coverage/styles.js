import styled from 'styled-components';

export const CoverageItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  cursor: pointer;

  img {
    height: 130px;
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
