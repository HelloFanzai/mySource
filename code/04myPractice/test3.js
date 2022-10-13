// Question 2
// what would be the output of the below code?

Promise.resolve(1)
    .then(x => {
        // console.log(`X=${x}`);
        return x + 1
    })
    .then(x => {
        throw new Error('666');
    })
    .catch(err => {
        // console.log(err,13);
        return 10
    })
    .then(x => {
        // console.log(`X=${x}`);
        return x + 1
    })
    .then(x => console.log(x))
    .catch(console.error)