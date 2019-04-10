import React, { Component } from "react";
import "./Class.css";
import Header2 from "../Components/Header2/Header2"
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
                <Header2 />
                <div className="container">
                    <div className="row">
                        <Card imagen="/assets/img/sistemamultimedia.jpg" titulo="Sistema Multimedia" subtitulo="Operaciones y sistemas" descripcion="Clase de arquitectura de sistema multimedia" />
                        <Card imagen="/assets/img/sistemamultimedia.jpg" titulo="Software" subtitulo="Operaciones y sistemas" descripcion="Clase de arquitectura de sistema multimedia" />
                        <Card imagen="/assets/img/sistemamultimedia.jpg" titulo="Hardware" subtitulo="Operaciones y sistemas" descripcion="Clase de arquitectura de sistema multimedia" />
                        <Card imagen="/assets/img/sistemamultimedia.jpg" titulo="Contenido" subtitulo="Operaciones y sistemas" descripcion="Clase de arquitectura de sistema multimedia" />
                        <Card imagen="/assets/img/sistemamultimedia.jpg" titulo="Telecomunicaciones" subtitulo="Operaciones y sistemas" descripcion="Clase de arquitectura de sistema multimedia" />
                    </div>
                </div>
            </div>
        );
    }
}