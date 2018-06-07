import React from "react";
import { Row, Col, Button, Input } from "react-materialize";
import { withRouter } from "react-router-dom";
import "../styling/Login.css";
import { request, AuthenticationService } from "../helper";

const Login = props => {
  return (
    <div>
      <Row className="login-row">
        <Col className="title-col">
          <div className="title-logo">Nomad</div>
          <div>
            <h4>Existing User</h4>
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
                    AuthenticationService.setAuthState(response);
                    props.history.push("./Home");
                  });
              }}
            >
              <Input type="email" label="Email" name="email" s={12} />
              <Input type="password" label="Password" name="password" s={12} />
              <div className="login-button">
                <Button waves="light">Login</Button>
              </div>
            </form>
          </div>
          <div>
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
                    console.log(response)
                    AuthenticationService.setAuthState(response);
                    props.history.push("./Home");
                  });
              }}
            >
              <Input s={6} label="First Name" name="firstName" />
              <Input s={6} label="Last Name" name="lastName" />
              <Input type="email" label="Email" name="email" s={6} />
              <Input type="password" label="Password" name="password" s={6} />
              <div className="login-button">
                <Button waves="light">Login</Button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(Login);
