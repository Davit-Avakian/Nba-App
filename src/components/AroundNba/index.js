import React from "react";
import "./styles.css";
import aroundNba from "../../data/aroundNba";
import firstAround from "../../images/firstAround.jpg";
import secondAround from "../../images/secondAround.jpg";
import thirdAround from "../../images/thirdAround.jpg";
import fourthAround from "../../images/fourthAround.jpg";
import fifthAround from "../../images/fifthAround.jpg";
import sixthAround from "../../images/sixthAround.jpg";
import seventhAround from "../../images/seventhAround.jpg";
import eighthAround from "../../images/eighthAround.jpg";
import ninthAround from "../../images/ninthAround.jpg";
import tenthAround from "../../images/tenthAround.jpg";
import eleventhAround from "../../images/eleventhAround.jpg";

const images = {
  firstAround,
  secondAround,
  thirdAround,
  fourthAround,
  fifthAround,
  sixthAround,
  seventhAround,
  eighthAround,
  ninthAround,
  tenthAround,
  eleventhAround,
};

const AroundNba = () => {
  return (
    <div className="AroundNba-Container">
      <div className="Container-Title">
        <h1>AROUND THE NBA</h1>
      </div>

      <ul>
        {aroundNba.map(({ id, image, title, description, date }) => {
          return (
            <li className="AroundNba-Item" key={id}>
              <img src={images[image]} />

              <div>
                <span className="title">
                  {title}
                </span>
                <span className="description">{description}</span>
                <span className="date">{date}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AroundNba;
