import React, { Component } from "react";
import "./Home.css";
import "video-react/dist/video-react.css";
import { Player, ControlBar } from "video-react";

const sources = {
  sintelTrailer: "./assets/video/Que_es_Multimedia.mp4",
  bunnyTrailer: "./assets/video/Curso-React-Introduccion.mp4"
};

var tiempo;

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources["sintelTrailer"],
      time: tiempo
    };
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
  componentDidMount() {
    var me = this;
    var promise = new Promise((resolve, reject) => {
      setInterval(function() {
        resolve(me.changeTime());
      }, 250);
    });
    promise.then(successMessage => {
      console.log("gg");
    });
  }
  //preguntas
  answerCorrect() {
    console.log("correcto");
  }
  answerNoCorrect() {
    console.log("incorrecto");
  }

  render() {
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
            <div className="col-3 mt-5">
              <button
                onClick={this.answerCorrect}
                className="rel-button-question w-100"
              >
                Correcto
              </button>
              <button
                onClick={this.answerNoCorrect}
                className="rel-button-question w-100"
              >
                Presioname
              </button>
            </div>
            <div className="col-3 offset-2 mt-5">
              <button
                onClick={this.answerNoCorrect}
                className="rel-button-question w-100 "
              >
                Presioname
              </button>
              <button
                onClick={this.answerNoCorrect}
                className="rel-button-question w-100 "
              >
                Presioname
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
