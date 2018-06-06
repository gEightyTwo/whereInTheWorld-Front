import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "react-materialize";
import { getCityCard, getCityScores } from "../actions.js";
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

  componentDidMount = () => {
    this.props.getCityCard();
  };

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
        <Row className="city-card-display-row center-align">
          <div className="card-display-header">
            <h5>
              Here are a few cities that our users have commented on the most
            </h5>
          </div>
        </Row>
        <Row className="city-card">
          <Col s={8} className="offset-s2">
            <div>
              {
                // this.props.citiesWithMostComments.map(city => {
                //   return <CityCard key={city.id} city={city} />;
                // })
                this.props.cityFoundWithSetAttributes.map(city => {
                  return <CityCard key={city.id} city={city} />;
                })
              }
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ citiesWithMostComments,  }) => ({
  citiesWithMostComments
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCityCard, getCityScores }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
