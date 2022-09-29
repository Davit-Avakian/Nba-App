import React, { useRef, useState } from "react";
import "./styles.css";
import trending from "../../data/trending.js";
import firstTrending from "../../images/firstTrending.jpg";
import secondTrending from "../../images/secondTrending.jpg";
import thirdTrending from "../../images/thirdTrending.jpg";
import fourthTrending from "../../images/fourthTrending.jpg";
import fifthTrending from "../../images/fifthTrending.jpg";
import sixthTrending from "../../images/sixthTrending.jpg";
import rightArrow from "../../images/rightArrow.png";

const images = {
  firstTrending,
  secondTrending,
  thirdTrending,
  fourthTrending,
  fifthTrending,
  sixthTrending,
};

const Trending = () => {
  const [page, setPage] = useState(1);
  const containerRef = useRef();

  return (
    <div className="Trending-Container">
      <div className="Container-Title">
        <h1>Trending Now</h1>

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
        {page < trending.length / 3 && (
          <button
            className="Scroll-Button Right-Arrow"
            onClick={() => {
              containerRef.current.style.transform = "translateX(-840px)";
              setPage((prev) => prev + 1);
            }}
          >
            <img src={rightArrow} />
          </button>
        )}
      </div>

      <div ref={containerRef}>
        {trending.map(({ id, image, title }) => {
          return (
            <div className="Trending" key={id}>
              <img src={images[image]} />
              <span>{title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
