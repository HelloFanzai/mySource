
const employees = [
    { id: 100, name: 'Jose', managerId: 100 },
    { id: 200, name: 'Viktar', managerId: 100 },
    { id: 300, name: 'Pavel', managerId: 200 },
    { id: 400, name: 'Mary', managerId: 200 },
    { id: 500, name: 'Mary2', managerId: 200 }
];

let theAnser=[]
let theTargetID=500

let filteredData = employees.find(data => data.id == theTargetID)
while (filteredData.managerId!=filteredData.id) {
    filteredData = employees.find(data => data.id == theTargetID);
    if (filteredData) {
        theAnser.push(filteredData.id)
        theTargetID=filteredData.managerId
    } 
}
console.log(theAnser);