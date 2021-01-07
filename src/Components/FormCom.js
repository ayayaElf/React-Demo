import React, {Component} from 'react';
// 表单示例

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleSubmut = this.handleSubmut.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmut(event) {
        alert(`提交的名字 ${this.state.value}`);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmut}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

class EssayForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '请撰写一篇关于你喜欢的 DOM 元素的文章',
        }
        this.handleSubmut = this.handleSubmut.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmut(event) {
        alert(`提交的文章 ${this.state.value}`);
        event.preventDefault();
    }

    handleChange (event) {
        this.setState({
            value: event.target.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmut}>
                <label>
                    文章
                    <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

class FlavorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['椰子']
        };
        this.handleSubmut = this.handleSubmut.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmut(event) {
        alert(`你喜欢的风味是 ${this.state.value}`);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmut}>
                <label>
                    请选择你喜欢的风味：
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="葡萄柚">葡萄柚</option>
                        <option value="酸橙">酸橙</option>
                        <option value="椰子">椰子</option>
                        <option value="芒果">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = name === 'isGoing' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    参与：
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleChange}/>
                </label>
                <br />
                <label>
                    来宾人数
                    <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleChange}/>
                </label>
            </form>
        )
    }
}

export {
    NameForm,
    EssayForm,
    FlavorForm,
    Reservation
};