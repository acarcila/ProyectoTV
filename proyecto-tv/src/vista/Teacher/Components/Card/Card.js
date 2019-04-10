import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { imagen: "", titulo: "", subtitulo: "", descripcion: "" }
    }
    render() {
        return (
            <div className="col-3 mt-4">
                <a href="#" className="card-link">
                    <div className="card w-100">
                        <img src={this.props.imagen} className="card-img-top"></img>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.titulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{this.props.subtitulo}</h6>
                            <p className="card-text">{this.props.descripcion}</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default Card;