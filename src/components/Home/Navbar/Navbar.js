import React from 'react';

import SideBarButton from '../SideBar/SideBarButton';
import './Navbar.css';

const navbar = (props) =>
  (
    <header className="header">
      <nav className={`navbar ${props.background}`}>
        <div className="toggle-navbar-btn">
          <SideBarButton click={ props.sidebarClickHandler }/>
        </div>
        <div className="logo">Aducate</div>
          <div className="navbar-space" />
          <ul className="navbar-items">
            <li><a href="#about">About</a></li>
          </ul>
      </nav>
    </header>
  );

export default navbar;
