//9. Palindrome Number
//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

//SLOWWW LOL
// const isPalindrome = (num) => {
//     if (num < 0) {
//         return false;
//     }
//     let numStr = num.toString();

//     return numStr === numStr.split('').reverse().join('');
// }


const isPalindrome = (num) => {
    if (num < 0) {
        return false;
    }
    let numStr = num.toString();

    return pCheck(numStr)
}

const pCheck = (myString) => {
    end = myString.length - 1
    for (let i = 0; i < myString.length/2; i++){
        if (myString.charAt(i) !== myString.charAt(end-i)){
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(121));
console.log(isPalindrome(133));
