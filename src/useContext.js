import React,{useState,createContext,useContext} from "react";
import './app.css'

const CountContext = createContext()

function Counter(){
  const count = useContext(CountContext)  //一句话就可以得到count
  return (<h2>{count}</h2>)
}

function App() {
  const [ count , setCount ] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <CountContext.Provider value={count}>
              <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default App;
