const employees = [
    { id: 100, name: 'Jose', managerId: 100 },
    { id: 200, name: 'Viktar', managerId: 100 },
    { id: 300, name: 'Pavel', managerId: 200 },
    { id: 400, name: 'Mary', managerId: 200 },
    { id: 400, name: 'Mary2', managerId: 200 }
];
let theAnswer = []
theAnswer.indexOf
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

console.log(getManagers(employees, 400));//return all employees' managerId