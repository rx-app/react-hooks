import React,{useState,useReducer,useEffect} from "react";
import './app.css'

function App() {
  const [count , setCount] = useState(0)
  useEffect( ()=>{
    console.log(count)
  } )


  return (
    <div  className="App">
      <div>{count}</div>
      <button onClick={ ()=>{ setCount(count+1) } }>点击</button>
    </div>
  );
}

export default App;
