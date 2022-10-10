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
            {['NBA Official', 'NBA Careers'].map((el) => {
              return (
                <li key={el}>
                  <a>{el}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <span>NBA INITIATIVES</span>
          <Arrow src={downArrow} />
          <ul>
            {['NBA Cares', 'Jr. NBA', 'NBA Foundation', 'Social Justice Coalition'].map((el) => {
              return (
                <li key={el}>
                  <a>{el}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <span>ACROSS THE LEAGUE</span>
          <Arrow src={downArrow} />
          <ul>
            {['NBA Communications', 'Lockervision', 'NBA Foundation', 'NBA Transactions'].map(
              (el) => {
                return (
                  <li key={el}>
                    <a>{el}</a>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <div>
          <span>SHOP</span>
          <Arrow src={downArrow} />
          <ul>
            {['Global Stores', 'NYC Store', 'NBA Auctions', 'NBA Photostore'].map((el) => {
              return (
                <li key={el}>
                  <a>{el}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <span>SUBSCRIPTIONS</span>
          <Arrow src={downArrow} />
          <ul>
            {['League Pass', 'Customer Support'].map((el) => {
              return (
                <li key={el}>
                  <a>{el}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </TopContainer>

      <hr></hr>

      <BottomContainer>
        <div>
          <div>© 2022 NBA Media Ventures, LLC. All rights reserved.</div>

          <ul>
            {[
              'Privacy Policy',
              'Terms of Use',
              'Accessibility and Closed Captions',
              'Do Not Sell My Personazl Information',
              'Customef Support',
              'Manage Cookies'
            ].map((el) => {
              return <li key={el}>{el}</li>;
            })}
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
