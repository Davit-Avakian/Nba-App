import React from 'react';
import aroundNba from '@data/aroundNba';
import firstAround from '@images/firstAround.jpg';
import secondAround from '@images/secondAround.jpg';
import thirdAround from '@images/thirdAround.jpg';
import fourthAround from '@images/fourthAround.jpg';
import fifthAround from '@images/fifthAround.jpg';
import sixthAround from '@images/sixthAround.jpg';
import seventhAround from '@images/seventhAround.jpg';
import eighthAround from '@images/eighthAround.jpg';
import ninthAround from '@images/ninthAround.jpg';
import tenthAround from '@images/tenthAround.jpg';
import eleventhAround from '@images/eleventhAround.jpg';
import { AroundContainer } from './styles';
import { ContainerTitle } from '../../App.styled';

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
  eleventhAround
};

const AroundNba = () => {
  return (
    <AroundContainer>
      <ContainerTitle>
        <h1>AROUND THE NBA</h1>
      </ContainerTitle>

      <ul>
        {aroundNba.map(({ id, image, title, description, date }) => {
          return (
            <li key={id}>
              <a href="">
                <img src={images[image]} />
              </a>
              <div>
                <span className="title">{title}</span>
                <span className="description">{description}</span>
                <span className="date">{date}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </AroundContainer>
  );
};

export default AroundNba;
