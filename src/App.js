import { Component } from 'react';
import './App.css';
import {Input} from './Input';
import {Location} from './Location';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {SunCloud} from './Suncloud';
import {Sun} from './Sun';
import {Cloud} from './Cloud';
import {Mostly} from './Mostly';
import {Cloudy} from './Cloudy';
import {Drizzle} from './Drizzle';
import {LightRain} from './LightRain';
import {Rain} from './Rain';
import {Fog} from './Fog';
import {LightFog} from './LightFog';
import {HeavyRain} from './HeavyRain';
import {Snow} from './Snow';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     message: "data",
     events:'',
     loc: ''

    };
  }


callbackFunction = (childData) => {
    this.setState({message: childData})
}
callbackFunction2 = (childData2) => {
  this.setState({loc: childData2})
}

getLoc = (e) => {
  console.log(this.state.loc);
  axios({
    method: "get",
    url: `https://api.tomorrow.io/v4/timelines?location=${this.state.loc}&fields=temperature&fields=weatherCode&fields=windSpeed&fields=windDirection&&apikey=XaGHP00wfLQvoQ5e6QD3DX4XDUQKtk8j`
  })
    .then((response) => {
      console.log(response);
      this.setState({events: response})
    })
    .catch((error) => {
      console.log(error);
    });
   
  }
render(){
  return (
    <div className="App">
      <header className="App-header">
         <h1>Prognoza pogody (cztero-dniowa)</h1>
         <div className = 'table-responsive'>
         <table className ='table-striped'>
            <thead>
            <tr>
            <th>Godzina</th>
            <th>Pogoda</th>
            <th>Temperatura</th>
            <th>Kierunek wiatru</th>
            <th>Szybkość wiatru</th>
            </tr>
            </thead>
            <tbody>
            { this.state.events && this.state.message ?
            this.state.events.data.data.timelines[0].intervals.filter((item) => item.startTime.split('T')[0] === this.state.message).map((item, i)=>(
            <tr key = {i}>
               <td>{item.startTime.split('T')[1].split('Z')}</td>
             <td>
             
             {item.values.weatherCode === 1100 ? <SunCloud />
              : item.values.weatherCode === 1000  ? <Sun />
              : item.values.weatherCode === 1102  ? <Cloud />
              : item.values.weatherCode === 1101  ? <Mostly />
              : item.values.weatherCode === 1001  ? <Cloudy />
              : item.values.weatherCode === 4000  ? <Drizzle />
              : item.values.weatherCode === 4200  ? <LightRain />
              : item.values.weatherCode === 4001  ? <Rain />
              : item.values.weatherCode === 2000  ? <Fog />
              : item.values.weatherCode === 2001  ? <LightFog />
              : item.values.weatherCode === 4201  ? <HeavyRain />
              : item.values.weatherCode === 5000  ? <Snow />
              : item.values.weatherCode}
            </td> 
           
            <td> {item.values.temperature}   C</td> 
            <td>{item.values.windDirection > 337.5 || item.values.windDirection <=22.5 ? 'N'
            : item.values.windDirection > 22.5 && item.values.windDirection <= 67.5 ? 'NE'
            : item.values.windDirection > 67.5 && item.values.windDirection <= 135 ? 'E'
            : item.values.windDirection > 135 && item.values.windDirection <= 157.5 ? 'SE'
            : item.values.windDirection > 157.5 && item.values.windDirection <= 202.5 ? 'S'
            : item.values.windDirection > 202.5 && item.values.windDirection <= 247.5 ? 'SW'
            : item.values.windDirection > 247.5 && item.values.windDirection <= 292.5 ? "W"
            : item.values.windDirection > 292.5 && item.values.windDirection <= 337.5 ? "NW"
            : 'none'}
          </td>
          <td>{item.values.windSpeed} m/s</td>
            </tr>
            )): "none"}
            </tbody>
            </table>
            
            </div>
        { console.log(this.state.events.data)}
        <Location parentCallback2 = {this.callbackFunction2} />
        <p> {this.state.loc} </p>
         <Input parentCallback = {this.callbackFunction} />
        <p> {this.state.message} </p>
        <button className = 'btn btn-warning' onClick = {this.getLoc}>Pobierz dane pogodowe</button>
        <br />
        <br />
        
      </header>
    </div>
  );
}
}

export default App;
