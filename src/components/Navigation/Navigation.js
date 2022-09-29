import React from 'react';
import logo from '../../images/logo.png';
import './Navigation.css';


const Navigation = () => {
  return (
    <div>
      <nav className='nav-container'>
        <div className="nab-wrapper">
        <div className="logo">
          <img src={logo} alt="" />
          {/* <span className='side-name'>EXERICISE ZONE</span> */}
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