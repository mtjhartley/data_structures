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