import React, {Component} from 'react';
const NumButton = (props) => {
  
  const {handleState, children} = props;
  let renderChildren = null;
  let widthType = '';
  if (children == 0) {
    renderChildren = (
    <div >
      <div className="w-50 dib"><h1>{children}</h1></div>
      <div className="w-50 dib"></div>
    </div>
    );
    widthType = "w-two-thirds";
  } else {
    renderChildren = <h1>{children}</h1>;
    widthType = "w-third";
  }
  return (
    <div 
    className={`Button ${widthType} pointer b--dark-gray bg-dark-gray white`} 
    onClick={()=>handleState(children)}
    >
      {renderChildren}
    </div>
  )
}

  
  
  export default NumButton;