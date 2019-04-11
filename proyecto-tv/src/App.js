import React, { Component } from "react";
import Loadable from "react-loadable";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";

const loading = () => (
  <div className="rel-cargando">
    <div id="loading" />
  </div>
);

const Login = Loadable({
  loader: () => import("./vista/Login/Login"),
  loading
});
const Home = Loadable({
  loader: () => import("./vista/Home/Home"),
  loading
});


const InteractiveSound = Loadable({
  loader: () => import("./vista/InteractiveSound/InteractiveSound"),
  loading
});

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            name="Login - YOURLEARN"
            component={Login}
          />
          <Route
            exact
            path="/Home"
            name="Home - YOURLEARN"
            component={Home}
          />
          <Route
            exact
            path="/InteractiveSound"
            name="Video Home - YOURLEARN"
            component={InteractiveSound}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
