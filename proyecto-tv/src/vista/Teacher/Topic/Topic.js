import React, { Component } from "react";
import "./Topic.css";
import Header3 from "../Components/Header3/Header3"


export default class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            lastName: ""
        };
    }

    render() {
        return (
            <div>
                <Header3 />
                <div className="container">
                    <div className="shadow-sm p-3 mt-3 bg-white rounded">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-pie pt-4">
                                    <canvas id="myPieChart" width="486" height="253" className="chartjs-render-monitor"></canvas>
                                </div>
                                Styling for the donut chart can be found in the <code>/js/demo/chart-pie-demo.js</code> file.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}