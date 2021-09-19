for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log('i=',i);
    }, 1000);
}

for (var j = 0; j < 3; j++) {
    setTimeout( (theJ) => {
        console.log('j=',theJ)
    }, 1000,j)
}