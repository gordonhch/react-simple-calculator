import React, { Component } from 'react';

class Display extends Component {
    constructor(props){
      super(props);
    }
    render(){
      const {display, handleState} = this.props;
      const displayOutput = display == 0 ? 0 : display;
      return(
        <div className="Display bg-black white tr pv4 ph3 " onClick={()=>handleState({display:1})}>
          <h1 className="f1 ma0">{displayOutput}</h1>
        </div>
      );
    }
  }
  export default Display;