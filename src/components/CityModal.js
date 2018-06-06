import React from "react";
import { Modal, Row, Col, Input, Button } from "react-materialize";

const CityModal = () => {
  return (
    <Modal
      className="city-modal"
      header="Select a City"
      trigger={<Button>Cities</Button>}
    >
      <Row>
        <Col s={4} className="offset-s4">
          <Input s={12} label="City Name" />
          <Button type="submit" className="submit-button">
            Submit
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default CityModal
