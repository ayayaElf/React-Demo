import React, {Component} from 'react';
// 类组件
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      // 不能直接修改state；state的更新可能是异步的；state的更新会被合并
      this.setState({
        date: new Date()
      })
    }

    render() {
      return (
        <div>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

export default Test;