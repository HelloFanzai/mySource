function inventoryList() {
    // write your code here
    let items = []
    let theObj = {
        add: function (name) {
            const names = items.filter(item => item === name)
            if (names.length === 0) {
                items.push(name)
            }
        },
        remove: function (name) {
            items = items.filter(item => item !== name)
        },
        getList: function () {
            console.log(items.join(','))
            // return items
        }
    }
    // console.log('hi');
    return theObj

}

let thet = inventoryList()

thet.add('Shirt')
thet.add('Trouser')
thet.getList()
thet.remove('Shirt')
thet.getList()



let theQuestion = `2. JavaScript: Inventory List
In this challenge, the task is to implement a function inventoryList such that: 

it maintains the collection of all item names existing in an inventory, 
where each item is uniquely identified by a name.

returns a new object, with three methods:

add(name) - The string name parameter is passed, and it is added to the collection. 
It is guaranteed that at any time, if an item is in the collection, 
then no other item with the same name will be added to the collection.

remove(name) - The string name parameter is passed, 
and this item is removed from the collection if it exists. 
If it does not exist, nothing happens.

getList() - This returns an array of names of items added so far. 
The names are returned in the order the corresponding items were added.



Your implementation of the function will be tested by a stubbed code on several input files. 
Each input file contains parameters for the functions call. 
The functions will be called with those parameters, 
and the result of their executions will be printed to the standard output by the provided code. 
The stubbed code joins the strings returned by getList function by a comma and prints to the standard output. 
If getList returns an empty array, the stubbed code prints 'No Items'.

Constraints:

The size of the collection will not exceed 10 at any point.
All names passed to add(name) and remove(name) are non-empty.`