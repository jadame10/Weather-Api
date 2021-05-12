import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Input extends Component {
constructor(props){
    super(props);
    this.state = {
        date: '',
        loc: ''
    };
    this.sendBackData= this.sendBackData.bind(this);
}    
onChange = (e) =>{
    this.setState({
    date: e.target.value
});
}


sendBackData = () => {
 this.props.parentCallback(this.state.date);

}


render(){
    return(
        <>  
            <input type = 'date' name = 'date0' className = 'chooseDate' onChange = {this.onChange} />  
            <button onClick={this.sendBackData} className = 'btn btn-primary btn0'>Pobierz datę</button>
            {console.log(this.state.date)}
        </>
    );
}

}

export default Input;