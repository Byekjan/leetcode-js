var maxProfit = function(prices) {
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    
    for(let i=0; i<prices.length; i++){
           min=Math.min(min,prices[i]);
           max=Math.max(max,prices[i]-min);
    }
    
    return max;
};