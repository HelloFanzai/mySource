// java script program to swap even and
// odd bits of a given number
 
// Function to swap even
// and odd bits
function swapBits( x)
{
    // Get all even bits of x
    even_bits = x & 0xAAAAAAAA;
 
    // Get all odd bits of x
    odd_bits = x & 0x55555555;
     
    // Right shift even bits
    even_bits >>= 1;
     
    // Left shift odd bits
    odd_bits <<= 1;
 
    // Combine even and odd bits
    return (even_bits | odd_bits);
}
// Driver Code
// 偶右交换 奇左交换
let x = 43;   // 00010111
// Output is 43 (00101011)

console.log(  swapBits(23)  ); 
// This code is contributed by sravan kumar


// https://www.geeksforgeeks.org/swap-all-odd-and-even-bits/
 