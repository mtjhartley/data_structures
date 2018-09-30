const mergeSort = (arr) => {
    if (arr.length < 2 ){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, arr.length);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (leftArr, rightArr) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //While each array still has something to compare, compare and push
    while (leftIndex < leftArr.length && rightIndex < rightArr.length){
        if (leftArr[leftIndex] <= rightArr[rightIndex]){
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    //Handle the leftovers
    while (leftIndex < leftArr.length){
        result.push(leftArr[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < rightArr.length){
        result.push(rightArr[rightIndex]);
        rightIndex++;
    }



    return result;
}
let myArray = Array.from({length: 10}, () => Math.floor(Math.random() * 1000));
console.log("array before sort", myArray)
console.log(mergeSort(myArray));
