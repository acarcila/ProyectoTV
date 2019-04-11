import React, { Component } from "react";
import "./Comments.css";
import Header3 from "../Components/Header3/Header3"
import Comment from "../Components/Comments-Teacher/Comments-Teacher"
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";

const sources = {
    sintelTrailer: "./assets/video/Que_es_Multimedia.mp4",
    bunnyTrailer: "./assets/video/Curso-React-Introduccion.mp4"
};

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            source: sources["sintelTrailer"]
        }
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
                    <div className="card" id="Comments-main-divs">
                        <div id="Comments-title">
                            <h4>Comentarios(4)</h4>
                        </div>
                        <div id="Comments-div">
                            <Comment imagen="/assets/img/foto.png" nombre="Rodrogo" comentario="¿Qué es UX?" tiempo="Min 1:20" />
                            <Comment imagen="/assets/img/foto.png" nombre="Camilox" comentario="¿Usabilidad?" tiempo="Min 2:50" />
                            <Comment imagen="/assets/img/foto.png" nombre="Possillo" comentario="¿De que clase de prueba habla?" tiempo="Min 10:00" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}