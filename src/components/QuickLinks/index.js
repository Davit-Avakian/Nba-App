import React from "react";
import "./styles.css";
import share from "../../images/share.jpg";

const QuickLinks = () => {
  return (
    <div className="QuickLinks-Container">
      <div className="Container-Title">
        <h1>QUICK LINKS</h1>
      </div>

      <ul>
        <li>
          <a>
            Fantasy
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            NBA History
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            NBA Official
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            Key Dates
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            LockerVision
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            NBA Awards
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            2022 NBA Draft
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            2022 Summer League
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            2022 NBA Playoffs
            <img src={share} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
