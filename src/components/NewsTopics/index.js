import React, { useEffect, useState } from 'react';
import news from '@data/news';
import firstTopic from '@images/firstTopic.png';
import secondTopic from '@images/secondTopic.png';
import thirdTopic from '@images/thirdTopic.png';
import fourthTopic from '@images/fourthTopic.png';
import fifthTopic from '@images/fifthTopic.png';
import {
  ActiveImage,
  ActiveTopic,
  MobileTopic,
  NextTopics,
  RelatedContent,
  TopicDesc,
  TopicsContainer
} from './styles';

const images = {
  firstTopic,
  secondTopic,
  thirdTopic,
  fourthTopic,
  fifthTopic
};

const NewsTopics = () => {
  const [activeTopic, setActiveTopic] = useState(news[0]);
  const [newsChanged, setNewsChanged] = useState(false);
  const [timerId, setTimerId] = useState();

  useEffect(() => {
    const { id } = activeTopic;

    if (newsChanged) return;

    const timerId = setTimeout(() => {
      setActiveTopic(id < news.length ? news[id] : news[0]);
    }, 4000);

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
              backgroundImage: `url(${images[activeTopic.image]})`
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

              <span>{title}</span>
            </div>
          );
        })}
      </NextTopics>
      <MobileTopic>Next: {news[activeTopic.id]?.title || news[0].title}</MobileTopic>
    </TopicsContainer>
  );
};

export default NewsTopics;
