/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters1 = function(s) {
    let w = s.match(/[a-zA-Z]/g);
    console.log( w );
    return s.split(``).map((cur) => (cur.match(/[a-zA-Z]/) ? w.pop() : cur)).join(``);
};
 var reverseOnlyLetters2 = function(s) {
    let left = 0; 
    let right = s.length-1;
    let validLetter = /[a-zA-Z]/;
    // let validLetter = /[A-z]/;
    s = s.split('');   //forms an array of characters --> easier for doing two pointer and swapping
    
    while(left < right){
        //if both pointers point to a letter char, swap and move the pointer
		//else skip the ones that are not valid letter
        if(validLetter.test(s[left]) && validLetter.test(s[right])){     
            [s[left], s[right]] = [s[right],s[left]];          
            left++;
            right--;
        }else{
            if(!(validLetter.test(s[left]))){
                left++;
            }
            if(!(validLetter.test(s[right]))){
                right--;
            }
        }
    }
    return s.join('');  //turning back the array to string
};


s = "ab-c"
console.log( reverseOnlyLetters1(s) );
console.log( reverseOnlyLetters2(s) );