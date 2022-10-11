import React from 'react';
import { FeedContainer, ListItem } from './styles';
import { ContainerTitle } from '../../App.styled';
import { NewsItem } from 'components/SharedComponents';

/**
 *  Creates component for full feed sections
 * @param {string} title title for the container
 * @param {array} data feed data for the component
 * @param {boolean} flexRow boolean for flex-direction
 *  @returns {component} Feed component
 */
const Feed = ({ title, data, flexRow }) => {
  return (
    <FeedContainer>
      <ContainerTitle>
        <h1>{title}</h1>
      </ContainerTitle>

      <div>
        {data.map(({ id, image, title, description, date }) => {
          return (
            <ListItem key={id} flexRow={flexRow}>
              <img src={image} />

              <NewsItem>
                <span>{title}</span>
                <span>{description}</span>
                <span>{date}</span>
              </NewsItem>
            </ListItem>
          );
        })}
      </div>
    </FeedContainer>
  );
};

export default Feed;
