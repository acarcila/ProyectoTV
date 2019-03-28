import React, { Component } from 'react';
import Loadable from "react-loadable";
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';

const loading = () => (
  <div className="rel-cargando">
    <div id="loading" />
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      </div>
    );
  }
}

export default App;
