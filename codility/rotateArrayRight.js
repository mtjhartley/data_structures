// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function reverseArray(arr, start, end){
    while (start < end){
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    K = K % A.length;
    reverseArray(A, 0, A.length-1);
    reverseArray(A, 0, K-1);
    reverseArray(A, K, A.length-1);

    return A
}