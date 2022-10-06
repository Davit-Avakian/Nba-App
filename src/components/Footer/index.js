import React from 'react';
import footerImage from 'assets/images/footerImage.svg';
import fbImage from 'assets/images/footerFb.png';
import instaImage from 'assets/images/footerInsta.png';
import snapImage from 'assets/images/footerSnap.png';
import tiktokImage from 'assets/images/footerTiktok.jpg';
import twitterImage from 'assets/images/footerTwitter.png';
import ytImage from 'assets/images/footerYt.jpeg';
import twitchImage from 'assets/images/footerTwitch.png';
import downArrow from 'assets/images/downArrow.png';
import { Arrow, BottomContainer, FooterContainer, TopContainer } from './styles';

/**
 *  Creates Footer component
 *  @returns {component} Footer Component shows all social media and shop links
 */
const Footer = () => {
  return (
    <FooterContainer>
      <TopContainer>
        <div>
          <span>NBA ORGANIZATION</span>
          <Arrow src={downArrow} />
          <ul>
            <li>
              <a>NBA Official</a>
            </li>
            <li>
              <a>NBA Careers</a>
            </li>
          </ul>
        </div>

        <div>
          <span>NBA INITIATIVES</span>
          <Arrow src={downArrow} />
          <ul>
            <li>
              <a>NBA Cares</a>
            </li>
            <li>
              <a>Jr. NBA</a>
            </li>
            <li>
              <a>NBA Foundation</a>
            </li>
            <li>
              <a>Social Justice Coalition</a>
            </li>
          </ul>
        </div>

        <div>
          <span>ACROSS THE LEAGUE</span>
          <Arrow src={downArrow} />
          <ul>
            <li>
              <a>NBA Communications</a>
            </li>
            <li>
              <a>Lockervision</a>
            </li>
            <li>
              <a>NBA Transactions</a>
            </li>
          </ul>
        </div>

        <div>
          <span>SHOP</span>
          <Arrow src={downArrow} />
          <ul>
            <li>
              <a>Global Stores</a>
            </li>
            <li>
              <a>NYC Store</a>
            </li>
            <li>
              <a>NBA Auctions</a>
            </li>
            <li>
              <a>NBA Photostore</a>
            </li>
          </ul>
        </div>

        <div>
          <span>SUBSCRIPTIONS</span>
          <Arrow src={downArrow} />
          <ul>
            <li>
              <a>League Pass</a>
            </li>
            <li>
              <a>Customer Support</a>
            </li>
          </ul>
        </div>
      </TopContainer>

      <hr></hr>

      <BottomContainer>
        <div>
          <div>© 2022 NBA Media Ventures, LLC. All rights reserved.</div>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Accessibility and Closed Captions</li>
            <li>Do Not Sell My Personal Information</li>
            <li>Cusomer Support</li>
            <li>Manage Cookies</li>
          </ul>

          <p>
            If you are having difficulty accessing any content on this website, please visit our{' '}
            <a>Accessibility page.</a>
          </p>

          <p>NBA.com is part of Warner Media, LLCs Turner Sports Entertainment Digital Network</p>

          <img src={footerImage} alt="" />
        </div>

        <div>
          <img src={fbImage} />
          <img src={instaImage} />
          <img src={snapImage} />
          <img src={tiktokImage} />
          <img src={twitterImage} />
          <img src={ytImage} />
          <img src={twitchImage} />
        </div>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
