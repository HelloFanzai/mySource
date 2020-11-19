/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // s = s.trim().split(' ');
    // return s[s.length-1].length
    return s.trim().split(' ')[s.trim().split(' ').length-1].length
    //trim 是把string的头尾的空格去掉
    //split 分割字符
    // length 直接量长度
};

s="";
// s.split(' ')


console.log( lengthOfLastWord(s) );
