import React, { Component } from 'react';
import Loadable from "react-loadable";
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';

const loading = () => (
  <div className="rel-cargando">
    <div id="loading" />
  </div>
);

const Login = Loadable({
  loader: () => import("./vista/Login/Login"),
  loading
});

const TeacherHome = Loadable({
  loader: () => import("./vista/Teacher/Home/Home"),
  loading
});

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" name="Login - IMUAO" component={Login} />
          <Route exact path="/Teacher/Home" name="Login - IMUAO" component={TeacherHome} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
