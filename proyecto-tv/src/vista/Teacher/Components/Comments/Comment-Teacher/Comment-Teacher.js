import React, { Component } from 'react';
import './Comment-Teacher.css';

class CommentTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = { imagen: "", nombre: "", comentario: "", tiempo: "" }
  }

  render() {
    return (
      <div className="container mb-3">
        <div className="row no-gutters">
          <div className="col-md-4 card-jdp ml-3 mt-2">
            <img src={this.props.imagen} className="card-img"/>
          </div>
          <div className="col-md-8">
            <div className="card-body p-2">
              <h5 className="card-title mb-1 ">{this.props.nombre}</h5>
              <p className="card-text mb-1">{this.props.comentario}</p>
            </div>
          </div>
          <div className="Answear-div">
            <a className="" href="">Responder</a>
            <p className="card-text mb-1 a"><small className="text-muted">{this.props.tiempo}</small></p>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentTeacher;