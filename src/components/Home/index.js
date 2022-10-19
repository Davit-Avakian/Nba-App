import React from 'react';
import Feed from 'components/Feed';
import coverage from 'data/coverage';
import aroundNba from 'data/aroundNba';
import trending from 'data/trending';
import teamsInDays from 'data/teamsInDays';
import { MainContent, MainWrapper, SecondaryWrapper, SideBar } from '../../App.styles';
import HeadLines from 'components/HeadLines';
import LeagueInfo from 'components/LeagueInfo';
import Menu from 'components/Menu';
import NewsTopics from 'components/NewsTopics';
import QuickLinks from 'components/QuickLinks';
import SocialMedias from 'components/SocialMedias';
import Standings from 'components/Standings';
import SubmitEmail from 'components/SubmitEmail';
import Trending from 'components/Trending';

const Home = ({ showMenu }) => {
  return (
    <div>
      {showMenu ? (
        <Menu />
      ) : (
        <>
          <MainWrapper>
            <NewsTopics />
            <HeadLines />
          </MainWrapper>

          <SecondaryWrapper>
            <MainContent>
              <Trending title={'TRENDING NOW'} data={trending} marginTop={'30rem'} />
              <Feed title={'FULL COVERAGE'} data={coverage} flexRow />
              <Trending title={'30 TEAMS IN 30 DAYS'} data={teamsInDays} />
              <Feed title={'AROUND THE NBA'} data={aroundNba} />
            </MainContent>

            <SideBar>
              <LeagueInfo />
              <SocialMedias />
              <QuickLinks />
              <Standings />
              <SubmitEmail />
            </SideBar>
          </SecondaryWrapper>
        </>
      )}
    </div>
  );
};

export default Home;
