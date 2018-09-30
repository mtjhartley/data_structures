const fibonacciWorst = (i) => {
    if (i == 0) return 0;
    if (i == 1) return 1;
    return (fibonacciWorst(i-1) + fibonacciWorst(i-2));
}
//The time complexity is O(n^2) draw it out as a tree
//console.log(fibonacciWorst(1000));

const fibonacciWithMemo = (i, memo = {}) => {
    if (i == 0 || i == 1) return i;
    if (!memo[i]){
        console.log('inside creating the memo')
        memo[i] = fibonacciWithMemo(i-1, memo) + fibonacciWithMemo(i-2, memo);
    }
    return memo[i];
}
//The time complexity is O(n), we just have to calculate the fibonacci for every number

console.log(fibonacciWithMemo(1000));

const fibonacciGoingUp = (i) => {
    let a = 0;
    let b = 1;
    let c = 1;
    for (let x = 2; x < i; x++){
        c = a + b;
        a = b;
        b = c;
    }
    return a + b;
}

console.log(fibonacciGoingUp(1000));