import React, { Component } from 'react';
import './Quiz.css';
import Question from "../Question/Question"

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            pregunta1: "",
            pregunta1Opcion1: "",
            pregunta1Opcion2: "",
            pregunta1Opcion3: "",
            pregunta1Opcion4: "",
            pregunta2: "",
            pregunta2Opcion1: "",
            pregunta2Opcion2: "",
            pregunta2Opcion3: "",
            pregunta2Opcion4: "",
            pregunta3: "",
            pregunta3Opcion1: "",
            pregunta3Opcion2: "",
            pregunta3Opcion3: "",
            pregunta3Opcion4: "",
            pregunta4: "",
            pregunta4Opcion1: "",
            pregunta4Opcion2: "",
            pregunta4Opcion3: "",
            pregunta4Opcion4: ""
        }
    }
    render() {
        return (
            <div className="px-4 py-2 mx-4 mt-3">
                <p className="mb-1">Nombre</p>
                <h6 className="mb-4">{this.props.nombre}</h6>
                <Question
                    pregunta={this.props.pregunta1}
                    opcion1={this.props.pregunta1Opcion1}
                    opcion2={this.props.pregunta1Opcion2}
                    opcion3={this.props.pregunta1Opcion3}
                    opcion4={this.props.pregunta1Opcion4} />
                <Question
                    pregunta={this.props.pregunta2}
                    opcion1={this.props.pregunta2Opcion1}
                    opcion2={this.props.pregunta2Opcion2}
                    opcion3={this.props.pregunta2Opcion3}
                    opcion4={this.props.pregunta2Opcion4} />
                <Question
                    pregunta={this.props.pregunta3}
                    opcion1={this.props.pregunta3Opcion1}
                    opcion2={this.props.pregunta3Opcion2}
                    opcion3={this.props.pregunta3Opcion3}
                    opcion4={this.props.pregunta3Opcion4} />
                <Question
                    pregunta={this.props.pregunta4}
                    opcion1={this.props.pregunta4Opcion1}
                    opcion2={this.props.pregunta4Opcion2}
                    opcion3={this.props.pregunta4Opcion3}
                    opcion4={this.props.pregunta4Opcion4} />
            </div>
        );
    }
}

export default Quiz;