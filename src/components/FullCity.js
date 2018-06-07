import React, {Component} from "react";
import { Row, Col, Tab, Tabs, Card } from "react-materialize";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Parser from 'html-react-parser';
import { Line } from 'rc-progress';
import '../styling/fullCity.css';
import Navbar from "./Navbar";
import AttributeModal from "./AttributeModal"
import CityModal from "./CityModal"
import CommentList from "./CommentList"

class FullCity extends Component{
  constructor(props){
    super(props)
    console.log(props)
  }
  // handleNameSearch = event => {
  //   event.preventDefault()
  //   const cityName = event.target.citySearch.value
  //   this.props.getCitiesByAtt([{name:'Housing', score_out_of_10: 8}, {name:'Cost of Living', score_out_of_10: 8}, {name:'Education', score_out_of_10: 3}])
  //   this.props.getCityScores(cityName)
  //   this.props.getCityInfo(cityName)
  //   this.props.getCityImg(cityName)
  // }
  collapsible = (ele) => {
    window.$(ele).collapsible()
  }
  render(){
    return (
      <div>
      <Navbar />
      {
        this.props.cityImages.image &&

        <Row className="city-row" style={{backgroundImage: `url(${this.props.cityImages.image.web})`}}>
          <div className="buttons">
            <CityModal />
            <AttributeModal />
          </div>
        </Row>
      }
      <Row className="pattern-back">
        <Col s={1}></Col>
        <Col s={10}>
          {this.props.cityScores.summary && Parser(this.props.cityScores.summary)}
          <Tabs className='tab-demo z-depth-1'>
            <Tab title="Stats" active="true">
              <ul ref={this.collapsible} className="collapsible">
              {
                this.props.cityScores.categories &&  this.props.cityScores.categories.map((category,i) => {
                  return (
                    <li key={i}>
                    <div className="collapsible-header">
                    <Row className="collapsible-row">
                    <Col s={3}>{category.name}</Col>
                    <Col s={1}>{Math.round(category.score_out_of_10)}</Col>
                    <Col s={8}><Line percent={category.score_out_of_10 * 10} trailWidth="1" strokeLinecap="round" strokeWidth="3" strokeColor={category.color}/></Col>
                    </Row>
                    </div>
                    <div className="collapsible-body">
                    <ul>
                    {
                      this.props.cityInfo.filter(infoType => infoType.label === category.name)
                      .map(infoType => {
                        return infoType.data.map((indiv, i) => {
                          let typeChecker;
                          switch(indiv.type){
                            case 'float':
                            typeChecker = `${(indiv.float_value).toFixed(2)}`
                            break;
                            case 'int':
                            typeChecker = indiv.int_value
                            break;
                            case 'percent':
                            typeChecker = `%${(indiv.percent_value).toFixed(2)}`
                            break;
                            case 'url':
                            typeChecker = indiv.url_value
                            break;
                            case 'currency_dollar':
                            typeChecker = `$${(indiv.currency_dollar_value).toFixed(2)}`
                            break;
                            case 'string':
                            typeChecker = indiv.string_value
                            break;
                            default:
                            typeChecker = 'IDK'
                          }
                          return (
                            <li key={i}>
                            <Row>
                            <Col s={4}>{indiv.label}</Col>
                            <Col s={8}>{typeChecker}</Col>
                            </Row>
                            </li>
                          )
                        })
                      })
                    }
                    </ul>
                    </div>
                    </li>
                  )
                })
              }
              </ul>
            </Tab>
            <Tab title="Comments" active>
              {
                this.props.currentCityComments.length > 0 ?
                this.props.currentCityComments.map(comment => {
                  <Col s={12}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title={comment.title} actions={[<a href='#'>This is a link</a>]}>
                      {comment.content}
                    </Card>
                  </Col>
                }) : <Col s={12}>
                        <Card className='blue-grey darken-1' textClassName='white-text' title='There are no comments for this city yet' actions={[<a href='#'>Be the First!</a>]}>
                        </Card>
                     </Col>
              }
            </Tab>
          </Tabs>
          </Col>
          <Col s={1}></Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ({ currentCityComments, cityInfo, cityImages, cityScores }) => ({ currentCityComments, cityInfo, cityImages, cityScores })

// const mapDispatchToProps = (dispatch) => bindActionCreators({getCitiesByAtt, getCityScores, getCityInfo, getCityImg}, dispatch)


export default connect(mapStateToProps)(FullCity)
