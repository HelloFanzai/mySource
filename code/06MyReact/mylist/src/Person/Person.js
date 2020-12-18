import React from 'react';
import "../styles.css";

const Person = (props) =>{
    // Div must write with return in soam line
 
  return <div className='Person' >
      
    <p onClick={props.theOnClick} >I'm {props.theName}, 我今年{props.theAge}岁 </p>
    <input onChange={props.theInPutChange}  ></input>   
    <br></br>
    </div>
    
}

export default Person