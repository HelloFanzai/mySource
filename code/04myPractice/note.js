        //toString 数组转换成字符串
        //split('')  把字符串的每一个字符作为元素保存成数组
        //reverse 把数组倒叙
        //join("") 把数组转换成字符串
        // slice():方法可从已有的数组中返回选定的元素,arrayObject.slice(start,end)
        // slice()方法并不会修改数组，而是返回一个子数组
        // arrayObject.splice(index,howmany,item1,.....,itemX)
        // splice() 方法用于添加或删除数组中的元素，修改原数组，可替换元素
        var s1 = "America";
        console.log(s1.substring(2,5)) //eri
        // substring() 方法用于提取字符串中介于两个指定下标之间的字符。 
        // substring() 方法返回的子串包括开始处的字符，但不包括结束处的字符。
        lastIndexOf()
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

        //parseInt 变成数字
        // S=112; S = [...(s+"" )]; //[ '1', '1', '2' ]
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

        // 大写字母A 到Z 的值是从65 到90 小写a到z 是从91 到 122
        // 字符转ascii码：用charCodeAt();
        // ascii码砖字符：用fromCharCode();


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