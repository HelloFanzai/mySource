import React, { Component } from 'react'

const withStorage = WrappedComponent => {
    return class Enhancer extends WrappedComponent {

        componentWillMount() {
            // 可以打印this，看一看，相当于继承了传过来的组件，可以直接操作state，事件等
            console.log(this)
        }

        toSubmit = () => {
            alert("我是hoc的 toSubmit")
        }

        valueChange = (e) => {
            let value = e.target.value;
            console.log(value)
            this.setState({
                value
            })
        }
        _alert = () =>{
            alert("Hey, You Click The Button")
        }

        render() {
            return super.render();
        }
    }
}
export default withStorage
