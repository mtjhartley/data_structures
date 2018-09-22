// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binaryString = N.toString(2);
    finalMax = 0;
    currentMax = 0;
    for (var i = 0; i < binaryString.length; i++){
        if (binaryString[i] == 0){
            currentMax++;
        }
        if (binaryString[i] === '1' && i !== binaryString.length - 1){
            finalMax = currentMax;
            currentMax = 0;
        }
        if (binaryString[i] === '1' && i === binaryString.length - 1) {
            finalMax = Math.max(finalMax, currentMax);
        }
    }
    return finalMax;
}