let arr = [
    { "id": "id001", "items": "item1", },
    { "id": "id002", "items": "item2", },
    { "id": "id003", "items": "item3", },
    { "id": "id001", "items": "item1", },
    { "id": "id001", "items": "item1", },
]

var result1 = [];
var obj1 = {};
for (var i = 0; i < arr.length; i++) {
    if (!obj1[arr[i].id]) {
        result1.push(arr[i]);
        obj1[arr[i].id] = true;
    }
}
console.log("No.1-obj1:", obj1);
console.log("No.1:-result1", result1);

//---------------------------------------------------

var obj2 = {};
let result2 = arr.reduce((theAnswer, theItemNow) => {
    obj2[theItemNow.id] ? 1 : obj2[theItemNow.id] = theAnswer.push(theItemNow);

    // if (!obj2[theItemNow.id]) {
    //     theAnswer.push(theItemNow)
    //     obj2[theItemNow.id] = true
    //     ////or 简写：
    //     // obj2[theItemNow.id] = theAnswer.push(theItemNow)
    // } 

    return theAnswer;
}, []);

console.log('No.2-obj2:', obj2);
console.log('No.2-result2:', result2);

//-------------------------------

const result3 = arr.filter((thing, index, self) =>
    (index === self.findIndex((t) => (t.id === thing.id)))
    //箭头函数返回内容涉及 对象（Obj）
    //需要用 圆括号() 包起表达式，因为和函数体的{ ... }有语法冲突
)
console.log('result3:', result3)

const result3_2 = arr.filter((thing, index, self) => {
    return index === self.findIndex((t) => { return t.id === thing.id })
}
    //箭头函数返回内容涉及 对象（Obj）
    //需要用 圆括号() 包起表达式，因为和函数体的{ ... }有语法冲突, 或用花括号{} 加 return
)
console.log('result3_2:', result3_2)


let theArr1 = [1, 3, 2]
let theArr2 = [11, 33, 22]
let theArr3 = [111, 333, 222]

theArr1.sort((a, b) => { return a - b })
theArr2.sort((a, b) => a - b)  //箭头函数 只有一句表达式 可以省略括号和 return
theArr3.sort((a, b) => (a - b)) //箭头函数 只有一句表达式 使用圆括号 不能加 return

console.log(theArr1);
console.log(theArr2);
console.log(theArr3);
let arr33 = [11,33,22,44]
let new33 = []
new33 = arr33.map( (v,i) => {
    if (v>11) {
        
        return v+=1
    } else {
        
        return v-=2
    }
})
console.log(new33,arr33);


