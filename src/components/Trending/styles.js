import styled from 'styled-components';

export const TrendingItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin: 0.5rem 1.2rem 0.5rem 0;
  overflow: hidden;
  border-radius: 0.25rem;
  min-width: 260px;
  height: 234px;

  span {
    text-transform: uppercase;
    font-family: titleFont;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 0.8;
    margin-right: 0.5rem;
    line-height: 1.4;
    margin-top: 1.4rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 140px;
  overflow: hidden;

  img {
    height: 100%;
    transition: scale 0.35s ease-in-out;
    overflow: hidden;
  }

  img:hover {
    scale: 1.1;
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
`;

export const TrendingContainer = styled.div`
  height: fit-content;
  position: relative;
  background-color: #ffff;
  padding: 1.25rem;
  overflow: hidden;

  & div:last-child {
    display: flex;
    width: 100%;
    transform: translateX(0);
    transition: transform 0.4s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  @media (max-width: 1050px) {
    margin-top: 25rem;
    width: 100%;

    ${RightArrow} {
      right: 2rem;
    }
  }

  @media (max-width: 780px) {
    margin-top: 30rem;
  }
`;
