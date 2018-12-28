import React, {Component} from 'react';
class OpButton extends Component {
    constructor(props){
      super(props);
    }
    render(){
      const {handleState, operator, children} = this.props;
      const btnClass = "Button w-100 ba b--gold pointer";
      const btnDefaultClass = "bg-gold";
      const btnHighlightClass = " bg-white gold";
      let appliedClass = btnClass.concat(" ", children !== operator ?  btnDefaultClass :  btnHighlightClass);
      return(
        <div className={appliedClass} onClick={()=>handleState(children)}>
          <h1>{this.props.children}</h1>
        </div>
      );    
    }
  }
  export default OpButton;