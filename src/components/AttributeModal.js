import React from 'react'
import { Modal, Button, Row, Col, Input } from 'react-materialize'

const AttributeModal = () => {
    return(
        <Modal className='attributes-modal' header="Attributes" trigger={<Button>Attributes</Button>}>
              <Row>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Housing"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Cost of Living"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Start-Ups"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Venture Captial"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Travel Connectivity"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Commute"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Business Freedom"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Safety"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Healthcare"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Education"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Environmental Quality"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Economy"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Taxation"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Internet Access"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Leisure & Culture"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Tolerance"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
                <Col className='input-col'>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Outdoors"
                  />
                  <form action="#">
                    <p className="range-field">
                      <input className='range-input' type="range" id="test5" min="0" max="10" />
                    </p>
                  </form>
                </Col>
              </Row>
            </Modal>
    )
}

export default AttributeModal