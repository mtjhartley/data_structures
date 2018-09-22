let pCheck = (myString) => {
    end = myString.length - 1
    for (let i = 0; i < myString.length/2; i++){
        if (myString.charAt(i) !== myString.charAt(end-i)){
            return false;
        }
    }
    return true;
}

// console.log(pCheck("anana"))
// console.log(pCheck("banana"))

let areStringCharsUnique = (myString) => {
    let myArr = [];
    for (let i = 0; i < myString.length; i++){
        if (myArr[myString.charCodeAt(i)]){
            // console.log("in true");
            return false;
        } else {
            // console.log("in else");
            myArr[myString.charCodeAt(i)] = true;
        }
    }
    return true;
}

let fillArrayGivenLengthAndValue = (len, val) => {
    let arr = new Array(len);
    arr.fill(val);
    return arr;
}

let isAnagramPalindrome = (myString) => {
    charArray = fillArrayGivenLengthAndValue(256, 0);
    for (let i = 0; i < myString.length; i++) {
        charArray[myString.charCodeAt(i)]++;
    }
    var odds = 0;
    for (let i = 0; i < charArray.length; i++){
        if (charArray[i] % 2 != 0){
            odds++;
        }
        if (odds > 1){
            return false;
        }
    }
    return true;
}

let isAnagramPalindromeHOF = (myString) => {
    charArray = fillArrayGivenLengthAndValue(256, 0);
    myString.split('').forEach(val => {
        charArray[val.charCodeAt(0)]++;
    });
    filteredArray = charArray.filter((val) => val % 2 != 0)
    //If there are more than 2 characters that have appeared an odd number of times...
    return filteredArray.length < 2;
}


// console.log(anagramPalindromeCheck("banana"));
// console.log(areStringCharsUnique("anana"));
// console.log(areStringCharsUnique("abcdefghi"));

// console.log(fillArrayGivenLengthAndValue(10, 0));

// console.log(isAnagramPalindrome("anana"));
// console.log(isAnagramPalindrome("aaann"));
// console.log(isAnagramPalindrome("aaannn"));


// console.log(isAnagramPalindromeHOF("anana"));
// console.log(isAnagramPalindromeHOF("aaann"));
// console.log(isAnagramPalindromeHOF("aaannn"));

console.log(isAnagramPalindromeHOF("tacocat"));
