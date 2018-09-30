//selection sort iterates through the list, finding the smallest element and putting it in the front.
//repeats on a smaller subset of the list until the list is sorted
// O(n^2) average and worst case, memory O(1);
const swap = (arr, i1, i2) => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

const selectionSort = (arr) => {
    for (var i = 0; i < arr.length-1; i++){
        let minIdx = i
        for (var j = i+1; j < arr.length; j++){
            if (arr[j] < arr[minIdx]){
                minIdx = j;
            }
        }
        swap(arr, i, minIdx);
    }
    return arr;
}

let myArray = [9,4,2,6,8,3];
let sortedArray = selectionSort(myArray);
console.log(sortedArray);