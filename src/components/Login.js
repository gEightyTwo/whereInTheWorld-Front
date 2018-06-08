import React from "react";
import { Row, Col, Button, Input, CardPanel } from "react-materialize";
import { withRouter } from "react-router-dom";
import "../styling/Login.css";
import { request, AuthenticationService } from "../helper";

const Login = props => {
  return (
    <div className='login-container'>
      <Row className="login-row">
        <Col className="title-col">
          <div className="title-logo">
            <img alt="nomad logo" className="logo-img" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={6}>
          <CardPanel className="login-card-panel lighten-4 black-text">
            <Row>
              <h4>Login</h4>
              <form
                onSubmit={event => {
                  event.preventDefault();
                  request("/auth/token", "post", {
                    username: event.target.email.value,
                    password: event.target.password.value
                  })
                    .then(response => {
                      localStorage.setItem("token", response.data.token);
                      return request("/auth/token");
                    })
                    .then(response => {
                      AuthenticationService.setAuthState(response.data);
                      props.history.push("./Home");
                    });
                }}
              >
                <Row>
                  <Input type="email" label="Email" name="email" s={6} />
                  <Input
                    type="password"
                    label="Password"
                    name="password"
                    s={6}
                  />
                </Row>
                <Row>
                  <div className="login-button">
                    <Button waves="light">Login</Button>
                  </div>
                </Row>
              </form>
            </Row>
          </CardPanel>
        </Col>
        <Col s={12} m={6}>
          <CardPanel className="create-user-card-panel lighten-4 black-text">
            <Row>
              <h4>New User</h4>
              <form
                onSubmit={event => {
                  event.preventDefault();
                  event.persist();
                  request("/users", "post", {
                    fname: event.target.firstName.value,
                    lname: event.target.lastName.value,
                    email: event.target.email.value,
                    password: event.target.password.value
                  })
                    .then(response => {
                      return request("/auth/token", "post", {
                        username: response.data.data.email,
                        password: event.target.password.value
                      });
                    })
                    .then(response => {
                      localStorage.setItem("token", response.data.token);
                      return request("/auth/token");
                    })
                    .then(response => {
                      console.log(response);
                      AuthenticationService.setAuthState(response.data);
                      props.history.push("./Home");
                    });
                }}
              >
                <Row>
                  <Input label="First Name" name="firstName" s={6}/>
                  <Input label="Last Name" name="lastName" s={6}/>
                </Row>
                <Row>
                  <Input type="email" label="Email" name="email" s={6}/>
                  <Input type="password" label="Password" name="password" s={6}/>
                </Row>
                <Row>
                  <div className="login-button">
                    <Button waves="light">Login</Button>
                  </div>
                </Row>
              </form>
            </Row>
          </CardPanel>
        </Col>
      </Row>
      <Row>
      <CardPanel className="lighten-4 black-text">
        <Row className="about-row">
        <div className="center-align">
        <h3>What is Nomad?</h3>
        </div>
        
        <h4>We are here to help you choose your next destination to live!</h4>
          <p className='about-body'>
            Choose from a list of attributes that matter the most you: Cost of Living, Housing, Tolerance, etc... -or- 
            Look up a city you were thinking about moving to and check out how it ranks. Nomad provides comprehensive, 
            easy to read data on hundreds of urban areas world-wide.
          </p>
          <h4>Live in an urban area?</h4>
          <p className='about-body'>
          Contribute to the Nomad community and leave a comment on a city you live in or have been to. If you read a 
          comment you have feelings about, you can vote it up or down. 
          </p>
        </Row>
      </CardPanel>
      </Row>
    </div>
  );
};

export default withRouter(Login);
