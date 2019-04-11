import React, { Component } from "react";
import "./Topic.css";
import Header3 from "../Components/Header3/Header3"
import Chart from "../Components/Chart/Chart"
import Comment from "../Components/Comment/Comment"

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
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="shadow-sm p-3 mt-3 bg-white rounded w-100">
                                    <div className="px-3 py-3">
                                        <h6 className="font-weight-bold text-primary">En lo que mas se equivocaron</h6>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Chart chartData={this.state.chartData} location="Que es un sistema multimedia" legendPosition="bottom" />
                                        </div>
                                        <div className="col-6">
                                            <Chart chartData={this.state.chartData} location="Que es un sistema multimedia" legendPosition="bottom" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="shadow-sm p-3 mt-3 bg-white rounded w-100">
                                    <div className="px-3 py-3">
                                        <h6 className="font-weight-bold text-primary">Ultimos comentarios</h6>
                                    </div>
                                    <div className="row">
                                        <Comment imagen="/assets/img/foto.png" nombre="Carlos Garzon Momo" comentario="no se por que nunca entiendo nada" tiempo="hace 2 horas"/>
                                        <Comment imagen="/assets/img/foto.png" nombre="Carlos Garzon Momo" comentario="no se por que nunca entiendo nada" tiempo="hace 2 horas"/>
                                        <Comment imagen="/assets/img/foto.png" nombre="Carlos Garzon Momo" comentario="no se por que nunca entiendo nada" tiempo="hace 2 horas"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}