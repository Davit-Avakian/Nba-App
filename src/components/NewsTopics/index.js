import React, { useEffect, useState } from 'react';
import news from '@data/news';
import './styles.css';
import firstTopic from '@images/firstTopic.png';
import secondTopic from '@images/secondTopic.png';
import thirdTopic from '@images/thirdTopic.png';
import fourthTopic from '@images/fourthTopic.png';
import fifthTopic from '@images/fifthTopic.png';

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
    <div className="Topics-Container">
      <div className="Active-Topic">
        <div>
          <div className="Topic-Desc">
            <span className="Active-Title">{activeTopic.title}</span>
            <span className="Active-Desc">{activeTopic.description}</span>

            <a href="/">Read</a>

            <div className="Related-Content">
              <h4>RELATED CONTENT</h4>
              {activeTopic.relatedContent.map((content, index) => {
                return (
                  <span key={index} className="Active-Content">
                    {content}
                  </span>
                );
              })}
            </div>
          </div>

          <div
            className="Active-Image"
            style={{
              backgroundImage: `url(${images[activeTopic.image]})`
            }}></div>
        </div>
      </div>

      <div className="Next-Topics">
        {news.map(({ id, title, type }, index) => {
          return (
            <div
              style={{ opacity: `${activeTopic.id === id ? 1 : 0.6}` }}
              className="Topic"
              key={id}
              onClick={() => {
                clearTimeout(timerId);
                setActiveTopic(news[index]);
                setNewsChanged(true);
              }}>
              <div className="Progress-Bar"></div>
              <p>{type}</p>

              <span>{title}</span>
            </div>
          );
        })}
      </div>
      <p className="Next-Topic-Mobile">Next: {news[activeTopic.id]?.title || news[0].title}</p>
    </div>
  );
};

export default NewsTopics;
