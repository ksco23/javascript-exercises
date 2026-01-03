const palindromes = function (string) {
    const cleanedString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let numToCompare = Math.trunc(cleanedString.length / 2);
    let isPalindrome = true;
    
    for(let i=0; i<numToCompare; i++){
        if(cleanedString.at(i) !== cleanedString.at(-1 - i)){
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
