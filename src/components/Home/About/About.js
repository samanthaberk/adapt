import React from 'react';
import './About.css'

const about= (props) => (
  <section id="about">
    <div className="about-title center-align"><h3>How it Works</h3></div>
    <div className="about-content-title-underline"></div>
    <div className="row">
      <div className="about-content-left col l6 valign-wrapper">
        <div className="about-container">
          <div className="about-content">
            <h4 className="about-title">
              <i className="material-icons number">filter_1</i>
             Data-Driven
            </h4>
            <p className="about-description">
              Adapt is a machine-learning system built to assist teachers
            </p>
          </div>
        </div>
      </div>
      <div className="col offset-l1 15 no-right-padding valign">
      </div>
    </div>

    <div className="center-align">
      <i className="material-icons circle-icon">panorama_fish_eye</i>
    </div>

    <div className="row">
      <div className="about-content col 15 valign">
      </div>
      <div className="col l6 offset-l1 valign-wrapper">
        <div className="about-container">
          <div className="about-content-right">
            <h4 className="about-title">
              <i className="material-icons number">filter_2</i>
             Meets Individual Student Needs
            </h4>
            <p className="about-description">

            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="center-align">
      <i className="material-icons circle-icon">panorama_fish_eye</i>
    </div>

    <div className="row">
      <div className="about-content-left col l6 valign-wrapper">
        <div className="about-container">
          <div className="about-content">
            <h4 className="about-title">
              <i className="material-icons number">filter_3</i>
             Comprehensive Student Assessment
            </h4>
            <p className="about-description">
              Easily tailor your travel plan to your needs by rearranging items in the itinerary.
            </p>
          </div>
        </div>
      </div>
      <div className="col offset-l1 15 no-right-padding valign">
      </div>
    </div>

    <div className="center-align">
      <i className="material-icons circle-icon">panorama_fish_eye</i>
    </div>

    <div className="row">
      <div className="col 15 valign">
      </div>
      <div className="col l6 offset-l1 valign-wrapper">
        <div className="about-container">
          <div className="about-content-right">
            <h4 className="about-title">
              <i className="material-icons number">filter_4</i>
              Teacher Friendly
            </h4>
            <p className="about-description">
              Head off with confidence knowing your trip is tailor-made for you!
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
);

export default about;
