import { useState } from 'react';
import AroundNba from 'components/AroundNba';
import Coverage from 'components/Coverage';
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
  SecondWrapper,
  SideBar
} from './App.styled';
import { ThemeProvider } from 'styled-components';

const theme = {
  borderBottom: '1px solid #ebe9e7',
  secondaryTextColor: '#ebe9e7',
  linkColor: '#1070d8'
};

function App() {
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

            <SecondWrapper>
              <MainContent>
                <Trending />
                <Coverage />
                <TeamsInDays />
                <AroundNba />
              </MainContent>

              <SideBar>
                <LeagueInfo />
                <SocialMedias />
                <QuickLinks />
                <Standings />
                <SubmitEmail />
              </SideBar>
            </SecondWrapper>

            <Footer />
          </>
        )}
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
