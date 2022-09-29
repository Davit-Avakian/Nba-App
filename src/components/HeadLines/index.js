import React from 'react';
import './styles.css';
import headlines from '../../data/headlines';

const HeadLines = () => {
  return (
    <div className='HeadLines-Container'>
        <div>
          <span>HEADLINES</span>
          <a>See more</a>
        </div>

        <div>
          <ul>
            {
              headlines.map((hl, index) => {
                return (
                  <li key={index}>
                    <a>{hl}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
    </div>
  )
}

export default HeadLines