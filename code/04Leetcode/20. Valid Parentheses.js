/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(brackets) {
    const match = {
        "(":")", //对象1
        "{":"}", //对象2
        "[":"]"} //对象3
    let stack = []
    for(let theValue of brackets){
        if(match[theValue]) {
            stack.push(theValue)
            console.log( stack );
        }
        else if (theValue != match[stack.pop()]) {
            console.log( theValue,' with ', match[stack.pop()] );
            return false
        }
    }
    return stack.length == 0
};

brackets="[](){]";
console.log( isValid(brackets) );