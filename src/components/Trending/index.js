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
  const [scrolledWidth, setScrolledWidth] = useState(0);
  const [containerWidth] = useState(trending.length * 240);
  const containerRef = useRef();

  return (
    <div className="Trending-Container">
      <div className="Container-Title">
        <h1>Trending Now</h1>

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
        {trending.map(({ id, image, title }) => {
          return (
            <div className="Trending" key={id}>
              <div>
                <img src={images[image]} />
              </div>
              <span>{title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
