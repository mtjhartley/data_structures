let fillArrayGivenLengthAndValue = (len, val) => {
    let arr = new Array(len);
    arr.fill(val);
    return arr;
}

const removeDuplicates = (myString) => {
    let charArray = fillArrayGivenLengthAndValue(256, false);
    let newString = "";

    [...myString].forEach((char) => {
        if (!charArray[char.charCodeAt(0)]){
            charArray[char.charCodeAt(0)] = true;
            newString += char;
        }
    })
    return newString;
}

const removeDuplicatesUsingMap = (myString) => {
    let myMap = {};
    let newString = "";

    [...myString].forEach((char) => {
        if (!myMap.hasOwnProperty(char)){
            myMap[char] = true;
            newString += char;
        }
    });
    return newString
}

const removeDuplicatesUsingArray = (myString) => {
    let myArray = [];
    [...myString].forEach((char) =>{
        if (!myArray.includes(char)){
            myArray.push(char);
        }
    });
    return myArray.join('');
}

const removeDuplicatesInPlaceForSorted = (myString) => {
    stringArray = [...myString];
    stringArray.sort();
    //console.log("sorted string array", stringArray)

    result_index = 1;
    total_index = 1;

    while (total_index < stringArray.length){
        if (stringArray[total_index] != stringArray[total_index-1]){
            stringArray[result_index] = stringArray[total_index];
            result_index += 1;
        }
        total_index += 1;
    }
    return stringArray.slice(0, result_index).join('');

}
// console.log(removeDuplicates("aaaaaa"));

// console.log(removeDuplicates("abcdeabcdefghijsldkfdsezzzefx"));

//console.log(removeDuplicatesUsingMap("abcdeabcdefghijsldkfdsezzzefx"));
//console.log(removeDuplicatesUsingArray("zzcdeabcdefghijsldkfdsezzzefx"));

//console.log(removeDuplicatesInPlaceForSorted("cabcdedd"));

console.log(removeDuplicatesInPlaceForSorted("abcdeabcdefghijsldkfdsezzzefx"));
console.log(removeDuplicatesInPlaceForSorted("bacbcdedd"));

