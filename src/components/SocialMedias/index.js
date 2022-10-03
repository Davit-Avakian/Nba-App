import React from 'react';
import './styles.css';
import facebook from '@images/facebook.svg';
import instagram from '@images/instagram.svg';
import snapchat from '@images/snapchat.svg';
import tiktok from '@images/tiktok.svg';
import twitter from '@images/twitter.svg';
import youtube from '@images/youtube.svg';
import twitch from '@images/twitch.svg';

const SocialMedias = () => {
  return (
    <div className="SocialMedias-Container">
      <div className="Container-Title">
        <h1>FOLLOW THE NBA</h1>
      </div>

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
    </div>
  );
};

export default SocialMedias;
