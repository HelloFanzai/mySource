import React from 'react';
import './Person.css'
import Radium, {StyleRoot} from 'radium'

const Person = (prop) => {
    return(
        <div onClick={prop.click} className = 'Person'  >
            <p>I am {prop.name}, I'm {prop.age} years old, my ID is {prop.id}</p>
            <p  >{prop.name} 👈click</p>
            <button>{prop.children}</button> <br></br>
            <input type='text'
                   onChange={prop.change}
            ></input>

        </div>
    )
}

export default Radium(Person);