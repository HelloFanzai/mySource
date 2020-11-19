/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


class MinStack {
    constructor() {
        this.stack = [];
    }
    push(x) {
        this.stack.push(x);
    }
    pop() {
        this.stack.pop();
    }
    top() {
        return this.stack[this.stack.length-1];
    }
    // getMin() {
    //     let theMin = [...this.stack];
    //     temA=temA.sort((a, b) => a - b)
    //     return temA[0]
    // }
    getMin() {
        let theMin = Infinity;
        for (let i = 0; i < this.stack.length; i++) {
            if ( theMin > this.stack[i] ) {
                theMin = this.stack[i] 
            }
        }
        return theMin
        // return Math.min(...this.stack)
    }
    myArray() {
        return this.stack
    }
}


// class MinStack {
//     constructor() {
//         this.stack = []; this.minArr = [Infinity]; this.min = Infinity;
//     }
//     push(x) {
//         this.stack.push(x);
//         this.min = Math.min(x, this.min);
//         this.minArr.push(this.min);
//     }
//     pop() {
//         this.stack.pop();
//         this.minArr.pop();
//         this.min = this.minArr[this.minArr.length-1];
//     }
//     top() {
//         return this.stack[this.stack.length-1];
//     }
//     getMin() {
//         return this.minArr[this.minArr.length-1];
//     }
// }


let myA= new MinStack;
myA.push(-2)
myA.push(0)
myA.push(-3)
console.log( myA.myArray() );
console.log( myA.getMin() );
console.log( myA.pop(),'pop' );
console.log( myA.top() );
console.log( myA.getMin() );
console.log( myA.myArray() );
