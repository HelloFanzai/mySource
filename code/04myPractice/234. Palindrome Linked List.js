/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let regList = '';
    let revList = '';
    while (head) {
        regList = regList + head.val;
        revList = head.val + revList;
        head = head.next;
    };
    return regList === revList;  
    
};