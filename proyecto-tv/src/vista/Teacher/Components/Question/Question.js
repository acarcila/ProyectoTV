import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pregunta: "",
            opcion1: "",
            opcion2: "",
            opcion3: "",
            opcion4: ""
        }
    }
    render() {
        return (
            <div className="pt-4">
                <p>{this.props.pregunta}</p>
                <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
                    <label class="custom-control-label" for="customControlValidation2">{this.props.opcion1}</label>
                </div>
                <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required />
                    <label class="custom-control-label" for="customControlValidation3">{this.props.opcion2}</label>
                </div>
                <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
                    <label class="custom-control-label" for="customControlValidation2">{this.props.opcion3}</label>
                </div>
                <div class="custom-control custom-radio mb-3">
                    <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required />
                    <label class="custom-control-label" for="customControlValidation3">{this.props.opcion4}</label>
                </div>
            </div>
        );
    }
}

export default Question;