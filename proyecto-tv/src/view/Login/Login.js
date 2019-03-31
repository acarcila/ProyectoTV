import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      lastName: ""
    };
  }
  handleSumit = event => {
    this.props.history.push("/Home");
  };
  render() {
    return (
      <section className="container-fluid rel-container">
        <div className="row h-100">
          <div className="col-md-6 rel-imagen-iniciar-sesion rounded-left " />
          <div className="col-md-6 border rounded-right d-flex align-items-center justify-content-center">
            <div className="container ">
                        <div className="card p-4 w-100 border-0 rel-card mx-auto">
                <div className="card-body text-center">
                  <h2 className="card-title rel-titulo-login">Bienvenido</h2>
                  <h6 className="card-subtitle mb-2 text-muted d-none d-md-block rel-subtitulo-login">
                    Para continuar por favor iniciar sesión con tu correo
                    institucional.
                  </h6>
                  <form onSubmit={this.handleSumit}>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-ligth bg-ligth btn-lg mt-5 border shadow-sm"
                      >
                        <img
                          src="/assets/img/search.svg"
                          className="rel-google-icon mr-2"
                          alt=""
                        />
                        Iniciar sesión con Google
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
