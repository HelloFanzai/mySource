        //toString 数组转换成字符串
        //split('')  把字符串的每一个字符作为元素保存成数组
        //reverse 把数组倒叙
        //join("") 把数组转换成字符串
        // slice():方法可从已有的数组中返回选定的元素,arrayObject.slice(start,end)
        // slice()方法并不会修改数组，而是返回一个子数组
        // arrayObject.splice(index,howmany,item1,.....,itemX)
        // splice() 方法用于添加或删除数组中的元素，修改原数组，可替换,插入元素
        //     arrayObject.splice(index,howmany,item1,.....,itemX)
        var s1 = "America";
        console.log(s1.substring(2,5)) //eri
        // substring() 方法用于提取字符串中介于两个指定下标之间的字符。 
        // substring() 方法返回的子串包括开始处的字符，但不包括结束处的字符。
        s1.lastIndexOf('a')
        //lastIndexOf() 方12法可返回一个指定的字符串值最后出现的位置
        stringObject.replace(regexp/substr,replacement) //只能用于string
        // trim() 方法用于删除字符串的头尾空白符
        // arrayObject.concat(arrayX,arrayX,......,arrayX)
        // concat() 方法用于连接两个或多个数组
        console.log( [...a,...b] ); //ES6 连接数组

        // var s = "kadfjkajfkhgofqnmvc";
        // console.log(Array.from(s).sort().join(""));//aacdfffghjjkkkmnoqv
        // console.log(Array.from(s).sort().reverse().join(""));//vqonmkkkjjhgfffdcaa
        //字符串排序

        //数组填充
        // let theArray=new Array(10).fill(0)

        //ES6 去重
        // a1=[1,2,2,3,3,3,4,4,4,4]
        // let b1 = [...new Set(a1)]
        // console.log(b1);   //[ 1, 2, 3, 4 ]

        // 用 spread operator(展开运算符) 获得最大或最小
        const arr = [2, 8, 15, 4]; 
        Math.max(...arr); // 15 
        Math.min(...arr); // 2  

        //parseInt 变成数字
        // thes1=112; theS2=[...(thes1+"" )]; //[ '1', '1', '2' ]
// //十进制转其他
        // var x=110;
        // x.toString(2);
        // x.toString(8);
        // x.toString(16);
        // x.toString(32);

// //其他转十进制
        // var x='110';
        // parseInt(x,2);
        // parseInt(x,8);
        // parseInt(x,16);

        console.log( (5/3).toFixed(4) );  //1.6667
        // toFixed() 方法可以将数字转换为字符串，并指定小数点后保留几位。
        // 若小数位数不够指定的位数，不足的部分会补0，使用银行家取舍(Banker's rounding)
        var num = 0.005;
        console.log(num.toFixed(2));  //0.01 银行家取舍的弊端

        // 大写字母A 到Z 的值是从65 到90 小写a到z 是从91 到 122
        // 字符转ascii码：用charCodeAt();
        // ascii码砖字符：用fromCharCode();

        // ~~5.5  // 得到整数5 按位取反2次,最快的取整
        //  https://www.cnblogs.com/qqhfeng/p/11414602.html 


//using Exclamation mark(!)
console.log(!!null); //logs false
console.log(!!undefined); //logs false
console.log(!!''); //logs false
console.log(!!NaN); //logs false
console.log(!!' '); //logs true
console.log(!!{}); //logs true
console.log(!![]); //logs true
console.log(!!1); //logs true
console.log(!!0); //logs false
console.log(!![].length); //logs false
console.log(!![1, 2].length); //logs true

// 通过Object.keys来获取obj的长度
var obj = {'name' : 'fly' , 'sex' : 'male' , 'age' : '14'};
var arr = Object.keys(obj);
console.log(arr); // ['name','sex','age']
console.log(arr.length); //3

console.log(  );
console.log( 4**3 ); // same with:Math.pow(4, 3)    output:64

// JS new type Bigint https://www.bookstack.cn/read/es6-3rd/spilt.9.docs-number.md
let theNumber = 123456789123456789123456789n
console.log( typeof theNumber ) // bigInt

let [theA,theB,theC]=[123,'haha',true] // 多重赋值
console.log( theB.repeat(5) ); //不循环重复输出

