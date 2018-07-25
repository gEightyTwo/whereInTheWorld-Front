import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "react-materialize";
import { withAuthentication } from '../helper'
import { getCityCard, getCityScores, getCityInfo, getCityImg } from "../actions.js";
import "../styling/Home.css";
import CityCard from "./CityCard";
import Navbar from "./Navbar";
import AttributeModal from "./AttributeModal"
import CityModal from "./CityModal"

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityIsDisplayed: false,
      AttributeIsDisplayed: false
    };
  }

  // componentDidMount = () => {
  //   this.props.getCityCard();
  // };


  render() {
    return (
      <div>
        <Navbar />
        <Row className="banner-row center-align">
          <div className="banner-header">
            <h5>Get started by searching by city or filtering by attribute</h5>
          </div>
          <div className="buttons">
            <CityModal />
            <AttributeModal />
          </div>
        </Row>
        <Row className="city-display">
          <Col s={8} className="offset-s2">
            <div>
              {
                this.props.cityFoundWithSetAttributes.map(city => <CityCard
                  key={city.id}
                  city={city}
                  actions={{getCityCard:this.props.getCityCard, getCityScores:this.props.getCityScores, getCityInfo:this.props.getCityInfo, getCityImg:this.props.getCityImg}}
                  history={this.props.history}
                  authState={this.props.authState}
                  getCommentsForCity={this.props.getCommentsForCity} />)
              }
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ citiesWithMostComments, cityFoundWithSetAttributes, cityInfo, cityImages, cityScores }) => ({
  citiesWithMostComments, cityFoundWithSetAttributes, cityInfo, cityImages, cityScores
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCityCard, getCityScores, getCityInfo, getCityImg }, dispatch);

export default withAuthentication(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home))
