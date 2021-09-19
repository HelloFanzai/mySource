
function test(){
    for (var i = 0; i < 10; i++) {
    	(function(j){//闭包
    		setTimeout(function(){
    			console.log(j);//分别输出i的值
    		},500)		
    	})(i);//闭包
    };	
};
test();