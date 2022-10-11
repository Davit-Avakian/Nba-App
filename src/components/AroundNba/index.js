import React from 'react';
import aroundNba from 'data/aroundNba';
import { AroundContainer } from './styles';
import { ContainerTitle } from '../../App.styled';
import { NewsItem } from 'components/SharedComponents';

/**
 *  Creates component for Around Nba section with styles
 *  @returns {component} AroundNba component
 */
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
                <img src={image} />
              </a>
              <NewsItem>
                <span>{title}</span>
                <span>{description}</span>
                <span>{date}</span>
              </NewsItem>
            </li>
          );
        })}
      </ul>
    </AroundContainer>
  );
};

export default AroundNba;
