const swap = (arr, i1, i2) => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

const quickSort = (arr, left = 0, right = arr.length-1) => {
    var partitionIndex = partition(arr, left, right);
    if (left < partitionIndex - 1) {
        quickSort(arr, left, partitionIndex -1);
    }
    if (partitionIndex < right) {
        quickSort(arr, partitionIndex, right);
    }

    return arr;
}

const partition = (arr, left, right) => {
    // console.log("the values of left and right are", left, right)
    var midPoint = Math.floor((left+right)/2);
    var pivot = arr[midPoint];
    // console.log("the pivot point is: ", pivot)

    while (left <= right){
        while (arr[left] < pivot){
            left++;
        }
        while (arr[right] > pivot){
            right--;
        }

        if (left <= right){
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

//let myArray = Array.from({length: 10}, () => Math.floor(Math.random() * 1000));
let myArray = [10,4,8,3,1];
console.log("array before sort", myArray)
var sortedArr = quickSort(myArray);
console.log(sortedArr);