import React from "react";
import { Row, Button } from "react-materialize";
import { withAuthentication } from "../helper";
import { withRouter } from 'react-router-dom'

const Navbar = props => {
  return (
    <Row className="nav-row">
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">
            <img
              alt="nomad logo"
              className="logo-img"
            />
          </a>
          <div className="right logout-button">
          <Button
          onClick={event => {
            localStorage.clear()
            props.history.push('/')
          }}
          >Logout</Button>
          </div>
          <div className="valign-wrapper right welcome">
            <p className="hide-on-med-and-down">{`Welcome, ${
              props.authState ? props.authState.first_name : ""
            }`}</p>
          </div>
        </div>
      </nav>
    </Row>
  );
};

export default withAuthentication(withRouter(Navbar));
