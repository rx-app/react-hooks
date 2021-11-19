import React, { Component} from "react";
// 子组件
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数: {this.state.number}</h2>
        <button onClick={e => this.changeText()}>改变数字</button>
      </div>
    )
  }
  componentDidUpdate() {
    // 方式二: 获取异步更新的state
    console.log(this.state.number);
  }
  changeText() {
    this.setState({
      number:this.state.number + 1
    })
  }
}
