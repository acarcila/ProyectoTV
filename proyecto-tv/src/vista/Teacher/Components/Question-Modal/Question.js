import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = { imagen: "", nombre: "", comentario: "", tiempo: "" }
    }

    render() {
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Agregar Comentario</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Titulo </span>
                                </div>
                                <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div class="form-group">
                                <label for="comment">Descripción:</label>
                                <textarea class="form-control" rows="5" id="comment"></textarea>
                            </div>
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                <label class="custom-control-label" for="customSwitch1">Visible para mis compañeros</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;