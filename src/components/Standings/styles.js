import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  font-family: Roboto Condensed, Arial, sans-serif;
  margin-top: 1.5rem;

  button {
    cursor: pointer;
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
    margin-left: 0;
    align-items: center;
    flex: 1 1;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
    border-width: 1px;
    background: #fff;
    border-color: #e5e7eb;
    border: 0.7px solid #e5e7eb;
    border-radius: 0.3rem;
  }
`;

export const TeamName = styled.span`
  text-transform: uppercase;
  font-family: titleFont;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: ${({ theme: { linkColor } }) => linkColor};
`;

export const TeamList = styled.div`
  table {
    max-width: 100%;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25;
    margin: 0;
    border-collapse: collapse;
    position: relative;
    font-variant: proportional-width;
    font-size: 12px;
    border-spacing: 0;
    background-color: transparent;
  }

  thead tr {
    width: 100%;
  }

  thead tr th:first-child {
    text-align: start;
  }

  thead tr th {
    background-color: ${({ theme: { containerBgColor } }) => containerBgColor};
    color: #343232;
    border-color: #ebe9e7;
    vertical-align: bottom;
    font-family: Roboto Condensed, Arial, sans-serif;
    text-align: right;
    white-space: nowrap;
    letter-spacing: 1px;
    font-size: 10px;
    padding: 14px 6px;
  }

  tbody tr {
    cursor: pointer;
    border-bottom: 1px solid #ebe9e7;

    &:hover {
      background-color: #e4eaf1;
    }

    td {
      text-align: right;
      width: 100%;
      font-size: 0.8rem;
      padding-top: 0.6rem;
      padding-bottom: 0.6rem;
      text-align: center;
    }

    & td:last-child div {
      display: flex;
      width: 75%;
      height: 1.5rem;
      align-items: center;
      justify-content: flex-end;
      padding-right: 0.4rem;
      border-radius: 0.25rem;
      color: #000;
      margin-left: 0.4rem;
    }

    & td:first-child {
      min-width: 100px;
      max-width: 100px;
      overflow: hidden;
      font-weight: 400;
      font-size: 0.875rem;
      font-family: Roboto Condensed, Arial, sans-serif;
      line-height: 1.25;
      white-space: nowrap;
      color: #000;
      border-top: 1px #ebe9e7;
      padding: 8px;
      font-stretch: condensed;
    }

    a {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      align-items: center;
      gap: 1rem;

      &span:first-child {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 0.9rem;
        line-height: 2;
        color: #000;
        text-align: center;
        width: 1rem;
        color: ${({ theme: { linkColor } }) => linkColor};
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 1050px) {
    table {
      width: 95%;
    }

    thead tr th {
      text-align: center;
    }

    tbody tr td {
      width: 25%;
    }

    tbody tr td:last-child div {
      width: 90%;
    }
  }

  @media (max-width: 520px) {
    table {
      width: 92%;
    }
  }
`;

export const StandingsContainer = styled.div`
  width: 98%;
  min-height: 840px;
  height: fit-content;
  background-color: ${({ theme: { containerBgColor } }) => containerBgColor};
  padding: 1.25rem;
  position: relative;
  top: -30%;

  & div:first-child {
    display: flex;
    justify-content: space-between;

    h1 {
      min-width: fit-content;
    }

    a {
      font-family: Roboto, Arial, sans-serif;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.25;
      margin-left: 0.5rem;
      min-width: fit-content;
      color: ${({ theme: { linkColor } }) => linkColor};

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 1800px) {
    & div:first-child {
      a,
      h1 {
        min-width: 10px;
        line-height: 1;
      }
    }
  }

  @media (max-width: 1660px) {
    top: 6rem;
  }

  @media (max-width: 1361px) {
    & div:first-child {
      height: 3.5rem;
    }
  }

  @media (max-width: 1050px) {
    top: 12rem;
    width: 100%;

    & div:first-child {
      height: 2.5rem;
      margin-right: 2rem;
    }
  }
`;
