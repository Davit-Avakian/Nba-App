import React, { useRef, useState } from 'react';
import trending from 'data/trending.js';
import rightArrow from 'assets/images/rightArrow.png';
import { ImageContainer, LeftArrow, RightArrow, TrendingContainer, TrendingItem } from './styles';
import { ContainerTitle } from '../../App.styled';

/**
 *  Creates compnent for tending news
 *  @returns {component} Trending component for trending news topics of the day
 */
const Trending = () => {
  // keeps container's scrolled width in px
  const [scrolledWidth, setScrolledWidth] = useState(0);

  // keeps container's full width
  const [containerWidth] = useState(trending.length * 240);

  const containerRef = useRef();

  return (
    <TrendingContainer>
      <ContainerTitle>
        <h1>Trending Now</h1>

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

      <div ref={containerRef}>
        {trending.map(({ id, image, title }) => {
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
