import React from 'react';
import headlines from 'data/headlines';
import { HeadLinesContainer } from './styles';

/**
 *  Creates component for headlines section
 *  @returns {component} HeadLines Component shows main headlines of the day
 */
const HeadLines = () => {
  return (
    <HeadLinesContainer>
      <div>
        <span>HEADLINES</span>
        <a>See more</a>
      </div>

      <div>
        <ul>
          {headlines.map((hl, index) => {
            return (
              <li key={index}>
                <a>{hl}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </HeadLinesContainer>
  );
};

export default HeadLines;
