import React, { Component } from "react";
import "./Question.css";
import * as firebase from "firebase";
import UtilBaseDatos from "../../../../control/UtilBaseDatos"

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { imagen: "", titulo: "", comentario: "", tiempo: "" };
    this.tituloComentario = React.createRef();
    this.comentario = React.createRef();
  }

  handleChange = event => {
    console.log(this.state.comentario);
    if (event.target.id === "comment") {
      this.setState({ comentario: event.target.value });
    } else if (event.target.id === "titulo") {
      this.setState({
        titulo: event.target.value
      });
    }
  };

  handleSumit = event => {
    var me = this.state;
    console.log(event.target);

    UtilBaseDatos.guardarComentario(
      "",
      "",
      me.comentario,
      me.titulo,
      ""
    );
  };

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <form onSubmit={this.handleSumit}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Agregar Comentario
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                    >
                      Titulo{" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    ref={this.titulo}
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    id="titulo"
                  />
                </div>
                <div className="form-group">
                  <label for="comment">Descripción:</label>
                  <textarea
                    className="form-control"
                    onChange={this.handleChange}
                    ref={this.comentario}
                    rows="5"
                    id="comment"
                  />
                </div>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch1"
                  />
                  <label className="custom-control-label" for="customSwitch1">
                    Visible para mis compañeros
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary btn-momo">
                  Agregar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Question;
