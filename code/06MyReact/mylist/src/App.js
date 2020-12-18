import React, { Component } from 'react'
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium'



class App extends Component {
  state={
    persons:[
      {id:'ID111',name:'name111',age:111},
      {id:'ID112',name:'name112',age:112},
      {id:'ID113',name:'name113',age:113},
    ],
    otherState:'some other value',
    showPersons:false,
  }

  switchHandler = (newName)=>{
    this.setState( {
      persons:[
        {id:'ID211',name:newName,age:211},
        {id:'ID212',name:'name212',age:212},
        {id:'ID213',name:'name213',age:213},
      ]  
    } )
  }

  nameChangeHandler = (event)=>{
    this.setState( {
      persons:[
        {id:'ID211',name:"name211",age:211},
        {id:'ID212',name:'name212',age:212},
        {id:'ID213',name:'name213',age:event.target.value},
      ]
    })
  }

  togglePersonHandler = ()=>{
    // const doesShow = this.state.showPersons
    // this.setState( {showPersons: !doesShow})
    this.setState( {showPersons: !this.state.showPersons})
  }

  deletePersonHandler = (personIndex)=>{
    console.log(personIndex);

    const persons = [...this.state.persons] //copy
    persons.splice(personIndex,1)

    this.setState( {
      persons:persons
    })
  }

  render() {
    let randomN=Math.floor(Math.random()*3)

    const style = {
      backgroundColor: "pink",
      color: "Red",
      borderRadius:"20px",
      font: "inherit",
      border: "1px solid gold",
      padding: "8px",
      cursor: "pointer",
      ':hover':{
        backgroundColor: 'Blue'
      }
    }

    let persons = null;
      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map(( person,index ) =>{
              return(
                <Person name={person.name}
                        age={person.age}
                        key={person.id}
                        click = {()=>this.deletePersonHandler(index)}
                        change={(event)=>{
                          return this.nameChangeHandler(event)
                        }
                        }
                >{'hide'}</Person>
              )
            })
            }
          </div>
        )
        style.backgroundColor = 'Green'
        style[':hover'] = {
          backgroundColor:'lightblue',
          color:'purp'
        }
      }

      const classes = []
      if (this.state.persons.length <= 2) {
        classes.push('lightblue')
      }

      if (this.state.persons.length <= 1) {
        classes.push('bold','lightblue')
      }

    return (
      <StyleRoot>
        <div className = 'App' >
        <p>This is TMD React</p>
        <p className={classes.join(' ')} > Look👉😲👈Here</p>
        <button onClick={()=>this.switchHandler('NewName')} 
                style={style}
                onClick={this.togglePersonHandler}
        >Hide</button>
        {persons}
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);
