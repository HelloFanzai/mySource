import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAdd, createSub } from './Action/action'
import './App.css'

const App = (props) =>{

  return (
    <div>
      Counter:{props.value.state}
      <br></br>
      <button onClick={props.handleAdd} > ➕ </button>
      <button onClick={props.handleSub} > ➖ </button>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {value:state}
}

const maoDispatchToProps = (dispatch) =>{
  return {
    handleAdd(){
      dispatch(createAdd())
    },
    handleSub(){
      dispatch(createSub())
    },
  }
}

export default connect( mapStateToProps,maoDispatchToProps )(App)
// export default (App)