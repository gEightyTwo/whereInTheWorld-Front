import React, { Component } from "react";
import { Modal, Button, Row, Col, Input } from "react-materialize";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCitiesByAtt } from "../actions";

class AttributeModal extends Component {
  
    componentDidMount = () => {
        this.props.getCitiesByAtt()
    }
  
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
            const fields = ["housing","costOfLiving", "startUps", "ventureCapital", "travelConnectivity", "commute", "businessFreedom", "safety", "healthcare", "education", "environmentalQuality", "economy", "taxation", "internetAccess", "leisureCulture", "tolerance", "outdoors"]
            const checked = fields.map(f => ({name: f, checked: event.target[f].checked, score:event.target[f+'-score'].value}))

            const checkedValues = checked.filter(obj => obj.checked)

            const data = checkedValues.map(obj => ({name: obj.name, score_out_of_10: obj.score}))
            
          }}
        >
          <Col className="input-col">
            <Input name="housing" type="checkbox" value="red" label="Housing" />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="housing-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="costOfLiving"
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
                name="costOfLiving-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="startUps"
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
                name="startUps-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="ventureCapital"
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
                name="ventureCapital-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="travelConnectivity"
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
                name="travelConnectivity-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input name="commute" type="checkbox" value="red" label="Commute" />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="commute-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="businessFreedom"
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
                name="businessFreedom-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input name="safety" type="checkbox" value="red" label="Safety" />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="safety-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="healthcare"
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
                name="healthcare-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="education"
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
                name="education-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="environmentalQuality"
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
                name="environmentalQuality-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input name="economy" type="checkbox" value="red" label="Economy" />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="economy-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input name="taxation" type="checkbox" value="red" label="Taxation" />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="taxation-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="internetAccess"
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
                name="internetAccess-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="leisureCulture"
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
                name="leisureCulture-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input
              name="tolerance"
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
                name="tolerance-score"
              />
            </label>
          </Col>
          <Col className="input-col">
            <Input name="outdoors" type="checkbox" value="red" label="Outdoors" />
            <label className="range-field">
              <input
                className="range-input"
                type="range"
                min="0"
                max="10"
                name="outdoors-score"
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCitiesByAtt }, dispatch);

export default connect(mapDispatchToProps)(AttributeModal);
