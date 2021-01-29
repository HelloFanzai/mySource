/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];
    
    function permute(arr, str, k) {
        if(k === 3 && str.length > 9) return; 
        if(k === 2 && str.length > 6) return;
        if(k === 1 && str.length > 3) return;
        if(k === 0 && str.length === 0) {
            result.push(arr);
            return;
        }
        
        if(k === 1) {
            if(+str <= 255 && str.length) {
                if(str.length >= 2 && str[0] === '0') return;
                permute([...arr, str], '', k-1);
            }
            return
        }
        
        let subStr = ''
        
        for(let i = 1; i < 4; i++) {
            subStr = str.slice(0, i);
            if(+subStr <= 255) {
                if(subStr.length >= 2 && subStr[0] === '0') continue;
                permute([...arr, subStr], str.slice(i), k-1)
            }
        }
    }

    permute([], s, 4);
    return result.map(x => x.join('.'))
};
s='121111'
console.log( restoreIpAddresses(s) );