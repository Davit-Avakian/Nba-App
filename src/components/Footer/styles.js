import styled from 'styled-components';

export const BottomContainer = styled.div`
  display: flex;
  color: #ffff;
  width: 75%;
  margin: 0 auto;
  margin-top: 2rem;
  color: #ffff;

  div:first-child div:first-child {
    margin-bottom: 0.5rem;
    font-weight: 700;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 1.25;
  }

  & div:first-child {
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        font-size: 0.625rem;
        line-height: 1.25;
        border-right: 1px solid #ffff;
        opacity: 0.9;
        padding: 0 0.6rem;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }

      & li:first-child {
        padding-left: 0;
      }

      & li:last-child {
        border-right: none;
      }
    }

    p {
      font-size: 0.625rem;
      line-height: 1.25;
      opacity: 0.96;
    }

    img {
      width: 6rem;
      margin-top: 0.5rem;
    }
  }

  & div:last-child {
    margin-left: auto;

    img {
      cursor: pointer;
      height: 25px;
      margin-left: 1.5rem;
    }
  }

  @media (max-width: 1050px) {
    margin-top: 2rem;
    margin: 1rem auto;
    width: 95%;
    flex-direction: column-reverse;
    padding-left: 2rem;

    div:last-child {
      margin: 0;
      padding: 1rem 0 1.7rem 0;
    }

    div:last-child img {
      margin-left: 0;
      margin-right: 1.2rem;
    }
  }
`;

export const Arrow = styled.img`
  display: none;
`;

export const TopContainer = styled.div`
  display: flex;
  color: #ffff;
  width: 75%;
  margin: 0 auto;
  font-size: 0.75rem;

  ul {
    display: block;
    padding: 0;
    margin-top: 2rem;
  }

  li {
    display: block;
    width: 100%;
    list-style-type: none;
    margin-bottom: 0.7rem;
    white-space: nowrap;
  }

  div {
    width: 18%;

    span {
      font-family: Roboto, Arial, sans-serif;
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 1.25;
    }

    a {
      font-family: Roboto, Arial, sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.25;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  & div:last-child {
    margin-left: auto;
  }

  @media (max-width: 1350px) {
    div {
      width: 20%;
      margin-right: 2.5rem;
    }
  }

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    div {
      padding: 1.3rem 2rem;
      cursor: default;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px solid #545454;

      span {
        text-transform: uppercase;
        font-family: Roboto, Arial, sans-serif;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.25;
      }

      ul {
        display: none;
      }
    }

    ${Arrow} {
      display: block;
      height: 0.6rem;
      width: 1.2rem;
      margin-right: 3rem;
    }
  }
`;

export const FooterContainer = styled.div`
  background-color: black;
  padding: 2rem;
  margin-top: 213rem;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: -6px;

  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    opacity: 1;
    color: #ffff;
    border-top-width: 1px;
    width: 75%;
  }

  @media (max-width: 1600px) {
    ${TopContainer}, ${BottomContainer}, hr {
      width: 100%;
    }
  }

  @media (max-width: 1350px) {
    margin-top: 220rem;
  }

  @media (max-width: 1050px) {
    width: 100%;
    margin-top: 410rem;
    padding: 0;

    ${TopContainer}, ${BottomContainer} {
      width: 100%;
      margin: 0;
    }

    hr {
      display: none;
    }

    ${Arrow} {
      display: block;
    }
  }

  @media (max-width: 800px) {
    margin-top: 420rem;
  }

  @media (max-width: 740px) {
    margin-top: 430rem;
  }

  @media (max-width: 670px) {
    margin-top: 445rem;
  }
`;
