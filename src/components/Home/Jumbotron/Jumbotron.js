import React from 'react';
import './Jumbotron.css'
import { Link } from 'react-router-dom';

const jumbotron= (props) => (
  <section className="jumbotron center-align">
    <h3>Personalized learning for every kid in your class</h3>
      <Link to={{pathname: '/dashboard'}}>
        <button className="btn waves-effect waves-light">
          START YOUR ADAPTIVE JOURNEY
          <i className="material-icons right"></i>
        </button>
      </Link>
  </section>
);

export default jumbotron;
