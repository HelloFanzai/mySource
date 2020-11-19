let x = 20 // lv1
var y = 20
{
    let x=50; //lv2
    var y=50;
    {
        let x =22;  //lv3
        var y =22;
        console.log('output1','x='+x,'y='+y);
        
    }
    console.log('output2','x='+x,'y='+y);
}
console.log('output3','x='+x,'y='+y);
