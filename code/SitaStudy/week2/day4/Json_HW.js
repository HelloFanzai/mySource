let theJson = {
    "DATA": [{ "id": 11, "name": "ajax", "subject": "OR", "mark": 63 },
    { "id": 12, "name": "javascript", "subject": "OR", "mark": 63 },
    { "id": 13, "name": "jquery", "subject": "OR", "mark": 63 },
    { "id": 14, "name": "ajax", "subject": "OR", "mark": 63 },
    { "id": 15, "name": "jquery", "subject": "OR", "mark": 63 },
    { "id": 16, "name": "ajax", "subject": "OR", "mark": 63 },
    { "id": 20, "name": "ajax", "subject": "OR", "mark": 63 }], "COUNT": "120"
}

function newAdd() {
    let arr = {}
    let theResult = []
    let theData = theJson.DATA
    for (var i in theData) {
        if (arr[theData[i].name]) {
            arr[theData[i].name].total = Number(arr[theData[i].name].total) + Number(theData[i].mark);
        } else {
            arr[theData[i].name] = {
                total: theData[i].mark
            }
        }
    }
    return arr
}
console.log(newAdd());
let theSample = [
    { "name": "ajax", "total": "99" },
    { "name": "jquery", "total": "99" },
    { "name": "javascript", "total": "99" }
]


function theUnique() {
    var lookup = {};
    var items = theJson.DATA;
    var result = [];

    for (var item, i = 0; item = items[i++];) {
        var theName = item.name;

        if (!(theName in lookup)) {
            lookup[theName] = 1;
            result.push(theName);
        }
    }
    console.log(result);
    console.log(lookup);
}
// theUnique()

function myAdd() {
    let forCheck = {}
    let theData = theJson.DATA
    console.log(theData);
    for (let i = 0; i < theData.length; i++) {
        if (!forCheck[theData[i]]) {
            console.log(theData[i], '!!');
        }
        theData[i];
        console.log(theData[i], i);
    }


}
myAdd()
