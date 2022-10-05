import styled from 'styled-components';

export const ActiveImage = styled.div`
  position: absolute;
  top: -4%;
  right: -95%;
  height: 115%;
  width: 140%;
  background-size: cover;
`;

export const ActiveTopic = styled.div`
  display: flex;
  width: 50%;
  height: 70%;
  padding: 20px;

  & > div {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 300px;
    width: 100%;
    height: 100%;
  }

  span {
    display: block;
  }
`;

export const TopicDesc = styled.div`
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0 0 30px;
  z-index: 1;

  a {
    border: 1px solid #ffff;
    border-width: 2px;
    border-radius: 9999px;
    text-transform: uppercase;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25;
    padding: 0.75rem 2rem;
    display: inline-block;
    color: #ffff;
    text-decoration: none;
    margin-bottom: 20px;
  }

  span:first-child {
    text-transform: uppercase;
    font-family: titleFont;
    font-weight: 400;
    font-size: 2.25rem;
    line-height: 0.8;
    margin-right: 0.5rem;
    cursor: pointer;
    color: #ffff;
    margin-bottom: 20px;
  }

  & span:nth-child(2) {
    color: #ffff;
    margin-bottom: 30px;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    width: 80%;
  }
`;

export const RelatedContent = styled.div`
  color: #ffff;

  h4 {
    font-family: Roboto, Arial, sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  span {
    font-family: Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25;
    margin-bottom: 0.5rem !important;
  }

  span:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const NextTopics = styled.div`
  display: flex;
  gap: 50px;
  color: #ffff;
  padding: 0 15px 15px 15px;
  z-index: 1;
  overflow: hidden;

  p {
    font-family: Roboto, Arial, sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1;
    cursor: pointer;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-transform: uppercase;
    font-family: titleFont;
    font-weight: 300;
    font-size: 1rem !important;
    line-height: normal;
  }

  & > div {
    width: 100%;

    span {
      cursor: pointer;
      text-transform: uppercase;
      font-family: titleFont;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 0.8;
      margin-right: 0.5rem;
      color: #fff;
    }

    div {
      cursor: pointer;
      height: 0.25rem;
      width: 100%;
      border-radius: 0.125rem;
      transition-timing-function: linear;
      background-color: #ffff;
      margin-bottom: 20px;
    }
  }
`;

export const MobileTopic = styled.p`
  display: none !important;
`;

export const TopicsContainer = styled.div`
  width: 75%;
  background-image: linear-gradient(90deg, #000 30%, transparent 52%),
    linear-gradient(0deg, #000 20%, transparent 35%);
  height: 720px;
  min-height: fit-content !important;
  max-height: fit-content !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1050px) {
    width: 100%;
  }

  @media (max-width: 780px) {
    background-color: black;

    ${ActiveTopic} span:first-child {
      width: 200%;
      font-size: 1.7rem;
    }

    ${ActiveImage} {
      width: 200%;
      height: 80%;
      left: -5.6%;
    }

    ${TopicDesc} {
      margin-top: 22rem;
      width: 100vw;

      & span:nth-child(2) {
        display: none !important;
      }
    }

    ${RelatedContent} {
      display: none;
    }

    ${NextTopics} {
      position: static;

      span,
      p {
        display: none;
      }
    }

    & > div {
      div {
        margin-top: 2rem;
      }
    }

    ${MobileTopic} {
      display: block !important;
      color: #ffff;
      margin-bottom: 2rem;
      margin-left: 2rem;
    }
  }

  @media (max-width: 700px) {
    ${ActiveImage} {
      left: -6.5%;
    }
  }

  @media (max-width: 590px) {
    ${ActiveImage} {
      left: -7.5%;
    }
  }

  @media (max-width: 470px) {
    ${ActiveImage} {
      left: -9.5%;
    }
  }
`;
