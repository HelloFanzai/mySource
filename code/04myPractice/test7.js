new Promise((resolve, reject) => {
    resolve(1) 
})

.then(res => {
    console.log('A')
})
.finally(() => {
    console.log('B')
})

new Promise((resolve, reject) => {
    resolve(2)
})
.then(res => {
    console.log('C')
})
.finally(() => {
    console.log('D')
})

setTimeout(() => {
    console.log( 'hello' );
}, 200);


//--------------

function p1() {
    var promise1 = new Promise(function (resolve, reject) {
      console.log("p1的第一条输出语句");
      resolve("p1完成");
    });
    return promise1;
  }
  
  function p2() {
    var promise2 = new Promise(function (resolve, reject) {
      console.log("p2的第一条输出语句");
      setTimeout(() => {
        console.log("p2的第二条输出语句");
        resolve("p2完成");
      }, 1000);
    });
    return promise2;
  }
  
  function p3() {
    var promise3 = new Promise(function (resolve, reject) {
      console.log("p3的第一条输出语句");
      resolve("p3完成");
    });
    return promise3;
  }
  
  Promise.all([p1(), p2(), p3()]).then(function (data) {
    console.log(data);
  });