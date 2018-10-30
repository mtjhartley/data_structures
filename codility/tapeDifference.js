// A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.
// Any integer P, such that 0 < P < N, splits this tape into two non−empty parts: A[0], A[1], …, A[P − 1] and A[P], A[P + 1], …, A[N − 1].
// The difference between the two parts is the value of: |(A[0] + A[1] + … + A[P − 1]) − (A[P] + A[P + 1] + … + A[N − 1])|
// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

// Write a function that, given a non-empty zero-indexed array A of N integers, returns the minimal difference that can be achieved.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var sum = A.reduce((total, current) => total + current) - A[0];
    var currentSum = 0;
    var lowestMin = Math.abs(A[0] - sum);
    
    for (var i = 0; i < A.length - 1; i++){
        currentSum += A[i];
        var currentDiff = Math.abs(currentSum - sum);
        sum = sum - A[i+1];
        if (currentDiff < lowestMin) {
            lowestMin = currentDiff;
        }
    };
    return lowestMin;
}

const tapeDifference = (array) => {
    var sum = array.reduce((total, current) => total + current) - array[0]; //Everything but the first segment
    var currentSum = 0;
    var lowestMin = Math.abs(array[0] - sum);
    for (var i = 0; i < array.length; i++){
        currentSum += array[i];
        let currentDiff = Math.abs(currentSum - sum);
        sum -= array[i+1];
        if (currentDiff < lowestMin){
            lowestMin = currentDiff;
        }
    }
    return lowestMin;
}

var foo = tapeDifference([1,3,5,4,2,6,1]);
console.log(foo);


for (var i = 0; i < 5; i++){
    var array = [];
    for (var j = i; j < 5; j++){
        array.push([i, j])
    }
    console.log(array);
}