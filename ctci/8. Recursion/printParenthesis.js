const printParenthesis = (openCount, closedCount = 0, s = "", memo=[]) => {
    if (openCount == 0 && closedCount == 0){
        //console.log(s);
        memo.push(s);
    }
    if (openCount > 0){
        printParenthesis(openCount-1, closedCount+1, s+"{", memo);
    }
    if (closedCount > 0){
        printParenthesis(openCount, closedCount-1, s+"}", memo);
    }

    return memo;
}

printParenthesis(3);
console.log(printParenthesis(3));