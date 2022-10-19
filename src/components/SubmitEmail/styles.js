import styled from 'styled-components';

export const EmailContainer = styled.div`
  width: 112%;
  margin-bottom: 1.5rem;
  border-radius: 0.25rem;
  background-color: ${({ theme: { containerBgColor } }) => containerBgColor};

  & div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background-color: #051c2d;
    height: 78px;
    min-width: 100%;
  }

  & div:last-child {
    padding: 1.25rem;
  }

  & p:first-child {
    text-transform: uppercase;
    font-family: titleFont;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 0.8;
    margin-bottom: 2rem;
  }

  input {
    display: block;
    border: none;
    border-bottom-color: currentcolor;
    border-bottom-style: none;
    border-bottom-width: medium;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-bottom: 1.5rem;
    width: 95%;
    appearance: none;
    background-color: #f3f3f3;
    color: #000;
    border-bottom: 1px solid #daddde;

    &:focus {
      outline: 2px solid black;
    }
  }

  button {
    width: 100%;
    height: 50px;
    background-color: #191c23;
    color: #ffff;
    white-space: nowrap;
    appearance: none;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;
    font-weight: 700;
    line-height: 1.25;

    &:hover {
      background-color: ${({ theme: { containerBgColor } }) => containerBgColor};
      color: #000;
      border: 1px solid #000;
    }
  }

  & p:last-child {
    font-size: 0.7rem;
    opacity: 0.5;
    margin-top: 2rem;
  }

  @media (max-width: 1660px) {
    margin-top: 8rem;
  }

  @media (max-width: 1050px) {
    margin-top: 15rem;
    width: 100%;

    input {
      width: 98%;
    }
  }
`;
