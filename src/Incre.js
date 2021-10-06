                    // THIS IS ONLY REACT 

// import React, { Component } from 'react'; 

// class Incre extends Component {   
// state = 
// { 
//     count: 0,
//     counts: 0
// }   

// increment = () => {
//       this.setState({       
//       count: this.state.count + 1
//    })  
// };   
// decrement = () => {
//       this.setState({       
//       counts: this.state.counts - 1
//    })  
// };  
// render() {
//      return (      
//        <div style={{textAlign:"center"}}>         
//           <button onClick={this.decrement}>Decrement</button>
//           <span>{this.state.counts}</span> 
//                 <br />
//           <button onClick={this.increment}>Increment</button> 
//           <span>{this.state.count}</span>                 
//        </div>     
//      )   
//    } 
// }  
// export default Incre;


                // THIS IS REDUX
                
                
import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  counter: {
    counter1: 0,
    counter2: {
      innerCount: 0,
    },
  },
};

export const Auth = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  let a;
  switch (type) {
    case ActionTypes.INCREMENT_COUNTER_1:
      a = {
        ...state,
        counter: {
          ...state.counter,
          counter1: state.counter.counter1 +=1,
        },
      };
      return a;
    case ActionTypes.DECREMENT_COUNTER_1:
      a = {
        ...state,
        counter: {
          ...state.counter,
          counter1: state.counter.counter1 -=1,
        },
      };
      return a;
    case ActionTypes.INCREMENT_BY_AMOUNT:
      a = {
        ...state,
        counter: {
          ...state.counter,
          counter1: state.counter.counter1 +=payload,
        },
      };
      return a;
    default:
      return state;
  }
};

export default Incre;