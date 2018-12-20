import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './tachyons.min.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      queue: 0,
      operation: 0,
      operator: "",
      newInput: true,
      newCalc: true,
      clear: "C",
    }
    this.updateQueue = this.updateQueue.bind(this);
    this.updateOperator = this.updateOperator.bind(this);

  }
  updateQueue(input){
    if(input === "AC"){
      this.setState({
        operation: 0,
        queue: 0, 
        operator:"",
        newInput: true,
        newCalc: true,
      });
    } else if(input === "C"){
      this.setState({
        queue: 0, 
        newInput: true,
        clear: "AC",
      });
    } else if(input === "+/-"){
      this.setState({
        queue: 0 - this.state.queue,
      });
    } else if(input === "%"){
      this.setState({
        queue: this.state.queue / 100,
      });
    } 
    else{
      this.setState({
        clear: "C",
      });
      if(this.state.newInput==true&&this.state.newCalc==false){
        this.setState({
          queue: input,
          newInput: false,
        });
      }
      else if(this.state.newCalc==false){
        this.setState({
          queue: `${this.state.queue}${input}`, 
          newInput: false,
        });
      }
      else if(this.state.newCalc==true){
        this.setState({
          operation: this.state.queue,
          queue:  input,
          newCalc: false,
          newInput: false,
        });
      }
    }
    console.log(`button pressed: ${input}`);
  }
  updateOperator(input){
    if(this.state.newCalc==true){
    } else {
      this.calcState(input);
    }
    this.setState({
      operator: input,
      newCalc: true,
      newInput: true,
    });
  }

  calcState(operator){
    if(this.state.operator == "+"){
      this.setState({queue: Number(this.state.operation) + Number(this.state.queue)});
    }
    else if (this.state.operator == "-"){
      this.setState({queue: Number(this.state.operation) - Number(this.state.queue)});
    }
    else if (this.state.operator == "x"){
      this.setState({queue: Number(this.state.operation) * Number(this.state.queue)});
    }
    else if (this.state.operator == "/"){
      this.setState({queue: Number(this.state.operation) / Number(this.state.queue)});
    }
    else if (this.state.operator == "="){
      this.setState();
    }
  }

  render() {
    return (
      <div className="App dt vh-100 w-100">
        <div className="dtc v-mid bg-gray ">
          <div className="center  mw6 bg-black">
          <Display queue={this.state.queue}/>
          <Panel updateQueue={this.updateQueue} updateOperator={this.updateOperator} operator={this.state.operator} clear={this.state.clear}/>
          </div>
        </div>
      </div>
    );
  }
}
class Display extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {queue = 0} = this.props;
    return(
      <div className="Display bg-black white tr pv4 ph3 ">
        <h1 className="f1 ma0">{queue}</h1>
      </div>
    );
  }
}
class Panel extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {updateQueue, updateOperator, operator, clear} = this.props;
    return(
      <div className="flex">
        <div className="w-75">
          <NumPanel updateQueue={updateQueue} clear={clear}/>
        </div>
        <div className="w-25">
          <OpPanel updateOperator={updateOperator} operator={operator}/>
        </div>
      </div>
    );
  }
}
class NumPanel extends Component {
  constructor(props){
    super(props);
  }
  buttonArray = ["", "+/-","%","7","8","9","4","5","6","1","2","3","0","."];
  render(){
    const {updateQueue, clear} = this.props;
    this.buttonArray = [clear, "+/-","%","7","8","9","4","5","6","1","2","3","0","."];
    return(
      <div className="h-100 flex flex-wrap ">
        {this.buttonArray.map(i => 
          <Button key={i} updateQueue={updateQueue}>{i}</Button>
        )}
      </div>
    );
  }
}
class OpPanel extends Component {
  constructor(props){
    super(props);
  }
  OpButtonArray = ["/","x","-","+","="]
  render(){
    const {updateOperator, operator} = this.props;
    return(
      <div>
        {this.OpButtonArray.map(i => 
        <OpButton key={i} updateOperator={updateOperator} operator={operator}>{i}</OpButton>
        )}
      </div>
    );
  }
}
const Button = ({updateQueue, children}) => {
  if (children == 0) {
    return(
      <div className="Button w-two-thirds pointer b--dark-gray bg-dark-gray white" onClick={()=>updateQueue(children)}>
        <div className="w-50 dib"><h1>{children}</h1></div>
        <div className="w-50 dib"></div>
      </div>
    );
  } else {
    return(
      <div className="Button w-third pointer b--dark-gray bg-dark-gray white" onClick={()=>updateQueue(children)}>
        <h1>{children}</h1>
      </div>
    );
  }
}
class OpButton extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {updateOperator, operator, children} = this.props;
    const btnClass = "Button w-100 ba b--gold pointer";
    const btnDefaultClass = "bg-gold";
    const btnHighlightClass = " bg-white gold";
    let appliedClass = btnClass.concat(" ", children !== operator ?  btnDefaultClass :  btnHighlightClass);
    return(
      <div className={appliedClass} onClick={()=>updateOperator(children)}>
        <h1>{this.props.children}</h1>
      </div>
    );    
  }
}

export default App;
