import { useState } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HeadLines from 'components/HeadLines';
import LeagueInfo from 'components/LeagueInfo';
import Menu from 'components/Menu';
import NewsTopics from 'components/NewsTopics';
import QuickLinks from 'components/QuickLinks';
import SocialMedias from 'components/SocialMedias';
import Standings from 'components/Standings';
import SubmitEmail from 'components/SubmitEmail';
import TeamsInDays from 'components/TeamsInDays';
import Trending from 'components/Trending';
import {
  GlobalStyles,
  AppContainer,
  MainContent,
  MainWrapper,
  SecondaryWrapper,
  SideBar
} from './App.styled';
import { ThemeProvider } from 'styled-components';
import Feed from 'components/Feed';
import coverage from 'data/coverage';
import aroundNba from 'data/aroundNba';

const theme = {
  borderBottom: '1px solid #ebe9e7',
  secondaryTextColor: '#ebe9e7',
  linkColor: '#1070d8',
  containerBgColor: '#ffff'
};

/**
 *  Creates App component containing all components of the page
 *  @returns {component} App component including the components of the page
 */
function App() {
  // keeps boolean value for showing menu
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppContainer>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header setShowMenu={setShowMenu} showMenu={showMenu} />
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
                <Trending />
                <Feed title={'FULL COVERAGE'} data={coverage} flexRow />
                <TeamsInDays />
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

            <Footer />
          </>
        )}
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
