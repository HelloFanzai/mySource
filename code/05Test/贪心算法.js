// var money= [5,3,1]; 
var stdin = 6;
  /*
   * m[]:存放可供找零的面值，降序排列 
   * stdin:需要找零数 
   */ 
    function greedyMoney(m,stdin){ 
        var myAnswer='';
        for(var i=0;i<m.length;i++){

            while(stdin >=m[i] && stdin >0){ 
            myAnswer = myAnswer + m[i];
            console.log( myAnswer );
            
            stdin  = stdin - m[i]; 
            } 

        } 
        return myAnswer.length;    
    }
   
   console.log( greedyMoney([5,2,1],stdin) );
 