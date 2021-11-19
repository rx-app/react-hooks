import React, { Component} from "react";
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
    // 点击后count 为100
    for ( let i = 0; i < 100; i++ ) {
        this.setState( (prev)=>{
          return {
            count:prev.count+1
          }
        } );
    }
    
    // 点击后count 为1
    // for ( let i = 0; i < 100; i++ ) {
    //     this.setState( { count: this.state.count + 1 } );
    // }
    

  }
  render(){
    return (
      <>
        <h1>当前计数:{this.state.count}</h1>
        <button onClick={()=>{ this.changeCount() }}>改变数字</button>
      </>
    )
  }
}
