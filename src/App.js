import { useState } from "react";
import "./App.css";
import AroundNba from "./components/AroundNba";
import Coverage from "./components/Coverage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeadLines from "./components/HeadLines";
import LeagueInfo from "./components/LeagueInfo";
import Menu from "./components/Menu";
import NewsTopics from "./components/NewsTopics";
import QuickLinks from "./components/QuickLinks";
import SocialMedias from "./components/SocialMedias";
import Standings from "./components/Standings";
import SubmitEmail from "./components/SubmitEmail";
import TeamsInDays from "./components/TeamsInDays";
import Trending from "./components/Trending";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <Header setShowMenu={setShowMenu} showMenu={showMenu}/>
      {showMenu ? (
        <Menu />
      ) : (
        <>
          <div className="Main-Wrapper">
            <NewsTopics />
            <HeadLines />
          </div>

          <div className="Second-Wrapper">
            <div className="Main-Content">
              <Trending />
              <Coverage />
              <TeamsInDays />
              <AroundNba />
            </div>

            <div className="Side-Bar">
              <LeagueInfo />
              <SocialMedias />
              <QuickLinks />
              <Standings />
              <SubmitEmail />
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
