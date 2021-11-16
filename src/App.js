import React,{useState,useEffect,createContext,useContext} from "react";
import Counter from "./Child";

import CountContext from './context'



function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}
export default Example;
