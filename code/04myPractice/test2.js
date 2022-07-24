
let items = [
    {
        "id": "id001",
        "items": "item1",
        "price": "9999",
        "date": "2022-07-11T12:10:04",
        "note": "note01"
    },
    {
        "id": "id002",
        "items": "item2",
        "price": "1002",
        "date": "2022-07-01T11:10:04",
        "note": "note02"
    },
    {
        "id": "id003",
        "items": "item3",
        "price": "1003",
        "date": "2022-03-13T12:03:33",
        "note": "note03"
    },
    {
        "id": "id001",
        "items": "item1",
        "price": "9999",
        "date": "2022-07-11T12:10:04",
        "note": "note01"
    },
    {
        "id": "id001",
        "items": "item1",
        "price": "9999",
        "date": "2022-07-11T12:10:04",
        "note": "note01"
    }
]

var obj = {};
items = items.reduce(function (item, next) {
    obj[next.id] ? 1 : obj[next.id] = item.push(next);

    // if (!obj[next.id]) {
    //     // item.push(next)
    //     obj[next.id] = item.push(next)
    // } 

    console.log(obj);
    return item;
}, []);

console.log( items );


