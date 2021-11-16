import React,{useState,createRef,useContext, Component,useRef, forwardRef} from "react";


// class Foo extends Component{
//   inputRef = createRef();
//   render(){
//     return (
//       <>
//         <input type="text" ref={this.inputRef} />
//         <button onClick={ ()=> this.inputRef.current.focus()  }>点击</button>
//       </>
//     )
//   }
// }

const Foo = forwardRef((params,ref)=> {
  // const inputRef = useRef(null)
  return (
    <>
      <input type='text' ref={inputRef} />
      <button onClick={ ()=> inputRef.current.focus() }>点击</button>
    </>
  )
})





function App() {
    const fooRef = useRef(null)
    
    return (
          <>
            <Foo ref={fooRef}/>
            {/* 用ref获取子组件实例 但是组件时函数组件时，不能使用 */}
            <button onClick={ ()=> fooRef.current.inputRef.current.focus()  }>点击</button>
          </>
    )
}

export default App;
