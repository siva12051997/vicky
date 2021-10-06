import React, { Component } from "react";
import  ReactDOM  from "react-dom";
// import BoxCon from "./container/box-container.js";
// import Box from "./component/box.js";
import Incre from "./Incre";


class App extends Component {
  render(){
    return(
      <div>
        <Incre />
         {/* <BoxCon />
         <Box /> */}
      </div>
    )
  }
}
export default App;