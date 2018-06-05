import React, { Component } from "react";
import { Row, Col, Button } from "react-materialize";
import "../styling/Home.css";
import CityCard from './CityCard'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityIsDisplayed: false,
      AttributeIsDisplayed: false
    };
  }

  render() {
    return (
      <div>
        <Row className="nav-row">
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                Nomad
              </a>
              <div className="valign-wrapper right welcome">
                <p className="hide-on-med-and-down">{`Welcome, User`}</p>
              </div>
            </div>
          </nav>
        </Row>
        <Row className="banner-row center-align valign-wrapper">
          <div className='banner-header'>
            <h5>Get started by searching by city or filtering by attribute</h5>
          </div>
          <div className="buttons">
            <Button>City</Button>
            <Button>Attributes</Button>
          </div>
        </Row>
        <Row className='city-card-display-row center-align'>
        <div className='card-display-header'>
        <h5>Here are a few cities that our users have commented on the most</h5>
        </div>
        <CityCard />
        </Row>
      </div>
    );
  }
}

export default Home;
