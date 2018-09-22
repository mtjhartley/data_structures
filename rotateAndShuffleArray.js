const rotateArray = (arr, k) => {
    k = k % arr.length;
    return arr.slice(k, arr.length).concat(arr.slice(0,k));
}

let myArray = [1,2,3,4,5,6,7,8,9,10];
let myArray2 = [1,2,3,4,5,6,7,8,9,10];

//console.log(rotateArray(myArray, 1));

const reverseArray = (arr, start, end) => {
    while (start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

//console.log(reverseArray(myArray, 4));

const rotateArrayRight = (arr, k) => {
    reverseArray(arr, 0, arr.length-1);
    reverseArray(arr, 0, k-1);
    reverseArray(arr, k, arr.length-1);
    return arr;
}

const rotateArrayLeft = (arr, k) => {
    reverseArray(arr, 0, k-1);
    reverseArray(arr, k, arr.length-1);
    reverseArray(arr, 0, arr.length-1);
    return arr;
}
console.log(rotateArrayRight(myArray, 3));
console.log(rotateArrayLeft(myArray2, 3));

const shuffleArray = (arr) => {
    for (var i = 0; i < arr.length; i++){
        let randomIdx = Math.floor(Math.random() * arr.length);  
        temp = arr[i];
        arr[i] = arr[randomIdx];
        arr[randomIdx] = temp;
    }
    return arr;
}

console.log(shuffleArray([1,2,3,4,5]));