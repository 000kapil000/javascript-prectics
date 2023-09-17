// que Palindrome number 
// An integer is a palindrome when it reads the same froward and backword 

// input a=121 output: true

function isPalindrome(arg){
    return x<0 ? false :  arg===+arg.toString().split("").reverse().join("");
    // condition( x<0 ? false :) use for optimise the code 
    // whit this method we get the string but when we add (+) before that it convert string into a number 


}

console.log(isPalindrome(1231));