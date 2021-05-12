import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Location extends Component {
constructor(props){
    super(props);
    this.state = {
        date: '',
        loc: ''
    };
   
}    

onChange2 = (e) =>{
    this.setState({
    loc: e.target.value
});
}


sendLoc = () =>{
    this.props.parentCallback2(this.state.loc);
}

render(){
    return(
        <>  
            <label for = 'loc0'>Wprowadź lokację z Google Maps, w formacie "szerokosć, długość" geograficzna.</label>
            <input type = 'text' id = 'loc0' name = 'loc0' className = 'chooseLocation' onChange = {this.onChange2} autoComplete = 'on' />
            <button onClick={this.sendLoc} className = 'btn btn-success btn0'>Pobierz lokację</button>
            {console.log(this.state.loc)}
        </>
    );
}

}

export default Location;