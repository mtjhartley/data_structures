// A zero-indexed array A consisting of N different integers is given. 
// The array contains integers in the range [1..(N+1)], which means that exactly one element is missing.
// Your goal is to find that missing element.

//O(n 
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort(function(a, b){return a - b});
    
    var next = 1;
    var i=0;
    while(next === A[i]) {
        next++;
        i++;
    }
    return next;
}

const ARRAY_MISSING_7 = [8,10,6,3,2,5,4,1,9,11,13,15,12,14]

var missingVal = solution(ARRAY_MISSING_7);
console.log({missingVal});

const sumArray = (array) => {
    return array.reduce((prev, next) => prev+next);
}

const sumConsecutive = (n) => {
    return n*(n+1)/2
}

const solutionBest = (array) => {
    return sumConsecutive(array.length+1) - sumArray(array);
}

var missingValBest = solutionBest(ARRAY_MISSING_7);
console.log({missingValBest});