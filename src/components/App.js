import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import login from './Login'
import fullcity from './FullCity'
import home from './Home'
import "../styling/App.css";
import { AuthenticatedRoute } from '../helper'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={login} />
            <AuthenticatedRoute exact path="/fullcity" component={fullcity} />
            <AuthenticatedRoute exact path="/home" component={home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
