import React, { Component } from 'react';
import './Header2.css';

class Header1 extends Component {
    render() {
        return (
            <nav className="pt-2 pb-2 navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                    <div className="d-flex">
                        <img src="/assets/img/menu.png" width="30" height="30" className="ml-2 mt-2 mr-3 d-inline-block align-top" alt="" />
                        <h3 className="mt-1">ASM 2019-01</h3>
                    </div>
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