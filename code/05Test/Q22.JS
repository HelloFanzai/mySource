// let x = 20 // lv1
// var y = 20
// {
//     let x = 50; //lv2
//     var y = 50;
//     {
//         let x = 22;  //lv3
//         var y = 22;
//         console.log('output1', 'x=' + x, 'y=' + y); //x=22 y=22

//     }
//     console.log('output2', 'x=' + x, 'y=' + y); //x=50 y=22
// }
// console.log('output3', 'x=' + x, 'y=' + y);//x=20 y=22

const Obj = {'定义1':'定义的值'};
console.log('修改前', Obj );
Obj.nana = "nama1";
Obj.miaJie = "nama2";
Obj.kaJie = "nama3";
Obj.fuPo = "nama4";

console.log(Obj.name); 
console.log('修改后', Obj );

