import React,{useState,useReducer} from "react";

function App() {
  const [count , setCount] = useState(0)
  function handleClick(){
    // console.log(count)
    // setCount(count=>count++)
    setCount(count=>{
      console.log(count)
      count++
      return count
    } )
    // setCount(count++)  //这样会报错，卜能修改原本的state
    console.log(count)
  }

  return (
    <div  className="App">
      <button onClick={ ()=>{handleClick()} }>点击</button>
    </div>
  );
}

export default App;
