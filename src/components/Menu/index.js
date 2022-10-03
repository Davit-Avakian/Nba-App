import React from 'react';
import './styles.css';
import storeImage from '@images/storeImage.svg';
import leagueInfo from '@data/leagueInfo';
import firstLeague from '@images/firstLeague.svg';
import secondLeague from '@images/secondLeague.svg';
import thirdLeague from '@images/thirdLeague.svg';
import fourthLeague from '@images/fourthLeague.svg';
import fifthLeague from '@images/fifthLeague.svg';
import sixthLeague from '@images/sixthLeague.svg';
import seventhLeague from '@images/seventhLeague.svg';
import eighthLeague from '@images/eighthLeague.svg';

const images = {
  firstLeague,
  secondLeague,
  thirdLeague,
  fourthLeague,
  fifthLeague,
  sixthLeague,
  seventhLeague,
  eighthLeague
};

const Menu = () => {
  return (
    <div className="Menu-Container">
      <div>
        <div className="Menu-Link Games-Link">
          <span>Games</span>
          <div className="Menu-PopUp Games-PopUp">
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
        <div className="Menu-Link Schedule-Link">
          <span>Schedule</span>
          <div className="Menu-PopUp Schedule-PopUp">
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
        <div className="Menu-Link Watch-Link">
          <span>Watch</span>
          <div className="Menu-PopUp Watch-PopUp">
            <ul>
              <li>Featured</li>
              <li>NBA TV</li>
            </ul>
          </div>
        </div>
        <div className="Menu-Link News-Link">
          <span>News</span>
          <div className="Menu-PopUp News-PopUp">
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
        <div className="Menu-Link Stats-Link">
          <span>Stats</span>
          <div className="Menu-PopUp Stats-PopUp">
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
        <div className="Menu-Link">
          <span>Standings</span>
          <div className="Menu-PopUp">
            <ul>
              <li>Home</li>
              <li>Tickets</li>
            </ul>
          </div>
        </div>
        <div className="Menu-Link">
          <span>Teams</span>
          <div className="Menu-PopUp">
            <ul>
              <li>Home</li>
              <li>Tickets</li>
            </ul>
          </div>
        </div>
        <div className="Menu-Link Players-Link">
          <span>Players</span>
          <div className="Menu-PopUp Players-PopUp">
            <ul>
              <li>Home</li>
              <li>Player Stats</li>
              <li>Starting Lineups</li>
              <li>Transactions</li>
            </ul>
          </div>
        </div>
        <div className="Menu-Link">
          <span>Fantasy</span>
          <div className="Menu-PopUp">
            <ul>
              <li>Home</li>
              <li>Tickets</li>
            </ul>
          </div>
        </div>
        <div className="Menu-Link Nba-Link">
          <span>NBABet</span>
          <div className="Menu-PopUp NbaBet-PopUp">
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

        <div className="Menu-Link League-Link">
          <span>League Pass</span>
          <div className="Menu-PopUp">
            <ul>
              <li>Home</li>
              <li>Tickets</li>
            </ul>
          </div>
        </div>
        <div className="Menu-Link Store-Link">
          <span>Store</span>
          <div className="Menu-PopUp Store-PopUp">
            <ul>
              <li>
                <img src={storeImage} style={{ width: '100px' }} />
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
        <div className="Menu-Link Tickets-Link">
          <span>Tickets</span>
          <div className="Menu-PopUp Tickets-PopUp">
            <ul>
              <li>NBATickets.com</li>
              <li>Official Tickets by Ticketmaster</li>
            </ul>
          </div>
        </div>

        <div className="Menu-Link Affiliates-Link">
          <span>Affiliates</span>

          <div className="Menu-PopUp Affiliates-PopUp">
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
      </div>
    </div>
  );
};

export default Menu;
