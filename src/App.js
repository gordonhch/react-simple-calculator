import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './tachyons.min.css';
import Display from './Display';
import Panel from './Panel';
import ButtonPressed from './ButtonPressed';

class App extends Component {
  constructor(){
    super();
    this.state = {
      display: "",
      preResult: "",
      incResult:"",
      mulResult:"",
      operator: "",

    }
    this.handleState = this.handleState.bind(this);
    this.test = this.test.bind(this);
  }
  
  updateOperator (input){
    if(this.state.newCalc==true){
    } else {
      
    }
    
  }

  test(){
    console.log("test");
  }

  handleState(object) {
    console.log("handle state");
    this.setState(ButtonPressed(this.state, object));
  }

  calcState(operator){
    
  }

  render() {
    return (
      <div className="App dt vh-100 w-100">
        <div className="dtc v-mid bg-gray ">
          <div className="center  mw6 bg-black">
          <Display 
          handleState={this.handleState} 
          display={this.state.display}
          />
          <Panel handleState={this.handleState} />
          <div onClick={()=>this.handleState({display:1})}> aaa</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
