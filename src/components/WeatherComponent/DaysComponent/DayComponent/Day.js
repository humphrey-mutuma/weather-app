import React, { Component } from 'react'
import './Day.css';

export class Day extends Component {
    render() {
        return (
            <div className="Day">
                <ul>
                    {this.props.day}
                </ul>
                <p>{this.props.time}</p>
                <img width="50px" src={this.props.image} alt="weather logo"/>
                <h2>{this.props.temperature}<sup>0</sup> C </h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Day;
