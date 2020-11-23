        //toString 数组转换成字符串
        //split('')  把字符串的每一个字符作为元素保存成数组
        //reverse 把数组倒叙
        //join("") 把数组转换成字符串
        // slice():方法可从已有的数组中返回选定的元素,arrayObject.slice(start,end)
        // slice()方法并不会修改数组，而是返回一个子数组
        // splice() 方法用于添加或删除数组中的元素，修改原数组，可替换元素

        // var s = "kadfjkajfkhgofqnmvc";
        // console.log(Array.from(s).sort().join(""));//aacdfffghjjkkkmnoqv
        // console.log(Array.from(s).sort().reverse().join(""));//aacdfffghjjkkkmnoqv
        //字符串排序

        //ES6 去重
        // a1=[1,2,2,3,3,3,4,4,4,4]
        // let b1 = [...new Set(a1)]
        // console.log(b1);

        //parseInt 变成数字
        // S=112; S = [...(s+"" )]; //[ '1', '1', '2' ]
// //十进制转其他
        // var x=110;
        // w(x);
        // w(x.toString(8));
        // w(x.toString(32));
        // w(x.toString(16));

// //其他转十进制
        // var x='110';
        // w(parseInt(x,2));
        // w(parseInt(x,8));
        // w(parseInt(x,16));
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