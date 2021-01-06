import React, {Component} from 'react';

// 事件处理组件
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }
        // 为handleClick绑定this
        // this.handleClick = this.handleClick.bind(this);
    }

    // 这种写法注意必须绑定this
    // handleClick() {
    //     this.setState(state => ({
    //         isToggleOn: !state.isToggleOn
    //     }))
    // }

    //  或使用以下这种写法就可不用绑定this，不过改写法是实验性语法
    handleClick = (props) => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                {/* 事件处理程序传递参数 */}
                {/* <button onClick={(e) => this.handleClick('props', e)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button> */}
                {/* <button onClick={this.handleClick.bind(this, 'props')}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button> */}
            </div>
        )
    }
}

export default Test;