import React, {Component} from "react";
import { Row, Col, Button } from "react-materialize";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class FullCity extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <a class="teleport-widget-link" href="https://teleport.org/cities/aarhus/">Life quality score - Aarhus</a><script async class="teleport-widget-script" data-url="https://teleport.org/cities/aarhus/widget/scores/?currency=USD" data-max-width="770" data-height="977" src="https://teleport.org/assets/firefly/widget-snippet.min.js"></script>
      </div>
    )
  }
}

export default FullCity;
