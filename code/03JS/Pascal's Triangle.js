
    let arr = [];stdin=6
    arr.push(...[1]);
    loop([1]);
    
    function loop(lastarr){                               // 代码循环的部分
        if(lastarr.length < stdin){
            let newarr = [];
            newarr[0] = 1;                                // 头部是1
            newarr[lastarr.length] = 1;                   // 尾部也是1
            for(let i = 0; i < lastarr.length-1; i++){
                newarr[i+1] = lastarr[i] + lastarr[i+1];
            }
            arr.push(...newarr);
            loop(newarr);
        }
    }
    console.log(arr.join(' '));
    
