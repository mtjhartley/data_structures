const stocks = [4, 10, 5, 20, 1, 30, 20, 18];

//O(n^2) solution
const findBestBuySellSlow = (array) => {
    var maxProfit = array[1] - array[0];
    for (let i = 2; i < array.length - 1; i++){
        for (let j = i+1; j < array.length; j++){
            if (array[j] - array[i] > maxProfit){
                maxProfit = array[j] - array[i];
            }
        }
    }
    return maxProfit;
}

//O(n) solution
const findBestBuySell = (array) => {
    let minBuy = array[0];
    let maxProfit = array[1] - array[0];
    for (let i = 2; i < array.length; i++){
        if (array[i] - minBuy > maxProfit){
            maxProfit = array[i] - minBuy
        }
        if (array[i] < minBuy){
            minBuy = array[i]
        }
    }
    return maxProfit
}

console.log(findBestBuySellSlow(stocks));

console.log(findBestBuySell(stocks));