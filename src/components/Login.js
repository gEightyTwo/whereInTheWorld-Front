import React from "react";
import { Row, Col, Button } from "react-materialize";
import "../styling/Login.css";

const Login = () => {
  return (
    <div>
      <Row className="login-row">
        <Col className="title-col">
          <div className='title-logo'>Nomad</div>
          <div>
            <form>
              <label>
                Email:
                <input type="text" />
              </label>
              <label>
                Password:
                <input type="password" />
              </label>
              <div className='login-button'>
                <Button waves="light">Login</Button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
