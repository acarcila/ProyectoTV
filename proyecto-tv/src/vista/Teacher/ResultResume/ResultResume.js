import React, { Component } from "react";
import "./ResultResume.css";
import Header3 from "../Components/Header3/Header3"
import Chart from "../Components/Chart/Chart"
import Buttons from "../Components/Buttons/Buttons"

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: ['A', 'B', 'C', 'D', 'E', 'F'],
                datasets: [
                    {
                        label: 'Estudiantes',
                        data: [
                            10,
                            2,
                            15,
                            1,
                            0,
                            6
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div>
                <Header3 />
                <div className="container">
                    <div className="shadow-sm mt-3 bg-white rounded w-100">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="btn">22 respuestas</div>
                            <div className="collapse justify-content-center navbar-collapse" id="navbarNav">
                                <Buttons/>
                            </div>
                        </nav>
                        <div className="container justify-content-center container-jdp">
                            <div className="mb-4 p-3">
                                <Chart chartData={this.state.chartData} location="Que es un sistema multimedia" legendPosition="bottom" />
                            </div>
                            <div className="mb-4">
                                <Chart chartData={this.state.chartData} location="Que es un sistema multimedia" legendPosition="bottom" />
                            </div>
                            <div className="mb-4">
                                <Chart chartData={this.state.chartData} location="Que es un sistema multimedia" legendPosition="bottom" />
                            </div>
                            <div className="mb-4">
                                <Chart chartData={this.state.chartData} location="Que es un sistema multimedia" legendPosition="bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}