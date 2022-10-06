import React from 'react';
import aroundNba from 'data/aroundNba';
import firstAround from 'assets/images/firstAround.jpg';
import secondAround from 'assets/images/secondAround.jpg';
import thirdAround from 'assets/images/thirdAround.jpg';
import fourthAround from 'assets/images/fourthAround.jpg';
import fifthAround from 'assets/images/fifthAround.jpg';
import sixthAround from 'assets/images/sixthAround.jpg';
import seventhAround from 'assets/images/seventhAround.jpg';
import eighthAround from 'assets/images/eighthAround.jpg';
import ninthAround from 'assets/images/ninthAround.jpg';
import tenthAround from 'assets/images/tenthAround.jpg';
import eleventhAround from 'assets/images/eleventhAround.jpg';
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
