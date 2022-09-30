import React, { useRef, useState } from "react";
import "./styles.css";
import teamsInDays from "../../data/teamsInDays";
import firstTeam from "../../images/firstTeam.jpeg";
import secondTeam from "../../images/secondTeam.jpeg";
import thirdTeam from "../../images/thirdTeam.jpeg";
import fourthTeam from "../../images/fourthTeam.jpeg";
import fifthTeam from "../../images/fifthTeam.jpeg";
import sixthTeam from "../../images/sixthTeam.jpeg";
import rightArrow from "../../images/rightArrow.png";

const images = {
  firstTeam,
  secondTeam,
  thirdTeam,
  fourthTeam,
  fifthTeam,
  sixthTeam,
};

const TeamsInDays = () => {
  const [scrolledWidth, setScrolledWidth] = useState(0);
  const [containerWidth] = useState(teamsInDays.length * 240);
  const containerRef = useRef(null);

  return (
    <div className="TeamsInDays-Container">
      <div className="Container-Title">
        <h1>30 TEAMS IN 30 DAYS</h1>

        {scrolledWidth > 0 && (
          <button
            className="Scroll-Button Left-Arrow"
            onClick={() => {
              const { offsetWidth } = containerRef.current;

              containerRef.current.style.transform = `translateX(-${
                scrolledWidth - offsetWidth
              }px)`;
              setScrolledWidth((prev) => prev - offsetWidth);
            }}
          >
            <img src={rightArrow} />
          </button>
        )}
        {scrolledWidth + 95 + (containerRef?.current?.offsetWidth || 240) <
          containerWidth && (
          <button
            className="Scroll-Button Right-Arrow"
            onClick={() => {
              const { offsetWidth } = containerRef.current;

              containerRef.current.style.transform = `translateX(-${
                scrolledWidth + offsetWidth + 95
              }px)`;
              setScrolledWidth((prev) => prev + offsetWidth);
            }}
          >
            <img src={rightArrow} />
          </button>
        )}
      </div>

      <div ref={containerRef}>
        {teamsInDays.map(({ id, image, title }) => {
          return (
            <div key={id} className="Team">
              <img src={images[image]} />
              <span>{title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsInDays;
