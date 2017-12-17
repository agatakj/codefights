/** Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true. **/

function checkPalindrome(inputString) {
var string1 = inputString.toLowerCase();
var string2 = string1.split("").reverse().join("");

    if(string1===string2){
        return true;
    }
    return false;
}
