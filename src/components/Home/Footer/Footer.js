import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const footer = (props) => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Aducate</h5>
          <p className="footer-text">Adaptive Education Platform</p>
          <p>"No Matter what people tell you Words and Ideas can change the world."</p>
          <p>-- Robin Williams</p>
          <p>aducate01@gmail.com</p>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2018 Copyright Aducate
      </div>
    </div>
  </footer>
);

export default footer;
