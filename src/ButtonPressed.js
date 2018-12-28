//import React, {Component} from 'react';

const ButtonPressed = (state, object) => {
  // console.log(object);
  let temp;

  if (object === "=") {
    if (state.mulResult == "") {
      //at start if opcache ? mulresult is empty opcache = op
      if (state.newOpInput == true) {
        //Op input true
        temp = {
          newNumInput: true,
          newOpInput: true,
          equal: true
        };
      } else if (state.newOpInput == false) {
        //Op input false
        temp = {};
      }
    } else {
      if (state.newOpInput == true) {
        if (state.opCache == "x") {
          temp = {
            numCache: "",
            num: state.mulResult,
            equResult: state.mulResult * state.num,
            newNumInput: false,
            newOpInput: true,
            equal: true,
            //op: object,
            opCache: state.op
          };
        } else if (state.opCache == "/") {
          temp = {
            numCache: "",
            num: state.mulResult,
            equResult: state.mulResult / state.num,
            newNumInput: false,
            newOpInput: true,
            equal: true,
            //op: object,
            opCache: state.op
          };
        }
      } else if (state.mulResult == "") {
        //mulResult empty
        if (state.opCache == "x") {
          temp = {
            numCache: "",
            num: state.mulResult,
            equResult: state.num,
            newNumInput: false,
            newOpInput: true,
            equal: true,
            //op: object,
            opCache: state.op
          };
        } else if (state.opCache == "/") {
          temp = {
            numCache: "",
            num: state.mulResult,
            equResult: state.num,

            newNumInput: false,
            newOpInput: true,
            //op: object,
            equal: true,
            opCache: state.op
          };
        }
        //Op input true
      } else {
        //Op input false
        temp = {
          op: object
        };
      }
    }
  } else if (
    object === "+" ||
    object === "-" ||
    object === "x" ||
    object === "/"
  ) {
    //operator
    console.log(`operator pressed`);
    if (state.mulResult == "") {
      //at start if opcache ? mulresult is empty opcache = op
      if (state.newOpInput == true) {
        //Op input true
        temp = {
          newNumInput: true,
          newOpInput: false,
          op: object,
          opCache: object
        };
      } else {
        //Op input false
        temp = {
          op: object,
          opCache: object
        };
      }
    } else {
      if (state.newOpInput == true) {
        //Op input true
        temp = {
          newNumInput: true,
          newOpInput: false,
          op: object,
          opCache: state.op
        };
      } else {
        //Op input false
        temp = {
          op: object
        };
      }
    }
    // if(state.newOpInput==true){             //Op input true
    //   temp = ({
    //     newNumInput: true,
    //     newOpInput: false,
    //     op: object,
    //     opCache: state.op,
    //   })
    // }
    // else {                                  //Op input false
    //   temp = ({
    //     op: object,

    //   })
    // }
  } else if (
    object === "AC" ||
    object === "C" ||
    object === "+/-" ||
    object === "%"
  ) {
    //modifier
    console.log(`modifier pressed`);
    if (object === "AC") {
      temp = {
        num: "",
        numCache: 1,
        op: "",
        opCache: "x",
        newNumInput: true,
        newOpInput: false,
        mulResult: "1"
      };
    }

    //} else if(object==="0"||object==="1"||object==="2"||object==="3"||object==="4"||object==="5"||object==="6"||object==="7"||object==="8"||object==="9"||object==="0"){                                    //number
  } else {
    //number

    if (state.newNumInput == true) {
      //number new input
      console.log(`start: ${object}`);
      if (state.opCache == "") {
        temp = {
          numCache: object,
          num: object,
          newNumInput: false,
          newOpInput: true
        };
      }
      if (state.mulResult != "") {
        //mulResult exists
        if (state.opCache == "x") {
          temp = {
            numCache: state.num,
            num: object,
            mulResult: state.mulResult * state.num,
            newNumInput: false,
            newOpInput: true
          };
        } else if (state.opCache == "/") {
          temp = {
            numCache: state.num,
            num: object,

            mulResult: state.mulResult / state.num,
            newNumInput: false,
            newOpInput: true
          };
        }
      } else if (state.mulResult == "") {
        //mulResult empty
        if (state.opCache == "x") {
          temp = {
            numCache: state.num,
            num: object,
            mulResult: state.num,
            newNumInput: false,
            newOpInput: true
          };
        } else if (state.opCache == "/") {
          temp = {
            numCache: state.num,
            num: object,
            mulResult: state.num,
            newNumInput: false,
            newOpInput: true
          };
        }
      }
      if (state.incResult == "") {
        if (state.opCache == "+") {
          temp = {
            numCache: state.num,
            num: object,
            incResult: 1 * state.incResult + 1 * state.num,
            newNumInput: false,
            newOpInput: true
          };
        } else if (state.opCache == "-") {
          temp = {
            numCache: state.num,
            num: object,
            incResult: state.incResult - state.num,
            newNumInput: false,
            newOpInput: true
          };
        }
      }

      // temp = ({
      //   num: object,
      //   numCache: state.num,
      //   newNumInput: false,
      //   newOpInput: true,
      // });
    } else if (state.newNumInput == false) {
      if (state.opCache == "") {
        temp = {
          numCache: state.num + object,
          num: state.num + object
        };
      } else if (state.opCache != "") {
        temp = {
          num: state.num + object,
          newOpInput: true
        };
      }
      // temp = {
      //   num: state.num + object,
      //   newOpInput: true
      // };
    }
  }

  console.log(`end: `);
  console.log(temp);
  return temp;
};
export default ButtonPressed;
