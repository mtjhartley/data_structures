function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const symbolDict = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    
    let stack = [];
    
    for (var i = 0; i < S.length; i++){
        if (S[i] == "(" ||  S[i] == "{" || S[i] == "["){
            stack.push(S[i]);
        }
        else if (symbolDict.hasOwnProperty(S[i]) && stack[stack.length-1] == symbolDict[S[i]]){
            stack.pop();
        }
        else if (symbolDict.hasOwnProperty(S[i]) && stack[stack.length-1] != symbolDict[S[i]]){
            return 0;
        }
        else {
            console.log("nothing found here...")
        }
    }
    return stack.length === 0 ? 1 : 0;
}