let aFunctions=function(){
    let n=1;
    for (let i1 = 1; i1 <= 9; i1++) {
        for (let i2 = 1; i2 <= 9; i2++) {
            for (let i3 = 1; i3 <= 9; i3++) {
                for (let i4 = 1; i4 <= 9; i4++) {
                    for (let i5 = 1; i5 <= 9; i5++) {
                        for (let i6 = 1; i6 <= 9; i6++) {
                            for (let i7 = 1; i7 <= 9; i7++) {
                                for (let i8 = 1; i8 <= 9; i8++) {
                                    for (let i9 = 1; i9 <= 9; i9++) {
                                        a1=i1+i2+i3;    // 1 2 3       
                                        a2=i4+i5+i6;    // 4 5 6 
                                        a3=i7+i8+i9;    // 7 8 9
                                        a4=i1+i4+i7;
                                        a5=i2+i5+i8;
                                        a6=i3+i6+i9;
                                        a7=i1+i5+i9;
                                        a8=i3+i5+i7;
                                        if ( 
                                           ( (i1 != i2) && (i1 != i3) && (i1 != i4) && (i1 != i5) && (i1 != a6) && (i1 != i7) && (i1 != i8) &&
                                            (i2 != i3) && (i2 != i4) && (i2 != i5) && (i2 != i6) && (i2 != i7) && (i2 != i8) &&
                                            (i3 != i4) && (i3 != i5) && (i3 != i6) && (i3 != i7) && (i3 != i8) &&
                                            (i4 != i5) && (i4 != i6) && (i4 != i7) && (i4 != i8) &&
                                            (i5 != i6) && (i5 != i7) && (i5 != i8) &&
                                            (i6 != i7) && (i6 != i7) &&
                                            (i7 != i8) )                                       
                                         &&   
                                           ( (a1 == a2) && (a1 == a3) && (a1 == a4) && (a1 == a5) && (a1 == a6) && (a1 == a7) && (a1 == a8) )                                       
                                        ){
                                            console.log(n,'\n',i1,i2,i3,'\n',i4,i5,i6,'\n',i7,i8,i9);
                                            n++
                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


aFunctions()