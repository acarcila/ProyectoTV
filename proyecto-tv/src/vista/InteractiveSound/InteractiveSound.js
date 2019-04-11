import React, { Component } from "react";
import annyang from "../../Annyang";
import "./InteractiveSound.css";
import "video-react/dist/video-react.css";
import { Player, ControlBar } from "video-react";
import Question from "../Teacher/Components/Question-Modal/Question";

const sources = {
  sintelTrailer: "./assets/video/Que_es_Multimedia.mp4",
  bunnyTrailer: "./assets/video/Curso-React-Introduccion.mp4"
};
var tiempo, interval;

export default class InteractiveSound extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          name: "estiduiante 1",
          score: 0,
          commands: ["You can't see me"]
        }
      ],
      serverHistory: [],
      voiceStatus: "hello",
      voiceInput: ["hello world", "halo war", "hallow world"],
      source: sources["sintelTrailer"],
      time: tiempo,
      estado: false
    };

    this.button = React.createRef();
    this.openMicrophone = this.openMicrophone.bind(this);
    this.closeMicrophone = this.closeMicrophone.bind(this);

    this.preguntas = React.createRef();
    this.viewQuestion = this.viewQuestion.bind(this);
    this.noViewQuestion = this.noViewQuestion.bind(this);

    this.answerCorrect = this.answerCorrect.bind(this);
    this.answerNoCorrect = this.answerNoCorrect.bind(this);

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    annyang.addCommands(this.reset, this.change, this.undo);
    annyang.addCallback(this.engineCallback, this.resultCallback);

    this.setState({
      voiceStatus: annyang.isSupported() ? "Supported" : "Unsupported"
    });
    var me = this;
    var promise = new Promise((resolve, reject) => {
      if (!this.state.estado) {
        interval = setInterval(function() {
          resolve(me.changeTime());
        }, 250);
      } else {
        clearInterval(interval);
      }
    });
    promise.then(successMessage => {
      console.log("gg");
    });
  }

  handleClick(props) {
    console.log(props);
  }

  openMicrophone() {
    console.log("gg");
    annyang.start();
    annyang.resume();
  }

  closeMicrophone() {
    annyang.abort();
  }

  componentWillUnmount() {
    annyang.abort();
  }

  engineCallback = status => {
    this.setState({
      voiceStatus: status
    });
  };

  resultCallback = voiceInput => {
    this.setState({
      voiceInput: voiceInput
    });
  };
  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  play() {
    this.refs.player.play();
  }

  pause() {
    this.refs.player.pause();
  }

  load() {
    this.refs.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.refs.player.getState();
      const currentTime = player.currentTime;
      this.refs.player.seek(currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.refs.player.seek(seconds);
    };
  }
  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const playbackRate = player.playbackRate;
      this.refs.player.playbackRate = playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const volume = player.volume;
      this.refs.player.volume = volume + steps;
    };
  }

  setMuted(muted) {
    return () => {
      this.refs.player.muted = muted;
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name]
      });
      this.refs.player.load();
    };
  }
  changeTime() {
    const { player } = this.refs.player.getState();
    tiempo = player.currentTime;
    this.setState({
      time: tiempo
    });
    this.detecTime(tiempo);
    console.log(tiempo);
    if (this.state.voiceStatus.toUpperCase() === "LISTENING") {
      var dictado = this.state.voiceInput.some((input, i) => {
        var flag = input.toUpperCase() === "SOFTWARE";
        if (!flag) {
        } else {
          clearInterval(interval);
          this.props.history.push("/Home");
          annyang.abort();
          this.setState({
            estado: flag
          });
          return flag;
        }
      });
      console.log(dictado);
      console.log(this.state.voiceStatus.toUpperCase() + " escucho");
    } else {
      console.log(this.state.voiceStatus.toUpperCase() + " no escucho");
    }
  }
  detecTime(time) {
    if (time >= 10) {
      this.viewQuestion();
      this.pause();
    } else {
      this.noViewQuestion();
      this.play();
    }
  }

  viewQuestion() {
    this.preguntas.current.style.display = "block";
  }

  noViewQuestion() {
    this.preguntas.current.style.display = "none";
  }

  answerCorrect() {
    console.log("correcto");
  }
  answerNoCorrect() {
    console.log("incorrecto");
  }


  /*{this.state.voiceInput.map((input,i) => {
          return <li>{input}</li>;
        })}*/
  render() {
    /*return (
      <div className="container-fluid">
        
        <div className="row">
          <button
            type="button"
            onClick={this.openMicrophone}
            className="btn btn-primary"
            id={this.button}
            ref={this.button}
          >
            Escuchar
          </button>
          <button
            type="button"
            onClick={this.closeMicrophone}
            className="btn btn-primary"
            id={this.button}
            ref={this.button}
          >
            No escuchar
          </button>
        </div>
      </div>
    );*/
    return (
      <div className="container-fluid p-0">
        <Player
          ref="player"
          autoPlay
          fluid={false}
          width={window.innerWidth}
          height={window.innerHeight}
        >
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>
        <div
          className="container-fluid rel-container-preguntas"
          ref={this.preguntas}
        >
          <div className="row justify-content-center text-center ">
            <h2>¿cual de estas es una parte de un sistema multimedia?</h2>
          </div>
          <div className="row justify-content-center text-center ">
            <div className="col-3 mt-5">
              <div className="card rel-button-question w-100">
                <div className="card-body d-flex align-items-center h-100 justify-content-center">
                  <h3>SOFTWARE</h3>
                </div>
              </div>
              <div className="card rel-button-question w-100">
                <div className="card-body d-flex align-items-center h-100 justify-content-center">
                  <h3 className="align-middle justify-content-center">
                    HCI
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-3 mt-5">
              <div className="card rel-button-question w-100">
                <div className="card-body d-flex align-items-center h-100 justify-content-center">
                  <h3 className="align-middle justify-content-center">
                    ARQUITECTURA
                  </h3>
                </div>
              </div>
              <div className="card rel-button-question w-100">
                <div className="card-body d-flex align-items-center h-100 justify-content-center">
                  <h3 className="align-middle justify-content-center">
                    NINGUNA
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-4 mt-5">
              <div className="container-fluid">
                <div className="row">
                  <button
                    type="button"
                    onClick={this.openMicrophone}
                    className="btn btn-primary rel-microphono"
                    id={this.button}
                    ref={this.button}
                  >
                    Escuchar
                  </button>
                  <button
                    type="button"
                    onClick={this.closeMicrophone}
                    className="btn btn-primary"
                    id={this.button}
                    ref={this.button}
                  >
                    No escuchar
                  </button>
                </div>
                <div className="row">
                  {this.state.voiceStatus.toUpperCase()}
                  {this.state.voiceInput.map((input, i) => {
                    return <li>{input}</li>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary rounded-pill rel-comentario btn-momo"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={this.handleClick}
        >
          Comentario
        </button>
        <Question />
      </div>
    );
  }
}
