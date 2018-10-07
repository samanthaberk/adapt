import React from 'react';

import SideBarButton from '../SideBar/SideBarButton';
import './Navbar.css';

const navbar = (props) =>
  (
    <header className="header">
      <nav className={`navbar ${props.background}`}>
        <div className="logo">Adapt</div>
          <div className="navbar-space" />
            <div className="toggle-navbar-btn">
              <SideBarButton click={ props.sidebarClickHandler }/>
            </div>
          <ul className="navbar-items">
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
          </ul>
      </nav>
    </header>
  );

export default navbar;
