import React, { useState } from "react";
// 子组件
function Childs(props) {
  console.log("子组件渲染了");
  return (
    <>
      <button onClick={props.onClick}>改标题</button>
      <h1>{props.name}</h1>
    </>
  );
}
// const Child = React.memo(Childs);


export default function App() {
  const [title, setTitle] = useState("这是一个 title");
  const [subtitle, setSubtitle] = useState("我是一个副标题");
  const callback = () => {
    setTitle("标题改变了");
  };
  const handleInput = (e)=>{ 
    setTitle(e.target.value) 
    console.log(title) 
  }
  return (
    <div className="App">
      <h1>{title}</h1>
      <div><input type="text" value={title} onInput={()=>handInput()} /></div>
      <h2>{subtitle}</h2>
      <button onClick={() => setSubtitle("副标题改变了")}>改副标题</button>
      <Childs  />
      {/* 如果不使用react.memo 这个组件即使不接受任何props，只要父组件重新渲染，这个组件就会自动渲染 */}
    </div>
  );
}
