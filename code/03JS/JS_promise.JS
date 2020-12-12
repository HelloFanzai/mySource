var promise = new Promise(function (resolve, reject) {
    const x = "AAAb";
    const y = "AAAb"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});
//promise chain
promise.
    then(function ( ) {
        console.log('Success~');

        return 2
    }).
    catch(function () {
        console.log('Some error~~~');
    }); 