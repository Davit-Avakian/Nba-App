import React from 'react';
import facebook from 'assets/images/facebook.svg';
import instagram from 'assets/images/instagram.svg';
import snapchat from 'assets/images/snapchat.svg';
import tiktok from 'assets/images/tiktok.svg';
import twitter from 'assets/images/twitter.svg';
import youtube from 'assets/images/youtube.svg';
import twitch from 'assets/images/twitch.svg';
import { MediasContainer } from './styles';
import { ContainerTitle } from '../../App.styled';

/**
 *  Creates component for social medias
 *  @returns {component} SocialMedias component shows social media icons with links
 */
const SocialMedias = () => {
  return (
    <MediasContainer>
      <ContainerTitle>
        <h1>FOLLOW THE NBA</h1>
      </ContainerTitle>

      <div>
        {[facebook, instagram, snapchat, tiktok, twitter, youtube, twitch].map((el) => {
          return (
            <a key={el}>
              <img src={el} />
            </a>
          );
        })}
      </div>
    </MediasContainer>
  );
};

export default SocialMedias;
