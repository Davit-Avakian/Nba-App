import React from 'react';
import share from 'assets/images/share.jpg';
import { LinksContainer } from './styles';
import { ContainerTitle } from '../../App.styled';

const QuickLinks = () => {
  return (
    <LinksContainer>
      <ContainerTitle>
        <h1>QUICK LINKS</h1>
      </ContainerTitle>

      <ul>
        <li>
          <a>
            Fantasy
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            NBA History
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            NBA Official
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            Key Dates
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            LockerVision
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            NBA Awards
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            2022 NBA Draft
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            2022 Summer League
            <img src={share} />
          </a>
        </li>

        <li>
          <a>
            2022 NBA Playoffs
            <img src={share} />
          </a>
        </li>
      </ul>
    </LinksContainer>
  );
};

export default QuickLinks;
