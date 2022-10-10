import styled from 'styled-components';

export const HeadLinesContainer = styled.div`
  width: 20%;
  height: fit-content;
  min-height: fit-content;
  margin-left: 2.1rem;
  background-color: #ffff;
  padding: 1.25rem;

  & div:first-child {
    display: flex;
    align-items: baseline;
    padding-bottom: 0.75rem;
    margin-bottom: 0.5rem;
    border-bottom: ${({ theme: { borderBottom } }) => borderBottom};
    height: 35px;
    justify-content: space-between;

    span {
      text-transform: uppercase;
      font-family: titleFont;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 0.8;
      margin-right: 0.5rem;
    }

    a {
      font-family: Roboto, Arial, sans-serif;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.25;
      margin-left: 0.5rem;
      color: ${({ theme: { linkColor } }) => linkColor};
    }

    a:hover {
      text-decoration: underline;
    }
  }

  & div:last-child {
    margin-top: 35px;

    li {
      font-family: Roboto, Arial, sans-serif;
      font-weight: 300;
      font-size: 0.875rem;
      line-height: 1.25;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      list-style-type: none;
      margin-left: 0.5rem;
      border-bottom: ${({ theme: { borderBottom } }) => borderBottom};
    }

    & li:last-child {
      border-bottom: none;
    }

    a {
      cursor: pointer;
    }

    ul {
      margin: 0;
      padding: 0;
    }
  }

  @media (max-width: 1050px) {
    width: 96%;
    margin-top: 30px;
    margin-left: 0;

    & div:first-child {
      margin-right: 1rem;
    }
  }
`;
