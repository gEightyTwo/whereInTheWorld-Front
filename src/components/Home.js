import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Col } from "react-materialize";
import "../styling/Home.css";
import {getCityCard} from '../actions.js'
import CityCard from "./CityCard";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityIsDisplayed: false,
      AttributeIsDisplayed: false
    };
  }

  componentDidMount = () => {
    this.props.getCityCard()
  }

  render() {
      console.log(this.props)
    return (
      <div>
        <Row className="nav-row">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo">Nomad</a>
              <div className="valign-wrapper right welcome">
                <p className="hide-on-med-and-down">{`Welcome, User`}</p>
              </div>
            </div>
          </nav>
        </Row>
        <Row className="banner-row center-align valign-wrapper">
          <div className="banner-header">
            <h5>Get started by searching by city or filtering by attribute</h5>
          </div>
          <div className="buttons">
            <Button>City</Button>
            <Button>Attributes</Button>
          </div>
        </Row>
        <Row className="city-card-display-row center-align">
          <div className="card-display-header">
            <h5>
              Here are a few cities that our users have commented on the most
            </h5>
          </div>
          
        </Row>
        <Row className='city-card'>
        <Col s={8} className="offset-s2">
          <div>
          {this.props.citiesWithMostComments.map(city => {
              return <CityCard key={city.id} city={city} />
          })}
          </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ citiesWithMostComments }) => ({ citiesWithMostComments })

const mapDispatchToProps = dispatch => (bindActionCreators({ getCityCard }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Home);

