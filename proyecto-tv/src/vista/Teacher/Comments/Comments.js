import React, { Component } from "react";
import "./Comments.css";
import Header3 from "../Components/Header3/Header3"
import Comments from "../Components/Comments/Comments"
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import UtilBaseDatos from "../../../control/UtilBaseDatos";

const sources = {
    sintelTrailer: "./assets/video/Que_es_Multimedia.mp4",
    bunnyTrailer: "./assets/video/Curso-React-Introduccion.mp4"
};

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            source: sources["sintelTrailer"],
            listaComentarios: []
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.actualizarComentarios(),
            1000
        );
    }

    actualizarComentarios() {
        UtilBaseDatos.consultarComentario()
            .then(valor => this.setState({ listaComentarios: Object.values(valor) }))
            .catch(error => this.setState({ listaComentarios: '' }));
    }

    render() {
        return (
            <div>
                <Header3 />
                <section className="Main-Section">
                    <div id="Video">
                        <Player
                            ref="player"
                            autoPlay
                            fluid={false}
                            width={640}
                            height={360}
                        >
                            <source src={this.state.source} />
                            <ControlBar autoHide={false} />
                        </Player>
                    </div>
                    <div
                        className="card"
                        id="Comments-main-divs"
                    >
                        <div id="Comments-title">
                            <h4>Comentarios({this.state.listaComentarios.length})</h4>
                        </div>
                        <div id="Comments-div">
                            <Comments listaComentarios={this.state.listaComentarios} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
