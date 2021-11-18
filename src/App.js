import React, { useState ,useCallback} from "react";
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
const Child = React.memo(Childs);
export default function App() {
  const [title, setTitle] = useState("这是一个 title");
  const [subtitle, setSubtitle] = useState("我是一个副标题");
  const [c,setC] = useState(0)
  const [d,setD] = useState(0)
  const callback = () => {
    setTitle("标题改变了aaa");
  };
  let memoFn = useCallback(callback,[c])
  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h2>{c}</h2>
      <h2>{d}</h2>
      
      <button onClick={() => setC(c=>c+1)}>add</button>
      <button onClick={() => setD(d=>d+1)}>add</button>
      <button onClick={() => setSubtitle("副标题改变了")}>改副标题</button>
      <Child onClick={memoFn} name="桃桃" />
    </div>
  );
}
