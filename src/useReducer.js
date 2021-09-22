import React,{useState,useReducer} from "react";

function App() {

  const [count,countDispath] = useReducer( (state,action)=>{
    
    switch (action.type) {
      
      case 'add': return state+1
      case 'minus': return state-1
      default:return state
    }
  },0 )

  function add(){
    
    countDispath({type:'add'})
  }
  function minus(){
    countDispath({type:'minus'})
  }

  return (
    <div  className="App">
      <div>{count}</div>
      <button onClick={ ()=>{add()} }>+</button>
      <button onClick={ ()=>{minus()} }>-</button>
    </div>
  );
}

export default App;
