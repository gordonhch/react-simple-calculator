import React, {Component} from 'react';
import NumPanel from './NumPanel';
import OpPanel from './OpPanel';

const Panel = (props) => {
      const {display, handleState} = props;
      return(
        <div className="flex">
          <div className="w-75" >
            <NumPanel 
            display={display} 
            handleState={handleState}
            />
          </div>
          <div className="w-25">
            <OpPanel 
            handleState={handleState}
            />
          </div>
        </div>
      );
    }
  
  export default Panel;