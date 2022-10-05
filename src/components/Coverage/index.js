import React from 'react';
import coverage from '@data/coverage';
import firstCoverage from '@images/firstCoverage.jpg';
import secondCoverage from '@images/secondCoverage.jpg';
import { CoverageContainer, CoverageItem } from './styles';
import { ContainerTitle } from '../../App.styled';

const images = {
  firstCoverage,
  secondCoverage
};

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

              <div>
                <span>{title}</span>
                <span>{description}</span>
                <span>{date}</span>
              </div>
            </CoverageItem>
          );
        })}
      </div>
    </CoverageContainer>
  );
};

export default Coverage;
