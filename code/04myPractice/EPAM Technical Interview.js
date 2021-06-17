const employees = [
    { id: 100, name: 'Jose', managerId: 100 },
    { id: 200, name: 'Viktar', managerId: 100 },
    { id: 300, name: 'Pavel', managerId: 200 },
    { id: 400, name: 'Mary', managerId: 200 },
    { id: 500, name: 'Mary2', managerId: 400 },
    { id: 600, name: 'Mary3', managerId: 500 },
    { id: 700, name: 'Mary4', managerId: 600 },
    { id: 800, name: 'Mary6', managerId: 700 },
    { id: 900, name: 'Mary6', managerId: 800 },
    { id: 1000, name: 'Mary6', managerId: 900 },
    { id: 1100, name: 'Mary6', managerId: 1000 },
    { id: 1200, name: 'Mary6', managerId: 1100 },
    { id: 1300, name: 'Mary6', managerId: 1200 },
    { id: 1400, name: 'Mary6', managerId: 1300 },
    { id: 1500, name: 'Mary6', managerId: 1400 },
    { id: 1600, name: 'Mary6', managerId: 1500 },
    { id: 1700, name: 'Mary6', managerId: 1600 },
    { id: 1800, name: 'Mary6', managerId: 1700 },
    { id: 1900, name: 'Mary6', managerId: 1800 },
    { id: 2000, name: 'Mary6', managerId: 1900 },
    { id: 2100, name: 'Mary6', managerId: 2000 },
    { id: 2200, name: 'Mary6', managerId: 2100 },
    { id: 2300, name: 'Mary6', managerId: 2200 },
    { id: 2400, name: 'Mary6', managerId: 2300 },
    { id: 2500, name: 'Mary6', managerId: 2400 },
    { id: 2600, name: 'Mary6', managerId: 2500 },
    { id: 2700, name: 'Mary6', managerId: 2600 },
    { id: 2800, name: 'Mary6', managerId: 2700 },
    { id: 2900, name: 'Mary6', managerId: 2800 },
    { id: 3000, name: 'Mary6', managerId: 2900 },
    { id: 3100, name: 'Mary6', managerId: 3000 },
    { id: 3200, name: 'Mary6', managerId: 3100 },
    { id: 3300, name: 'Mary6', managerId: 3200 },
    { id: 3400, name: 'Mary6', managerId: 3300 },
    { id: 3500, name: 'Mary6', managerId: 3400 },
    { id: 3600, name: 'Mary6', managerId: 3500 },
    { id: 3700, name: 'Mary6', managerId: 3600 },
    { id: 3800, name: 'Mary6', managerId: 3700 },
    { id: 3900, name: 'Mary6', managerId: 3800 },
    { id: 4000, name: 'Mary6', managerId: 3900 },
    { id: 4100, name: 'Mary6', managerId: 4000 },
    { id: 4200, name: 'Mary6', managerId: 4100 },
    { id: 4300, name: 'Mary6', managerId: 4200 },
    { id: 4400, name: 'Mary6', managerId: 4300 },
    { id: 4500, name: 'Mary6', managerId: 4400 },
    { id: 4600, name: 'Mary6', managerId: 4500 },
    { id: 4700, name: 'Mary6', managerId: 4600 },
    { id: 4800, name: 'Mary6', managerId: 4700 },
    { id: 4900, name: 'Mary6', managerId: 4800 },
];
let theAnswer = []
// theAnswer.indexOf
function getManagers(employees, id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == id) {
            if (employees[i].id != employees[i].managerId) {
                id = employees[i].managerId
                theAnswer.push(employees[i].managerId)
                return getManagers(employees, id)
            } else {
                return theAnswer
            }
        }
    }
}

console.log(getManagers(employees, 4900));//return all employees' managerId





// const employees = [
//     { id: 100, name: 'Jose', managerId: 100 },
//     { id: 200, name: 'Viktar', managerId: 100 },
//     { id: 300, name: 'Pavel', managerId: 200 },
//     { id: 400, name: 'Mary', managerId: 200 },
//     { id: 500, name: 'Mary2', managerId: 200 }
// ];

// let theAnser=[]
// let theTargetID=00

// let filteredData = employees.find(data => data.id == theTargetID)
// while (filteredData.managerId!=filteredData.id) {
//     filteredData = employees.find(data => data.id == theTargetID);
//     if (filteredData) {
//         theAnser.push(filteredData.id)
//         theTargetID=filteredData.managerId
//     } 
// }
// console.log(theAnser);