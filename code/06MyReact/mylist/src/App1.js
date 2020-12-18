import React, { Component } from 'react'
import './App.css';

class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 66};
  }
 
  tick() {
    this.setState((prevState) =>{
      if(prevState.secondsElapsed===0){
        return ({
          secondsElapsed: 0
        })
      }
      else 
       return ({
        secondsElapsed: prevState.secondsElapsed -1
       })
    });
  }
 handleClick(){
   clearInterval(this.interval);
 }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
 
  componentWillUnmount() {
    clearInterval(this.interval);
  }
 
  render() {
    return (
      <React.Fragment>
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        <button onClick={()=>this.handleClick()}>Stop Count Vote</button>
      </React.Fragment>

    );
  }
}

export default App1;

