import React, { Component } from 'react';
import './NavResult.css';

class NavResult extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="btn">22 respuestas</div>
                <div className="collapse justify-content-center navbar-collapse" id="navbarNav">
                    <div className="btn-group" role="group" aria-label="Botones">
                        <button type="button" className="btn btn-primary">Resumen</button>
                        <button type="button" className="btn btn-light">Individual</button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavResult;