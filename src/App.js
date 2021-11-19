import React, { Component} from "react";
import './app.css'
// 子组件
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:0
    }
  }
  componentDidUpdate(){
    
    console.log(this.state.count)
  }
  componentDidMount(){
    document.body.addEventListener('click', this.changeVal, false);
  }
  changeVal = () => {
      this.setState({
        count: 3
      })
      console.log(this.state.count) // 3 
      //这个地方会log两次3，说明事件被绑定了2次，这个怎么理解呢？？？
  }
  changeCount(){
    let obj = {
        a: 100,
        b: [100, 200, 300],
        c: {
          x: 10
        },
        d: /^\d+$/,
        e: () =>{
          return 1
        },
        f:3,
        g:undefined,
        h:new Date()
    }
    let f = JSON.parse( JSON.stringify(obj) )
    console.log(f)
  }
  render(){
    return (
      <div className="dv">
        <h1>当前计数:{this.state.count}</h1>
        <button onClick={()=>{ this.changeCount() }}>改变数字</button>
      </div>
    )
  }
}
