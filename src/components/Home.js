import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Button, Col, Modal, Input } from "react-materialize";
import "../styling/Home.css";
import { getCityCard, getCityScores } from "../actions.js";
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
    this.props.getCityCard();
  };

  render() {
    console.log(this.props);
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
            <Modal
              className="city-modal"
              header="Select a City"
              trigger={<Button>Cities</Button>}
            >
              <Row>
                <Col s={4} className="offset-s4">
                  <Input s={12} label="City Name" />
                  <Button type="submit" className="submit-button">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Modal>
            <Modal header="Attributes" trigger={<Button>Attributes</Button>}>
              <Row>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Housing"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Cost of Living"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Start-Ups"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Venture Captial"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Travel Connectivity"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Commute"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Business Freedom"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Safety"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Healthcare"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Education"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Environmental Quality"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Economy"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Taxation"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Internet Access"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Leisure & Culture"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Tolerance"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Outdoors"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
              </Row>
            </Modal>
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
              {this.props.citiesWithMostComments.map(city => {
                return <CityCard key={city.id} city={city} />;
              })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ citiesWithMostComments }) => ({
  citiesWithMostComments
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCityCard, getCityScores }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
