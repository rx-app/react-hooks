import React,{useState,createContext,useContext, Component} from "react";

const CountContext = createContext()

class Foo extends Component{
  render(){
    return (
      <CountContext.Consumer>
        { value => <div>{value}</div> }
      </CountContext.Consumer>
    )
  }
}

class Bar extends Component{
  static contextType = CountContext  //这里必须叫 contextType
  render(){
    let val = this.context 
    return (
      
         <div>{val}</div>
     
    )
  }
}

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
              <Foo></Foo>
              <Bar />
            </CountContext.Provider>
        </div>
    )
}

export default App;
