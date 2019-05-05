import React from 'react'
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom'

export default class BatchedDemo extends React.Component {
  state = {
    number: 0,
  }

  handleClick = () => {
    // 主动`batchedUpdates`
    // setTimeout(() => {
    //   this.countNumber()
    // }, 0)

    // setTimeout中没有`batchedUpdates`
    /*
    setTimeout(() => {
      batchedUpdates(() => this.countNumber())
    }, 0)
    */

    // 事件处理函数自带`batchedUpdates`
    this.countNumber()
  }

  countNumber() {
    const num = this.state.number
    this.setState({
      number: num + 1,
    })
    console.log(this.state.number)
    this.setState({
      number: num + 2,
    })
    console.log(this.state.number)
    this.setState({
      number: num + 3,
    })
    console.log(this.state.number)
  }

  componentDidMount(){
    this.setState({
      number: 1000,
    });
    console.log(this.state.number);
    this.setState({
      number: 100012,
    });
    setTimeout(() => {
      console.log(this.state.number);
    },0);
    
  }

  render() {
    return <button onClick={this.handleClick}>Num: {this.state.number}</button>
  }
}
