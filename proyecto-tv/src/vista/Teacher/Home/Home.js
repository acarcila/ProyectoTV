import React, { Component } from "react";
import "./Home.css";
import Header1 from "../Components/Header1/Header1"
import Card from "../Components/Card/Card";

export default class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            lastName: ""
        };
    }

    render() {
        return (
            <div>
                <Header1 />
                <div className="container">
                    <div className="row">
                        <Card imagen="/assets/img/sistemamultimedia.jpg" titulo="ASM 2019-1" subtitulo="Operaciones y sistemas" descripcion="Clase de arquitectura de sistema multimedia" />
                        <Card imagen="/assets/img/sistemamultimedia.jpg" titulo="ASM 2019-3" subtitulo="Operaciones y sistemas" descripcion="Clase de arquitectura de sistema multimedia" />
                    </div>
                </div>
            </div>
        );
    }
}