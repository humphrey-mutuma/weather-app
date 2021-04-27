import React, { Component } from 'react'
import './Day.css';

// function Description(props) {
//   const temperature = this.props.temperature;
//   if(temperature => 38){
//     return 'Sunny'
//   }else{
//     return 'Otherwise'
//   }
  
// }

export class Day extends Component {
    constructor(props){
        super(props);
        this.state = {
            description:''
        }
      }

    render() {
        return (
            <div className="Day">
                <ul>
                    {this.props.day}
                </ul>
                <p>{this.props.time}</p>
                <img width="50px" src={this.props.image} alt="weather logo"/>
                <h2>{this.props.temperature}<sup>0</sup> C </h2>
                <p>
                  {this.props.description}
                </p>
            </div>
        )
    }
}

export default Day;
