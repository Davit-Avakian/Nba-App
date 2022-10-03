import React from 'react';
import './styles.css';
import coverage from '@data/coverage';
import firstCoverage from '@images/firstCoverage.jpg';
import secondCoverage from '@images/secondCoverage.jpg';

const images = {
  firstCoverage,
  secondCoverage
};

const Coverage = () => {
  return (
    <div className="Coverage-Container">
      <div className="Container-Title">
        <h1>FULL COVERAGE</h1>
      </div>

      <div>
        {coverage.map(({ id, image, title, description, date }) => {
          return (
            <div className="Coverage" key={id}>
              <img src={images[image]} />

              <div>
                <span>{title}</span>
                <span>{description}</span>
                <span>{date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Coverage;
