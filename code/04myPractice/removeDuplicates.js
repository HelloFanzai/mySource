// let theArr = [1, 2, 2, 3, 3, 4]
let theArr = [999, 123, 5, 5, 5, 5, 0, 0, 999]
//index:       0   1  2 3  4 5  6 7 8
// theNum=2  index=3
// theArr.indexOf(theNum)
// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。

let theResult1
let theStatus
theResult1 = theArr.filter((theNum, index) => {
    return theArr.indexOf(theNum) == index
})
console.log(theResult1);
// filter()把传入的函数依次作用于每个元素，不会改变原数组
// 然后根据返回值是true还是false决定保留还是丢弃该元素。

let theResult2
theResult2 = [...new Set(theArr)];
console.log('第二种：', theResult2);
// Using the Set constructor and the spread syntax from ES6


let theResult3 = []
function removeDuplicates(Mia姐) {
    let theObj = {}

    for (const theNum of Mia姐) {
        
        if ( theObj[theNum] ) {
            // console.log('theNum=',theNum,theObj[theNum], '在');
            theObj[theNum]++
        } else {
            // console.log('theNum=',theNum,theObj[theNum], '不在');
            theObj[theNum] = 1
            theResult3.push(theNum)
        }
    }
    console.log( 'theObj=',theObj );
    return theResult3
}
console.log(removeDuplicates(theArr));


let theResult4 = []
theResult4 = theArr.sort().reduce(function (a, b) {
    if (b != a[0]) {
        a.unshift(b)
    } 
    return a
}, []).reverse()
console.log('第4种：',theResult4);

