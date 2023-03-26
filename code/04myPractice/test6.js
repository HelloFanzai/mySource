// async & await
async function myfn1() {
  
  try {
    let newData1 =  new Promise((resolve,reject ) => {
      setTimeout(() => {
        console.log('222');
        reject('No')
        resolve('Yes')
      }, 0);  
    }).catch((value)=>{
      console.log('value',value);
    })
    
    return console.log('newData1',newData1);
    
  } catch (error) {
    
    console.log('error',error);
  } finally{
    console.log('finally');
  }
  
  
  
  // console.log('111');
}

myfn1()