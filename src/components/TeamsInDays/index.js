import React, { useRef, useState } from 'react';
import teamsInDays from '@data/teamsInDays';
import firstTeam from '@images/firstTeam.jpeg';
import secondTeam from '@images/secondTeam.jpeg';
import thirdTeam from '@images/thirdTeam.jpeg';
import fourthTeam from '@images/fourthTeam.jpeg';
import fifthTeam from '@images/fifthTeam.jpeg';
import sixthTeam from '@images/sixthTeam.jpeg';
import rightArrow from '@images/rightArrow.png';
import { LeftArrow, RightArrow, Team, TeamsContainer } from './styles';
import { ContainerTitle } from '../../App.styled';

const images = {
  firstTeam,
  secondTeam,
  thirdTeam,
  fourthTeam,
  fifthTeam,
  sixthTeam
};

const TeamsInDays = () => {
  const [scrolledWidth, setScrolledWidth] = useState(0);
  const [containerWidth] = useState(teamsInDays.length * 240);
  const containerRef = useRef(null);

  return (
    <TeamsContainer>
      <ContainerTitle>
        <h1>30 TEAMS IN 30 DAYS</h1>

        {scrolledWidth > 0 && (
          <LeftArrow
            onClick={() => {
              const { offsetWidth } = containerRef.current;

              containerRef.current.style.transform = `translateX(-${
                scrolledWidth - offsetWidth
              }px)`;
              setScrolledWidth((prev) => prev - offsetWidth);
            }}>
            <img src={rightArrow} />
          </LeftArrow>
        )}
        {scrolledWidth + 95 + (containerRef?.current?.offsetWidth || 240) < containerWidth && (
          <RightArrow
            onClick={() => {
              const { offsetWidth } = containerRef.current;

              containerRef.current.style.transform = `translateX(-${
                scrolledWidth + offsetWidth + 95
              }px)`;
              setScrolledWidth((prev) => prev + offsetWidth);
            }}>
            <img src={rightArrow} />
          </RightArrow>
        )}
      </ContainerTitle>

      <div ref={containerRef}>
        {teamsInDays.map(({ id, image, title }) => {
          return (
            <Team key={id}>
              <div>
                <img src={images[image]} />
              </div>
              <span>{title}</span>
            </Team>
          );
        })}
      </div>
    </TeamsContainer>
  );
};

export default TeamsInDays;
