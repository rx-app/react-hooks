import React,{useState} from "react";
import Test from './components/Test'

function App() {
  const [title, setTitle] = useState('标题');
  const changeTitle = ()=>{
    setTitle('标题变了')
  }
  return (
    <div>
      <Test title={title} changeTitle={changeTitle} />
    </div>
  );
}
export default App;
