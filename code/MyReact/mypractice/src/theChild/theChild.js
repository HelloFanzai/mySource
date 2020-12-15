import React, { Component } from 'react'
import './theChild.css'

export default class theChild extends Component {

    constructor(props){
        super(props);
        this.state={ 
            inputValue:'See here',
        }
        
    }

    render() {
        return (
            <div className='theChildDiv' >
                <h1  > {this.state.inputValue} </h1>
                <h1>{this.props.inputValue}</h1>
            </div>
        )
    }
}
