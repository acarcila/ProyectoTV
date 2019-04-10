import React, { Component } from 'react';
import './Header3.css';

class Header1 extends Component {
  render() {
    return (
        <nav className="pt-2 pb-2 navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                    <div className="d-flex">
                        <img src="/assets/img/menu.png" width="30" height="30" className="ml-2 mt-3 mr-3 d-inline-block align-top" alt="" />
                        <div>
                            <h3 className="m-0">ASM 2019-01</h3>
                            <h6 className="font-weight-normal">Sistema Multimedia</h6>
                        </div>
                    </div>
                </a>
                <div className="collapse justify-content-center navbar-collapse div-jdp" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="a-jdp nav-link" href="#">Resumen</a>
                        </li>
                        <li className="nav-item">
                            <a className="a-jdp nav-link" href="#">Respuestas</a>
                        </li>
                        <li className="nav-item">
                            <a className="a-jdp nav-link" href="#">Comentarios</a>
                        </li>
                    </ul>
                </div>
                <a className="navbar-jdp navbar-brand m-0" href="#">
                    <img src="/assets/img/foto.png" width="50" height="50" className="d-inline-block align-top" alt="" />
                </a>
            </nav>
    );
  }
}

export default Header1;