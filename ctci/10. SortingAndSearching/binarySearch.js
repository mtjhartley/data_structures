//binary search is a log(n) search that works on a sorted array
//returns the index of the value if it exists, else -1
const binarySearch = (array, value) => {
    let start = 0;
    let end = array.length-1;
    let mid;
    while (start <= end){
        mid = Math.floor((start+end)/2);
        if (array[mid] < value){
            start = mid+1;
        } else if (array[mid] > value){
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return -1; //error index
}

const binarySearchRecursive = (array, value, start, end) => {
    if (start > end) {
        return -1;
    }
    var mid = Math.floor((start+end)/2);
    if (array[mid] == value){
        return mid;
    }
    if (array[mid] < value){
        return binarySearchRecursive(array, value, mid+1, end);
    } else if (array[mid] > value){
        return binarySearchRecursive(array, value, start, mid-1);
    }
}

let myArray = [1,3,5,7,8,12,14,16,30,4343];

console.log(binarySearch(myArray, 5));
console.log(binarySearch(myArray, 4));

console.log(binarySearchRecursive(myArray, 5, 0, myArray.length-1));
console.log(binarySearchRecursive(myArray, 4, 0, myArray.length-1));
