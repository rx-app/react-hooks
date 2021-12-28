import React,{useState} from "react";
import MyHeader from './components/Header';
import AddInput from './components/AddInput';

function App() {
  let [show,setShow] = useState(false)
  
  return (
    <div>
      <MyHeader openInput={ ()=> setShow(!show) }/>
      <AddInput isShow={ show } />
    </div>
  );
}
export default App;
