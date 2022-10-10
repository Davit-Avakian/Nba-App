import styled from 'styled-components';

export const MediasContainer = styled.div`
  width: 98%;
  height: fit-content;
  background-color: #ffff;
  padding: 1.25rem;
  position: relative;
  top: -7rem;

  & div:last-child {
    padding-bottom: 0;
    margin-top: -0.5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  a {
    cursor: pointer;
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    width: 30%;

    img {
      height: 28px;
      width: 28px;
      height: auto;
    }
  }

  @media (max-width: 1660px) {
    top: 2rem;
  }

  @media (max-width: 1050px) {
    top: 7rem;
    width: 100%;
  }
`;
