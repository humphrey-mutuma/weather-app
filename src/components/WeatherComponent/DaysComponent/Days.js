import React, {Component} from 'react'
import Day from './DayComponent/Day';
import './Days.css'
import sun from '../../../images/sun.svg';
import cloud from '../../../images/cloud.svg';
import cloudy from '../../../images/cloudy.svg';
import floody from '../../../images/floody.svg';
import rain from '../../../images/rain.svg';

function RandomTemperatures() {
  return Math.floor((Math.random() * 10) + 30)
}

class Days extends Component{
  constructor(props){
    super(props);
    this.state={
        day:[],
        time: new Date().toDateString(),
        image:'',
        temperature: '',
        description:''
    }
  }

  // temperatureHandler = (props) => {
  //   const temperature = this.state.temperature;
  //   this.setState({temperature: })
  // }
    render(){
      const daysOfTheWeek=['Monday','Tuesday','Wednesday','Thur', 'Friday', 'Weekend'];
      const days= daysOfTheWeek.map((day) => 
        <li>{day}</li>
      );
       return (
        <div className="Days">
            <Day
                day={days[0]}
                time={this.state.time}
                image={sun}
                temperature={<RandomTemperatures />}
                description="Sunny" />
            <Day
                day={days[1]}
                time={this.state.time}
                image={cloud}
                temperature={<RandomTemperatures />}
                description="cloud" />
            <Day
                day={days[2]}
                time={this.state.time}
                image={cloudy}
                temperature={<RandomTemperatures />}
                description="cloudy" />
            <Day 
                day={days[3]}
                time={this.state.time}
                image={floody}
                temperature={<RandomTemperatures />}
                description="floody" />
            <Day
                day={days[4]}
                time={this.state.time}
                image={rain}
                temperature={<RandomTemperatures />}
                description="rain" />
        </div>
    ) 
    }
    
}

export default Days;
