import styled from 'styled-components';

export const Team = styled.div`
  margin-right: 2rem;
  display: flex;
  flex-direction: column;

  div {
    height: 140px;
    overflow: hidden;
    margin-bottom: 1.3rem;
  }

  img {
    height: 140px;
    transition: scale 0.35s ease-in-out;
    margin-bottom: 1.4rem;

    &:hover {
      scale: 1.1;
    }
  }

  span {
    text-transform: uppercase;
    font-family: titleFont;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.2;
    margin-right: 0.5rem;
  }
`;

export const LeftArrow = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  background-color: #f3f3f3;
  color: #0268d6;
  border-radius: 9999px;
  text-align: center;
  z-index: 1;
  opacity: 0.75;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  transition-property: all;
  transition-duration: 0.1s;
  border-width: 1px;
  border-color: transparent;
  top: 60%;
  left: 0;

  &:hover {
    background-color: #086cd7;
  }

  img {
    rotate: 180deg;
    height: 1.2rem;
  }
`;

export const RightArrow = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  background-color: #f3f3f3;
  color: #0268d6;
  border-radius: 9999px;
  text-align: center;
  z-index: 1;
  opacity: 0.75;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  transition-property: all;
  transition-duration: 0.1s;
  border-width: 1px;
  border-color: transparent;
  top: 60%;
  right: 0;

  &:hover {
    background-color: #086cd7;
  }

  img {
    height: 1.2rem;
  }

  @media (max-width: 1050px) {
    right: 5%;
  }

  @media (max-width: 500px) {
    right: 8%;
  }
`;

export const TeamsContainer = styled.div`
  position: relative;
  height: fit-content;
  background-color: ${({ theme: { containerBgColor } }) => containerBgColor};
  padding: 1.25rem;
  margin-top: 2rem;
  overflow-x: hidden;

  & div:last-child {
    display: flex;
    width: 100%;
    transform: translateX(0);
    transition: transform 0.4s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  @media (max-width: 1050px) {
    width: 100%;
  }
`;
