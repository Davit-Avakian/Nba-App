import React from 'react';
import coverage from 'data/coverage';
import firstCoverage from 'assets/images/firstCoverage.jpg';
import secondCoverage from 'assets/images/secondCoverage.jpg';
import { CoverageContainer, CoverageItem } from './styles';
import { ContainerTitle } from '../../App.styled';
import { NewsItem } from 'components/SharedComponents';

//keeps imported images for this component
const images = {
  firstCoverage,
  secondCoverage
};

/**
 *  Creates component for full coverage section
 *  @returns {component} Coverage component
 */
const Coverage = () => {
  return (
    <CoverageContainer>
      <ContainerTitle>
        <h1>FULL COVERAGE</h1>
      </ContainerTitle>

      <div>
        {coverage.map(({ id, image, title, description, date }) => {
          return (
            <CoverageItem key={id}>
              <img src={images[image]} />

              <NewsItem>
                <span>{title}</span>
                <span>{description}</span>
                <span>{date}</span>
              </NewsItem>
            </CoverageItem>
          );
        })}
      </div>
    </CoverageContainer>
  );
};

export default Coverage;
