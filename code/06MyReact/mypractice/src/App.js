import React, { Component } from 'react'
// import TheChild from './theChild/theChild'
import TheChild from './theChild/theChild'
import './App.css'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={ 
      inputValue:'',
      passValue:''

    }
  }


  addHandler(e){
    this.setState({
      passValue:this.state.inputValue
    })
  }

  inputHandler(e){
    this.setState({
      inputValue:e.target.value
      
    })


  }

  render() {
    return (
      <div className='theFatherDiv' >
        <input onChange={(e)=>this.inputHandler(e)} value={ this.state.inputValue }  ></input>
        <br></br>
        <button onClick={(e)=>this.addHandler(e)} >Click</button>
        <br></br>
        <TheChild inputValue={this.state.passValue} ></TheChild>
        {/* <TheChild inputValue={this.state.passValue} /> */}

      </div>
    )
  }
}
