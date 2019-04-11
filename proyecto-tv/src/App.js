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

const TeacherHome = Loadable({
  loader: () => import("./vista/Teacher/Home/Home"),
  loading
});

const TeacherClass = Loadable({
  loader: () => import("./vista/Teacher/Class/Class"),
  loading
});

const TeacherTopic = Loadable({
  loader: () => import("./vista/Teacher/Topic/Topic"),
  loading
});

const TeacherResultResume = Loadable({
  loader: () => import("./vista/Teacher/ResultResume/ResultResume"),
  loading
});

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          
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
          <Route exact path="/" name="Login - IMUAO" component={Login} />
          <Route exact path="/Teacher/Home" name="Home" component={TeacherHome} />
          <Route exact path="/Teacher/Class" name="Class" component={TeacherClass} />
          <Route exact path="/Teacher/Topic" name="Topic" component={TeacherTopic} />
          <Route exact path="/Teacher/ResultResume" name="Topic" component={TeacherResultResume} />

        </Switch>
      </HashRouter>
    );
  }
}

export default App;
