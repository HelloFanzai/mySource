var a = {
    i:1,
    valueOf:function () {
        if (this.i === 1) {
            console.log( this.i );
            this.i++
            return 1
        } else {
            console.log( this.i );

            return 12
        }
    }
}
if(a == 1 && a == 12){  
  console.log(a,'haha');
}
let b ={
    i2:2,
    valueOf:22
}
console.log( b.valueOf );