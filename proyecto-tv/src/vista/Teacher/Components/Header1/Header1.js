import React, { Component } from 'react';
import './Header1.css';

class Header1 extends Component {
    render() {
        return (
            <nav className="pt-2 pb-2 navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                    <h3 className="m-0">YouLearn</h3>
                </a>
                <div className="collapse justify-content-center navbar-collapse div-jdp" id="navbarNav">
                </div>
                <a className="navbar-jdp navbar-brand m-0" href="#">
                    <img src="/assets/img/foto.png" width="50" height="50" className="d-inline-block align-top" alt="" />
                </a>
            </nav>
        );
    }
}

export default Header1;