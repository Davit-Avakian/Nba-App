import React from 'react';
import share from 'assets/images/share.jpg';
import { LinksContainer } from './styles';
import { ContainerTitle } from '../../App.styles';

const Links = [
  'Fantasy',
  'NBA History',
  'NBA Official',
  'Key Dates',
  'LockerVision',
  'NBA Awards',
  '2022 NBA Draft',
  '2022 Summer League',
  '2022 NBA Playoffs'
];

/**
 *  Creates Quick Links component
 *  @returns {component} QuickLinks component shows all the quick links of the app
 */
const QuickLinks = () => {
  return (
    <LinksContainer>
      <ContainerTitle>
        <h1>QUICK LINKS</h1>
      </ContainerTitle>

      <ul data-testid={`quickLinks`}>
        {Links.map((el) => {
          return (
            <li key={el}>
              <a>
                {el}
                <img src={share} />
              </a>
            </li>
          );
        })}
      </ul>
    </LinksContainer>
  );
};

export default QuickLinks;
