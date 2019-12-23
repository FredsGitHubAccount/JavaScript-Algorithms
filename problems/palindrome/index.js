// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    // let reversed = str.split("").reduce((word,i)=>i+word,"")
    // return reversed === str ? true : false

    
//     let reversed = str.split("")

// let isPalindrome = reversed.every((letter,i)=>{

//     return letter === reversed[reversed.length-1 - i]

// })

// return isPalindrome

    return str.split("").every((letter,i)=>{
  
        console.log(letter)
        console.log(str[str.length-i-1])
        return letter === str[str.length -i - 1]
        
    })



    
}

console.log(palindrome("acca"))

module.exports = palindrome;
