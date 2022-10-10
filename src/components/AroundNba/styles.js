import styled from 'styled-components';

export const AroundContainer = styled.div`
  height: fit-content;
  background-color: #ffff;
  padding: 1.25rem;
  margin-top: 7rem;

  ul {
    margin: 0;
    padding: 0;

    li {
      cursor: pointer;
      padding-left: 0;
      padding-right: 0;
      display: flex;
      width: 100%;
      box-sizing: border-box;
      list-style: none;
      margin-bottom: 1rem;

      img {
        height: 7.3rem;
      }
    }
  }

  @media (max-width: 1050px) {
    width: 100%;

    ul {
      margin-right: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    li div span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
`;
