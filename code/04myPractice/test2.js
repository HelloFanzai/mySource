function myFn(theI) {
    let theObj = {
        add:function(theInputOfAdd) {
            console.log('did add');
            return theInputOfAdd
        },
        sub:function(theInputOfSub) {
            console.log('did add');
            return theInputOfSub
        },
        get:function() {
            console.log('did get');
        }
    }
    console.log('hi');
    return theObj
}

let theInput = 123
let theF = myFn()
// theF.add(theInput)
// theF.sub(theInput)
// theF.get()
theF

// var Person = function() {};

function thePerson() {
    return 666
}

thePerson.prototype.setAge = function(age){
    this.age = age; 
    return this;
}
thePerson.prototype.setWeight = function(weight){
    this.weight = weight; 
    return this;
}
thePerson.prototype.get = function(){
    return `{age: ${this.age}, weight: ${this.weight}}`;
}

var person = new thePerson();
var des = person.setAge(10).setWeight(30).get();
// console.log(des); // {age: 10, weight: 30}
// console.log(thePerson()); // 666
