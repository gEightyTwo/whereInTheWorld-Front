import React from "react";
import { Card, CardTitle, Row, Col } from 'react-materialize'
import { connect } from "react-redux";
import Parser from 'html-react-parser';
import { bindActionCreators } from "redux";
import { withAuthentication, request } from '../helper'
import '../styling/CityCard.css'
import { Line } from 'rc-progress';
import { getCommentsForCity, getCityScores, getCityInfo, getCityImg } from "../actions.js";

const handleCardClick = (cityName, actions) => {
  actions.getCityScores(cityName)
  actions.getCityInfo(cityName)
  actions.getCityImg(cityName)
  request(`/cities/${cityName}`)
  .then(response => {
      this.props.getCommentsForCity(this.props.authState.id, response.data.data.id)
      this.props.history.push('./fullcity', {cI: response.data.data.id})
    })
}

const CityCard = ({city}, {actions}) => {
  city.scores.sort(function (b, a) {
    return a.score_out_of_10 - b.score_out_of_10;
  });
  const top4 = city.scores.slice(0,4)
  return (
    <Card
      onClick={()=>handleCardClick(city.name, actions)}
      className="city-card"
      header={<CardTitle image={city.img}>{city.name}</CardTitle>}
    >
      <Row>{Parser(city.summary)}</Row>
        {
          top4.map(score => {
            return (
              <Row>
                <Col s={4}>{score.name}</Col>
                <Col s={2}>{Math.round(score.score_out_of_10)}</Col>
                <Col s={6}><Line percent={score.score_out_of_10 * 10} trailWidth=".5" strokeLinecap="round" strokeWidth="2" strokeColor={score.color}/></Col>
              </Row>
            )
          })
        }
    </Card>
  );
};
// <Col s={8}><Circle percent={category.score_out_of_10 * 10} trailWidth="1" strokeLinecap="round" strokeWidth="3" strokeColor={category.color}/></Col>
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCommentsForCity, getCityScores, getCityInfo, getCityImg }, dispatch);

  export default withAuthentication(connect(
    mapDispatchToProps
  )(CityCard))
