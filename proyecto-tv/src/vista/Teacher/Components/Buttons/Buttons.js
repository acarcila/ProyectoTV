import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
    render() {
        return (
            <div className="btn-group" role="group" aria-label="Botones">
                <button type="button" className="btn btn-primary">Resumen</button>
                <button type="button" className="btn btn-light">Individual</button>
            </div>
        );
    }
}

export default Buttons;