
const employees = [
    { id: 100, name: 'Jose', managerId: 100 },
    { id: 200, name: 'Viktar', managerId: 100 },
    { id: 300, name: 'Pavel', managerId: 200 },
    { id: 400, name: 'Mary', managerId: 200 },
    { id: 500, name: 'Mary2', managerId: 400 },
    { id: 600, name: 'Mary3', managerId: 500 },
    { id: 700, name: 'Mary4', managerId: 500 },
    { id: 800, name: 'Mary5', managerId: 600 },
    { id: 900, name: 'Mary6', managerId: 700 },
];

let theTargetID = 900

function theFn(theTargetID) {
    let theAnser = []
    let filteredData = employees.find(data => data.id == theTargetID)
    while (filteredData.managerId != filteredData.id) {
        filteredData = employees.find(data => data.id == theTargetID);
        if (filteredData) {
            theAnser.push(filteredData.managerId)
            theTargetID = filteredData.managerId
        }
    }
    theAnser.pop()
    // theAnser.length--
    return theAnser
}
console.log( theFn(theTargetID)  );