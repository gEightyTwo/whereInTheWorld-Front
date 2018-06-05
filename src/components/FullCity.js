import React, {Component} from "react";
import { Row, Col, Button } from "react-materialize";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getCityScores} from '../actions'

import { Line, Circle } from 'rc-progress';

// import '../styling/fullCity.css'

class FullCity extends Component{
  constructor(props){
    super(props)
    console.log(props)
  }
  handleSearch = event => {
    event.preventDefault()
    const cityName = event.target.citySearch.value
    this.props.getCityScores(cityName)
  }

  render(){
    return (
      <div>
      <form onSubmit={this.handleSearch}>
        <div className="form-group">
          <input type="text" name="citySearch"/>
        </div>
        <button type="submit">Submit</button>
      </form>
      <ul className="collapsible">
        {
          this.props.cityScores.categories &&  this.props.cityScores.categories.map(category => {
            return (
              <li>
                <div className="collapsible-header">
                  <Row>
                    <Col s={3}>{category.name}</Col>
                    <Col s={1}>{Math.round(category.score_out_of_10)}/10</Col>
                    <Col s={8}><Line percent={category.score_out_of_10 * 10} trailWidth=".5" strokeLinecap="square" strokeWidth="1" strokeColor={category.color}/></Col>
                  </Row>
                </div>
                <div className="collapsible-body"><p>{category.score_out_of_10}</p></div>
              </li>
            )
          })
        }
      </ul>

      </div>
    )
  }
}

const mapStateToProps = ({ cityInfo, cityImages, cityScores }) => ({ cityInfo, cityImages, cityScores })

const mapDispatchToProps = (dispatch) => bindActionCreators({getCityScores}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(FullCity)
