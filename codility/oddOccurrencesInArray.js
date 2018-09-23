function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var charHasDupe = {};
    A.forEach(element => {
        if (!charHasDupe.hasOwnProperty(element.toString())){
            charHasDupe[element.toString()] = false;
        } else {
            charHasDupe[element.toString()] = true;
        }
    });

    var key = Object.keys(charHasDupe).filter((elem) => {
        return charHasDupe[elem.toString()] == false;
    })
    return key[0];
}

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var agg = 0;
    
    for(var i=0; i<A.length; i++) {
        agg ^= A[i];
    }
    
    return agg;
}


console.log(solution([1,2,3,1,3,2,5]));