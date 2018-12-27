//import React, {Component} from 'react';

const ButtonPressed = (state, object) =>{

    switch(object){
        case "AC": 
        case "C":
        case "+/-":
        case "%":
        case "+":
        case "-":
        case "x":
        case "/":
        case "=":
        break;

        default:
            console.log(object);
            return({display:object});
    }
    
    console.log(`button pressed: ${object}`);
  }
  export default ButtonPressed;