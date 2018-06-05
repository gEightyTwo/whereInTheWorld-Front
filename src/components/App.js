import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import login from './Login'
import fullcity from './FullCity'
import "../styling/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/fullcity" component={fullcity} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
