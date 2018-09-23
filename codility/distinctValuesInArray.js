function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (!Array.isArray(A) || !A.length) {
      return 0;
    }
    A.sort((a, b) => a - b);
    
    let count = 1;
    for (var i = 1; i < A.length; i++){
        if (A[i] !== A[i-1]){
            count++
        }
    } 
    return count;
}