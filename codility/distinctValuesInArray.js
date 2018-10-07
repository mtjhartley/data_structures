function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (!Array.isArray(A) || !A.length) {
      return 0;
    }
    A.sort((a, b) => a - b);
    console.log(A);
    
    let count = 1;
    for (var i = 1; i < A.length; i++){
        if (A[i] !== A[i-1]){
            count++
        }
    } 
    return count;
}

const MY_ARRAY = [10,3,2,6,3,2,10,6,5,4,3,2,1];

var foo = solution(MY_ARRAY);
console.log(foo);