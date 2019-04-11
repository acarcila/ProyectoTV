import React, { Component } from "react";
import "./ResultIndividual.css";
import Header3 from "../Components/Header3/Header3"
import NavSearch from "../Components/NavSearch/NavSearch"
import NavResult from "../Components/NavResult/NavResult"
import Quiz from "../Components/Quiz/Quiz";

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    render() {
        return (
            <div>
                <Header3 />
                <div className="container">
                    <div className="shadow-sm mt-3 bg-white rounded w-100">
                        <NavResult />
                        <NavSearch />
                        <Quiz
                            nombre="Carlos A Garzon Momer"
                            pregunta1="pregunta1"
                            pregunta1Opcion1="No1"
                            pregunta1Opcion2="Se1"
                            pregunta1Opcion3="Que1"
                            pregunta1Opcion4="Poner1"
                            pregunta2="pregunta2"
                            pregunta2Opcion1="No2"
                            pregunta2Opcion2="Se2"
                            pregunta2Opcion3="Que2"
                            pregunta2Opcion4="Poner2"
                            pregunta3="pregunta3"
                            pregunta3Opcion1="No3"
                            pregunta3Opcion2="Se3"
                            pregunta3Opcion3="Que3"
                            pregunta3Opcion4="Poner3"
                            pregunta4="pregunta4"
                            pregunta4Opcion1="No4"
                            pregunta4Opcion2="Se4"
                            pregunta4Opcion3="Que4"
                            pregunta4Opcion4="Poner4" />
                    </div>
                </div>
            </div>
        );
    }
}