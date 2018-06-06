import React, {Component} from "react";
import { Modal, Row, Col, Input, Button } from "react-materialize";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import {getCitiesByAtt, getCityScores, getCityInfo, getCityImg} from '../actions'



class CityModal extends Component {
  

  handleNameSearch = event => {
    event.preventDefault()
    const cityName = event.target.citySearch.value
    this.props.getCitiesByAtt([{name:'Housing', score_out_of_10: 8}, {name:'Cost of Living', score_out_of_10: 8}, {name:'Education', score_out_of_10: 3}])
    this.props.getCityScores(cityName)
    this.props.getCityInfo(cityName)
    this.props.getCityImg(cityName)
    this.props.history.push('./FullCity')
  }

  render(){
    return (
      <Modal
        className="city-modal"
        header="Select a City"
        trigger={<Button>Cities</Button>}
      >
        <Row>
          <Col s={4} className="offset-s4">
            <form onSubmit={this.handleNameSearch}>
              <Input s={12} name="citySearch" label="City Name" required='true'/>
              <Button type="submit" className="submit-button modal-close">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Modal>
    );
  }
};

const mapStateToProps = ({ cityInfo, cityImages, cityScores }) => ({ cityInfo, cityImages, cityScores })

const mapDispatchToProps = (dispatch) => bindActionCreators({getCitiesByAtt, getCityScores, getCityInfo, getCityImg}, dispatch)


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CityModal))
