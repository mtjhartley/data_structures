//O(n^2) runtime with O(1) memory sort that starts at the beginning of an array, bubble the max item to the end,
//and then repeats on a smaller subset of the array

const swap = (arr, i1, i2) => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

const bubbleSort = (arr) => {
    for (var j = arr.length-1; j > 0; j--){
        for (let i = 0; i < j; i++){
            if(arr[i] > arr[i+1]){
                swap(arr, i, i+1);
            }
        }
    }
    return arr;
}

let myArray = [9,4,2,6,8,3];
let sortedArray = bubbleSort(myArray);
console.log(sortedArray);