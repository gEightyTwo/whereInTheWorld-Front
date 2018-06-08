import React from "react";
import { Card, CardTitle, Row, Col } from 'react-materialize'
import { connect } from "react-redux";
import Parser from 'html-react-parser';
import { bindActionCreators } from "redux";
import { withAuthentication, request } from '../helper'
import '../styling/CityCard.css'
import { Line } from 'rc-progress';
import { getCommentsForCity, getCityScores, getCityInfo, getCityImg } from "../actions.js";
import { withRouter } from 'react-router-dom'

const handleCardClick = (cityName, actions, history, id, getCommentsForCity) => {
  actions.getCityScores(cityName)
  actions.getCityInfo(cityName)
  actions.getCityImg(cityName)
  console.log(actions)
  request(`/cities/${cityName}`)
  .then(response => {
    console.log(response.data)
      getCommentsForCity(id, response.data.data.id)
      history.push('./fullcity', {cI: response.data.data.id})
    })
}

const CityCard = ({city, actions, history, authState, getCommentsForCity}) => {
  city.scores.sort(function (b, a) {
    return a.score_out_of_10 - b.score_out_of_10;
  });
  const top4 = city.scores.slice(0,4)
  return (
    <Card
      onClick={()=>handleCardClick(city.name, actions, history, authState.id, getCommentsForCity)}
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

  export default withAuthentication(withRouter(connect(
   null,  mapDispatchToProps
  )(CityCard)))
