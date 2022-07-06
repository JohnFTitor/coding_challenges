/**
 * @param {number[]} prices
 * @return {number}
 */

/*
    maxProfit = 0;
    minimunValue = array[0];
    
    
    array from 1 each do |element|
        if (element < minimumValue) {
            minimumValue = element;
            continue;
        }
    
        currentProfit = element - minimumValue;
        maxProfit = Max(currentProfit, maxProfit);
    end

*/

var maxProfit = function(prices) {
    let maxProfit = 0;
    let minimumValue = prices[0];
    
    for (let i=1; i < prices.length; i += 1) {
        const element = prices[i];
        
        if (element < minimumValue) {
            minimumValue = element;
            continue;
        }
        
        const currentProfit = element - minimumValue;
        maxProfit = Math.max(currentProfit, maxProfit);
    }
    
    return maxProfit;
};