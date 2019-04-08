import React, { Component } from "react";
import "./Home.css";

export default class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            lastName: ""
        };
    }
    handleSumit = event => {
        this.props.history.push("/");
    };
    render() {
        return (
            <nav className="navbar-jdp navbar navbar-dark bg-primary ">
                <a className="navbar-jdp navbar-brand" href="#">
                    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    YouLearn
                </a>
                <nav className="justify-content-center">
                    
                </nav>
            </nav>
        );
    }
}