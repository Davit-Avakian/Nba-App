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
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  return (
    <div className="TeamsInDays-Container">
      <div className="Container-Title">
        <h1>30 TEAMS IN 30 DAYS</h1>

        {page > 1 && (
          <button
            className="Scroll-Button Left-Arrow"
            onClick={() => {
              containerRef.current.style.transform = "translateX(0)";
              setPage((prev) => prev - 1);
            }}
          >
            <img src={rightArrow} />
          </button>
        )}
        {page < Math.ceil(teamsInDays.length / 4) && (
          <button
            className="Scroll-Button Right-Arrow"
            onClick={() => {
              containerRef.current.style.transform = "translateX(-820px)";
              setPage((prev) => prev + 1);
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
