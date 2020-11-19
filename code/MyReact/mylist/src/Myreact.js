import React from "react";
import "../src/styles.css";
import Person from '../src/Person/Person';


class Myreact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { name: 'Nmae1', age: 21 },
                { name: 'Nmae2', age: 22 },
                { name: 'Nmae3', age: 23 }
            ],
            showState: false,
            theChange: 'Raect'
        }
    }

    switchHandler = (theName) => {
        this.setState(
            {
                persons: [
                    { name: 'wow~newName', age: 121 },
                    { name: 'Nmae12', age: 122 },
                    { name: 'Nmae13', age: 123 }
                ],
                showState: false,
                theChange: 'Raect'
            }
        )
    }

    changeH1 = (e) => {
        this.setState(
            {
                persons: [
                    { name: e.target.value, age: 21 },
                    { name: 'Nmae2', age: 22 },
                    { name: 'Nmae3', age: 23 }
                ],
                showState: false,
                theChange: e.target.value
            }
        )
    }

    changFather = (e) => {

    }


    render() {

        return (
            <div class='App'>
                <h1 theChange={this.changeH1} >hi,{this.state.theChange}</h1>
                <div>That's,my React</div>
                <input onChange={this.changeH1}  ></input>
                <br></br>
                <button onClick={this.switchHandler.bind('wocao')} >Button</button>
                <Person
                    theOnClick={this.switchHandler}
                    theName={this.state.persons[0].name}
                    theAge={this.state.persons[0].age}
                    theInPutChange={this.changeH1}
                />
                <br></br>

                <Person
                    theName={this.state.persons[1].name}
                    theAge={this.state.persons[1].age}
                    theInPutChange={this.changeH1}
                />
                <br></br>

                <Person
                    theName={this.state.persons[2].name}
                    theAge={this.state.persons[2].age}
                    theInPutChange={this.changeH1}
                />
                <br></br>

            </div>
        );
    }
}
export default Myreact;