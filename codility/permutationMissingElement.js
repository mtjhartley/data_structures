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