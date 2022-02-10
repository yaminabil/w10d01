// index.js
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false




function palindrome(str) {
    let i =0 ;
    let j=str.length-1;
    while ( i <=  Math.floor (str.length/2 )  ) {
        if (str [i] === str [j]) {
            i++;
            j--;
        } else {
            return  false;
            break ;
        }

    }
    return true  ;
}

//   palindrome("abba") ;
//   palindrome("abcdefg") ;
//   palindrome ("hannah");

module.exports = palindrome;


