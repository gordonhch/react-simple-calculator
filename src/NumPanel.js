import React, {Component} from 'react';
import NumButton from './NumButton';

const NumPanel = (props) => {
    const {display, handleState} = props;

    let buttonArray = ["", "+/-","%","7","8","9","4","5","6","1","2","3","0","."];
    
      
      buttonArray = ["AC", "+/-","%","7","8","9","4","5","6","1","2","3","0","."];
      return(
        <div className="h-100 flex flex-wrap ">
          {buttonArray.map(i => 
            <NumButton key={i} handleState={handleState}>{i}</NumButton>
          )}
        </div>
      );
    }
  
  export default NumPanel;