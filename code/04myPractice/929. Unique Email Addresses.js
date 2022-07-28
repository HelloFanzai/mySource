/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {

    let fixedEmails = []

    for (let theI of emails) {
        let newArr = theI.split('@')
        newArr[0] = newArr[0].replaceAll('.','').split('+')[0]
        newArr = newArr.join('@')
        
        if ( !fixedEmails.includes(newArr) ) {
            fixedEmails.push(newArr)
        }

        console.log(newArr);
    }

    return fixedEmails.length
};


emails = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]
console.log(numUniqueEmails(emails));