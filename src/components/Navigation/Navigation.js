import React from 'react';

import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
  return (
    <div>
      <nav className='nav-container'>
        <div className="nab-wrapper">
        <div className="logo">
          
          <span className='logo-text'><samp className='dum'><FontAwesomeIcon icon={faDumbbell} /></samp><span className='l-e'>E</span>xercise <span className='l-z'>Z</span>one</span>
        </div>
        <div className="manu">
         <ul>
          <li><a className='home' href="/home">Home</a></li>
          <li><a href="/home">Blog</a></li>
          <li><a href="/home">Pactice</a></li>
          <li><a href="/home">Connect</a></li>
         </ul>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;