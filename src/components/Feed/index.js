import React from 'react';
import { FeedContainer, ListItem, NewsItem } from './styles';
import { ContainerTitle } from '../../App.styled';

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
        <h1 data-testid="feedTitle">{title}</h1>
      </ContainerTitle>

      <div>
        {data.map(({ id, image, title, description, date }) => {
          return (
            <ListItem key={id} flexRow={flexRow}>
              <img src={image} />

              <NewsItem>
                <span>{title}</span>
                <span data-testid={`feedItem${id}`}>{description}</span>
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
