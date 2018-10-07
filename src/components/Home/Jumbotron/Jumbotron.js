import React from 'react';
import './Jumbotron.css'
import { Link } from 'react-router-dom';

const jumbotron= (props) => (
  <section className="jumbotron center-align">
    <h3>Spend More Time Teaching</h3>
      <Link to={{pathname: '/quiz'}}>
        <button className="btn waves-effect waves-light">
          TRY IT OUT
          <i className="material-icons right"></i>
        </button>
      </Link>
    <h5 className="subtitle">not on paperwork</h5>
  </section>
);

export default jumbotron;
