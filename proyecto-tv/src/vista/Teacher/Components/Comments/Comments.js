import React, { Component } from 'react';
import './Comments.css';
import CommentTeacher from "../Comments/Comment-Teacher/Comment-Teacher"

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const comentarios = this.props.listaComentarios;
    const listItems = comentarios.map((comentario) => {
        const tiempo = new Date(parseInt(comentario.tiempo) * 1000);
        const mes = tiempo.getMonth() + 1;
        const dia = tiempo.getDate();
        const anio = tiempo.getFullYear();
        const fecha = mes + "/" + dia + "/" + anio

        return (
            <CommentTeacher
                imagen="/assets/img/foto.png"
                nombre="Possillo"
                comentario={comentario.comentario}
                tiempo={fecha}
                key={comentario.idComentario}
            />
        )
    });

    return (
        <ul>{listItems}</ul>
    );
  }
}

export default Comments;