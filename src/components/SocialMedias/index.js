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
