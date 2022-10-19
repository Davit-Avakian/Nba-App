import styled from 'styled-components';

export const LeagueContainer = styled.div`
  width: 98%;
  position: relative;
  top: -9rem;
  height: 420px;
  margin: 0 auto;
  background-color: ${({ theme: { containerBgColor } }) => containerBgColor};
  padding: 1.25rem;

  ul {
    padding: 0;
  }

  li {
    display: flex;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1.25;
    padding-top: 0.5rem;
    padding-bottom: 0.4rem;
    list-style-type: none;
    border-bottom: ${({ theme: { borderBottom } }) => borderBottom};
    align-items: center;

    img {
      height: 30px;
      width: 30px;
    }

    a {
      font-family: Roboto, Arial, sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.25;
      color: ${({ theme: { linkColor } }) => linkColor};
      margin-left: 0.8rem;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }

      img {
        height: 0.8rem;
        width: 0.8rem;
        opacity: 0.4;
        margin-left: 0.3rem;
      }
    }
  }

  & li:last-child {
    border-bottom: none;
  }

  @media (max-width: 1660px) {
    top: 0;
  }

  @media (max-width: 1050px) {
    width: 100%;
    max-height: fit-content;
    top: 5rem;
  }
`;
