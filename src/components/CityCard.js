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

const handleCardClick = (cityName, actions, history, authState, getCommentsForCity) => {
  actions.getCityScores(cityName)
  actions.getCityInfo(cityName)
  actions.getCityImg(cityName)
  console.log(cityName, actions, history, authState, getCommentsForCity)
  request(`/cities/${cityName}`)
  .then(response => {
    if(response.data.data){
      console.log(authState.id)
      getCommentsForCity(authState.id, response.data.data.id)
      history.push('./fullcity', {cI: response.data.data.id})
    } else {
      request('/cities', 'post', {name:cityName})
        .then(res => {
          history.push('./fullcity', {cI: response.data.data.id})
        })
    }
  })
}

const CityCard = ({city, actions, history, authState, getCommentsForCity}) => {
  city.scores.sort(function (b, a) {
    return a.score_out_of_10 - b.score_out_of_10;
  });
  const top4 = city.scores.slice(0,4)
  // console.log(city, actions, history, authState, getCommentsForCity)
  return (
    <Card
      onClick={()=>handleCardClick(city.name, actions, history, authState, getCommentsForCity)}
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
const mapStateToProps = ({ cityInfo, cityImages, cityScores }) => ({ cityInfo, cityImages, cityScores })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCommentsForCity, getCityScores, getCityInfo, getCityImg }, dispatch);

  export default withAuthentication(withRouter(connect(
   mapStateToProps,  mapDispatchToProps
  )(CityCard)))
