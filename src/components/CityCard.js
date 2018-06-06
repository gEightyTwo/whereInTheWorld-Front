import React, { Component } from "react";
import { Card, CardTitle } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getCityScores, getCityInfo, getCityImg} from '../actions'
import '../styling/CityCard.css'

class CityCard extends Component {
  

  render(){
    return (
      <Card
        className="small city-card"
        header={<CardTitle image={this.props.city.img}>{this.props.city.name}</CardTitle>}
      >
        I am a very simple card. I am good at containing small bits of
        information. I am convenient because I require little markup to use
        effectively.
      </Card>
    );
  }
};

const mapStateToProps = ({ cityInfo, cityImages, cityScores }) => ({ cityInfo, cityImages, cityScores })

const mapDispatchToProps = (dispatch) => bindActionCreators({getCityScores, getCityInfo, getCityImg}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(CityCard)
