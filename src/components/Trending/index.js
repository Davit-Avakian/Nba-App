import React, { useRef, useState } from 'react';
import trending from 'data/trending.js';
import rightArrow from 'assets/images/rightArrow.png';
import { ImageContainer, LeftArrow, RightArrow, TrendingContainer, TrendingItem } from './styles';
import { ContainerTitle } from '../../App.styles';

/**
 *  Creates compnent for tending news
 *  @param {string} title title for the container
 *  @param {array} data trending news data for the component
 *  @param {string} marginTop value for margin top
 *  @returns {component} Trending component for trending news topics of the day
 */
const Trending = ({ title, data, marginTop }) => {
  // keeps container's scrolled width in px
  const [scrolledWidth, setScrolledWidth] = useState(0);

  // keeps container's full width
  const [containerWidth] = useState(trending.length * 240);

  const containerRef = useRef();

  return (
    <TrendingContainer marginTop={marginTop}>
      <ContainerTitle>
        <h1>{title}</h1>

        {scrolledWidth > 0 && (
          <LeftArrow
            data-testid="trendingLeftArrow"
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
            data-testid="trendingRightArrow"
            className="Scroll-Button Right-Arrow"
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

      <div ref={containerRef} data-testid="trendingContainer">
        {data.map(({ id, image, title }) => {
          return (
            <TrendingItem className="Trending" key={id}>
              <ImageContainer>
                <img src={image} />
              </ImageContainer>
              <span>{title}</span>
            </TrendingItem>
          );
        })}
      </div>
    </TrendingContainer>
  );
};

export default Trending;
