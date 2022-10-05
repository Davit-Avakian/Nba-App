import React from 'react';
import facebook from '@images/facebook.svg';
import instagram from '@images/instagram.svg';
import snapchat from '@images/snapchat.svg';
import tiktok from '@images/tiktok.svg';
import twitter from '@images/twitter.svg';
import youtube from '@images/youtube.svg';
import twitch from '@images/twitch.svg';
import { MediasContainer } from './styles';
import { ContainerTitle } from '../../App.styled';

const SocialMedias = () => {
  return (
    <MediasContainer>
      <ContainerTitle>
        <h1>FOLLOW THE NBA</h1>
      </ContainerTitle>

      <div>
        <a>
          <img src={facebook} />
        </a>
        <a>
          <img src={instagram} />
        </a>
        <a>
          <img src={snapchat} />
        </a>
        <a>
          <img src={tiktok} />
        </a>
        <a>
          <img src={twitter} />
        </a>
        <a>
          <img src={youtube} />
        </a>
        <a>
          <img src={twitch} />
        </a>
      </div>
    </MediasContainer>
  );
};

export default SocialMedias;
