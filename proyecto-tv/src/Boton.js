import React, { Component } from 'react';
import './Boton.css';

class Boton extends Component {
  render() {
    return (
      <button type="button">{this.props.nombre}</button>
    );
  }
}

export default Boton;
