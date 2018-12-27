import React, {Component} from 'react';
import OpButton from './OpButton';
class OpPanel extends Component {
    constructor(props){
      super(props);
    }
    OpButtonArray = ["/","x","-","+","="]
    render(){
      const {handleState} = this.props;
      return(
        <div>
          {this.OpButtonArray.map(i => 
          <OpButton key={i} handleState={handleState}>{i}</OpButton>
          )}
        </div>
      );
    }
  }
  export default OpPanel;