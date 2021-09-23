import React,{useState,createRef,useContext, Component,useRef} from "react";


// class App extends Component{
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





function App() {
    const inputRef = useRef(null)
    
    return (
          <>
            <input type="text" ref={inputRef} />
            <button onClick={ ()=> inputRef.current.focus()  }>点击</button>
          </>
    )
}

export default App;
