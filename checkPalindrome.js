function checkPalindrome(inputString) {
var string1 = inputString.toLowerCase();
var string2 = string1.split("").reverse().join("");

    if(string1===string2){
        return true;
    }
    return false;
}
