
let theObject = {
    'a0': 'name11',
    '1a': 'name222',
    '属性1': 123,
    '属性2': 1234
}
console.log(theObject.a0);

let theMap = new Map([[1, 2], [3, 4]])
console.log(theObject);
console.log(theMap);

//https://www.jianshu.com/p/94cf51649517
// es6提供了一个Map类，这是新增的一个数据结构，
// 用起来有点像Object，这二者到底有什么区别呢？
// Object本质上是哈希结构的键值对的集合，
// w它只能用字符串、数字或者Symbol等简单数据类型当作键，这就带来了很大的限制。