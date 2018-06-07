import React, { Component } from "react";
import { Modal, Button, Row, Col, Input } from "react-materialize";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCitiesByAtt } from "../actions";
import { withRouter } from 'react-router-dom'

class AttributeModal extends Component {

    render(){
      return (
    <Modal
      className="attributes-modal"
      header="Attributes"
      trigger={<Button>Attributes</Button>}
    >
      <Row>
        <form
          onSubmit={event => {
              event.preventDefault()
            const fields = ["Housing","Cost_of_Living", "Start_Ups", "Venture_Capital", "Travel_Connectivity", "Commute", "Business_Freedom", "Safety", "Healthcare", "Education", "Environmental_Quality", "Economy", "Taxation", "Internet_Access", "Leisure_Culture", "Tolerance", "Outdoors"]

            const checked = fields.map(f => {
                let nameArray = f.split('_')
                let fName = nameArray.reduce((acc,ele) => {
                    if(nameArray.indexOf(ele) !== nameArray.length-1) acc += `${ele} `
                    else acc += ele
                    return acc
                }, "")
                return {name: fName, checked: event.target[f].checked, score:event.target[f+'-score'].value}
                })

            const checkedValues = checked.filter(obj => obj.checked)

            const data = checkedValues.map(obj => ({name: obj.name, score_out_of_10: obj.score}))
            this.props.getCitiesByAtt(data)
            this.props.history.push('./home')
          }}
        >
          <Col className="input-col">
            <Input name="Housing" type="checkbox" value="red" label="Housing" />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Housing-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="Cost_of_Living"
              type="checkbox"
              value="red"
              label="Cost of Living"
            />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Cost_of_Living-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="Start_Ups"
              type="checkbox"
              value="red"
              label="Start-Ups"
            />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Start_Ups-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="Venture_Capital"
              type="checkbox"
              value="red"
              label="Venture Captial"
            />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Venture_Capital-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="Travel_Connectivity"
              type="checkbox"
              value="red"
              label="Travel Connectivity"
            />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Travel_Connectivity-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input name="Commute" type="checkbox" value="red" label="Commute" />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Commute-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="Business_Freedom"
              type="checkbox"
              value="red"
              label="Business Freedom"
            />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Business_Freedom-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input name="Safety" type="checkbox" value="red" label="Safety" />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Safety-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="Healthcare"
              type="checkbox"
              value="red"
              label="Healthcare"
            />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Healthcare-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="Education"
              type="checkbox"
              value="red"
              label="Education"
            />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Education-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="Environmental_Quality"
              type="checkbox"
              value="red"
              label="Environmental Quality"
            />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Environmental_Quality-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input name="Economy" type="checkbox" value="red" label="Economy" />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Economy-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input name="Taxation" type="checkbox" value="red" label="Taxation" />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Taxation-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="Internet_Access"
              type="checkbox"
              value="red"
              label="Internet Access"
            />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Internet_Access-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="Leisure_Culture"
              type="checkbox"
              value="red"
              label="Leisure & Culture"
            />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Leisure_Culture-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="Tolerance"
              type="checkbox"
              value="red"
              label="Tolerance"
            />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Tolerance-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input name="Outdoors" type="checkbox" value="red" label="Outdoors" />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="Outdoors-score"
              />
            </label>
          </Col>
          <div>
            <Button type="submit" className="submit-button modal-close">
              Submit
            </Button>
          </div>
        </form>
      </Row>
    </Modal>
  );
}
};

const mapStateToProps = ({ cityFoundWithSetAttributes }) => ({
    cityFoundWithSetAttributes
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCitiesByAtt }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AttributeModal));
