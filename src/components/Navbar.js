import React from "react";
import { Row } from "react-materialize";
import { withAuthentication } from "../helper";

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

export default withAuthentication(Navbar);
