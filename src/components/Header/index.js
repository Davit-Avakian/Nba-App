import React from "react";
import "./styles.css";
import logoImg from "../../images/headerLogo.svg";
import moreImg from "../../images/headerMore.png";
import closeImg from "../../images/closeImage.png";
import menuImg from "../../images/menuImage.png";
import storeImage from "../../images/storeImage.svg";
import leagueInfo from "../../data/leagueInfo";
import firstLeague from "../../images/firstLeague.svg";
import secondLeague from "../../images/secondLeague.svg";
import thirdLeague from "../../images/thirdLeague.svg";
import fourthLeague from "../../images/fourthLeague.svg";
import fifthLeague from "../../images/fifthLeague.svg";
import sixthLeague from "../../images/sixthLeague.svg";
import seventhLeague from "../../images/seventhLeague.svg";
import eighthLeague from "../../images/eighthLeague.svg";

const images = {
  firstLeague,
  secondLeague,
  thirdLeague,
  fourthLeague,
  fifthLeague,
  sixthLeague,
  seventhLeague,
  eighthLeague,
};

const Header = ({ setShowMenu, showMenu }) => {
  return (
    <div className="Header-Container">
      <div className="Header-Main-Container">
        <img
          src={showMenu ? closeImg : menuImg}
          className="Menu-Icon"
          alt=""
          onClick={() => setShowMenu((prev) => !prev)}
        />
        <img src={logoImg} className="Header-Logo" alt="" />
        {!showMenu && (
          <div>
            <div className="Header-Link Games-Link">
              <span>Games</span>
              <div className="Header-PopUp Games-PopUp">
                <ul>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Tickets</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Header-Link Schedule-Link">
              <span>Schedule</span>
              <div className="Header-PopUp Schedule-PopUp">
                <ul>
                  <li>
                    <a>2022-23 Season Schedule</a>
                  </li>
                  <li>
                    <a>League Pass Schedule</a>
                  </li>
                  <li>
                    <a>Key Dates</a>
                  </li>
                  <li>
                    <a>Tickets</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Header-Link Watch-Link">
              <span>Watch</span>
              <div className="Header-PopUp Watch-PopUp">
                <ul>
                  <li>Featured</li>
                  <li>NBA TV</li>
                </ul>
              </div>
            </div>
            <div className="Header-Link News-Link">
              <span>News</span>
              <div className="Header-PopUp News-PopUp">
                <ul>
                  <li>Home</li>
                  <li>Top Stories</li>
                  <li>30 Teams in 30 Days</li>
                  <li>New Uniforms</li>
                  <li>Hall of Fame</li>
                  <li>Free Agency</li>
                  <li>Draft</li>
                  <li>Features</li>
                  <li>Writer Archive</li>
                  <li>More</li>
                </ul>
              </div>
            </div>
            <div className="Header-Link Stats-Link">
              <span>Stats</span>
              <div className="Header-PopUp Stats-PopUp">
                <ul>
                  <li>Home</li>
                  <li>Players</li>
                  <li>Teams</li>
                  <li>Leaders</li>
                  <li>Stats 101</li>
                  <li>Cume Stats</li>
                  <li>Lineups Tool</li>
                  <li>Media Central Game Stats</li>
                  <li>Draft</li>
                  <li>Quick Links</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="Header-Link">
              <span>Standings</span>
              <div className="Header-PopUp">
                <ul>
                  <li>Home</li>
                  <li>Tickets</li>
                </ul>
              </div>
            </div>
            <div className="Header-Link">
              <span>Teams</span>
              <div className="Header-PopUp">
                <ul>
                  <li>Home</li>
                  <li>Tickets</li>
                </ul>
              </div>
            </div>
            <div className="Header-Link Players-Link">
              <span>Players</span>
              <div className="Header-PopUp Players-PopUp">
                <ul>
                  <li>Home</li>
                  <li>Player Stats</li>
                  <li>Starting Lineups</li>
                  <li>Transactions</li>
                </ul>
              </div>
            </div>
            <div className="Header-Link">
              <span>Fantasy</span>
              <div className="Header-PopUp">
                <ul>
                  <li>Home</li>
                  <li>Tickets</li>
                </ul>
              </div>
            </div>
            <div className="Header-Link NbaBet-Link">
              <span>NBABet</span>
              <div className="Header-PopUp NbaBet-PopUp">
                <ul>
                  <li>NBABet Home</li>
                  <li>Authorized Gaming Operators</li>
                  <li>Yahoo Fantasy Sports</li>
                  <li>FanDuel DFS</li>
                  <li>DraftKings DFS</li>
                  <li>Starting Lineups</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="Header-SignIn-Container">
        <div>
          {!showMenu && (
            <div className="Header-Link League-Link">
              <span>League Pass</span>
              <div className="Header-PopUp">
                <ul>
                  <li>Home</li>
                  <li>Tickets</li>
                </ul>
              </div>
            </div>
          )}

          {!showMenu && (
            <div className="Header-Link Store-Link">
              <span>Store</span>
              <div className="Header-PopUp Store-PopUp">
                <ul>
                  <li>
                    <img src={storeImage} />
                  </li>
                  <li>Jerseys</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>Custom Shop</li>
                  <li>Hardwood Classic</li>
                  <li>Hats</li>
                  <li>Footwear</li>
                  <li>Auctions</li>
                  <li>NBA Game Worn</li>
                  <li>NYC Store</li>
                  <li>NBA Photo Store</li>
                </ul>
              </div>
            </div>
          )}
          {!showMenu && (
            <div className="Header-Link Tickets-Link">
              <span>Tickets</span>
              <div className="Header-PopUp Tickets-PopUp">
                <ul>
                  <li>NBATickets.com</li>
                  <li>Official Tickets by Ticketmaster</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        {!showMenu && (
          <div className="Header-Link Image-Link">
            <img src={moreImg} alt="" />

            <div className="Header-PopUp Image-PopUp">
              <ul>
                {leagueInfo.map(({ id, title, image }) => {
                  return (
                    <li key={id}>
                      <img src={images[image]} />
                      <span>{title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
        <div className="Header-Link SignIn-Link">
          <span>Sign in</span>
          <div className="Header-PopUp SignIn-PopUp">
            <a>
              <b>Sign in with NBA ID</b>
            </a>
            <div>
              <span>Hide Scores</span>
              <span></span>
            </div>
            <a>Help</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
