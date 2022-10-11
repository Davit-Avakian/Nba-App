import React, { useEffect, useState } from 'react';
import news from 'data/news';
import {
  ActiveImage,
  ActiveTopic,
  MobileTopic,
  NextTopics,
  RelatedContent,
  TopicDesc,
  TopicsContainer
} from './styles';

/**
 *  Creates component for main news
 *  @returns {component} NewsTopics component shows 5 main news of the day
 */
const NewsTopics = () => {
  // keeps information about active topic
  const [activeTopic, setActiveTopic] = useState(news[0]);

  // keeps boolean value for changing animation
  const [newsChanged, setNewsChanged] = useState(false);

  // keeps timer id for clearing later
  const [timerId, setTimerId] = useState();

  useEffect(() => {
    const { id } = activeTopic;

    // checks if news has been changed by the user
    if (newsChanged) return;

    const timerId = setTimeout(() => {
      setActiveTopic(id < news.length ? news[id] : news[0]);
    }, 4000);

    // saves created timer id in state
    setTimerId(timerId);
  }, [activeTopic.id]);

  return (
    <TopicsContainer>
      <ActiveTopic>
        <div>
          <TopicDesc>
            <span>{activeTopic.title}</span>
            <span>{activeTopic.description}</span>

            <a href="/">Read</a>

            <RelatedContent>
              <h4>RELATED CONTENT</h4>
              {activeTopic.relatedContent.map((content, index) => {
                return <span key={index}>{content}</span>;
              })}
            </RelatedContent>
          </TopicDesc>

          <ActiveImage
            style={{
              backgroundImage: `url(${activeTopic.image})`
            }}></ActiveImage>
        </div>
      </ActiveTopic>

      <NextTopics>
        {news.map(({ id, title, type }, index) => {
          return (
            <div
              style={{ opacity: `${activeTopic.id === id ? 1 : 0.6}` }}
              key={id}
              onClick={() => {
                clearTimeout(timerId);
                setActiveTopic(news[index]);
                setNewsChanged(true);
              }}>
              <div></div>
              <p>{type}</p>

              <span style={{ fontSize: '1rem' }}>{title}</span>
            </div>
          );
        })}
      </NextTopics>
      <MobileTopic>Next: {news[activeTopic.id]?.title || news[0].title}</MobileTopic>
    </TopicsContainer>
  );
};

export default NewsTopics;
