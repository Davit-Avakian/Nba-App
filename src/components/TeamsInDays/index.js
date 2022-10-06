import React, { useRef, useState } from 'react';
import teamsInDays from 'data/teamsInDays';
import firstTeam from 'assets/images/firstTeam.jpeg';
import secondTeam from 'assets/images/secondTeam.jpeg';
import thirdTeam from 'assets/images/thirdTeam.jpeg';
import fourthTeam from 'assets/images/fourthTeam.jpeg';
import fifthTeam from 'assets/images/fifthTeam.jpeg';
import sixthTeam from 'assets/images/sixthTeam.jpeg';
import rightArrow from 'assets/images/rightArrow.png';
import { LeftArrow, RightArrow, Team, TeamsContainer } from './styles';
import { ContainerTitle } from '../../App.styled';

// keeps imported images
const images = {
  firstTeam,
  secondTeam,
  thirdTeam,
  fourthTeam,
  fifthTeam,
  sixthTeam
};

/**
 *  Creates component for 30 teams in 30 days section
 *  @returns {component} TeamsInDays component shows news about teams in the last 30 days
 */
const TeamsInDays = () => {
  // keeps container's scrolled width in px
  const [scrolledWidth, setScrolledWidth] = useState(0);

  // keeps container's full width
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
