function maxProfit(prices: number[]): number {
    let minimumPrice: number = prices[0];
    let maxProfit: number = 0;
    
    for (let i = 1; i < prices.length; i++) {
        const price: number = prices[i];
        
        if (price < minimumPrice) {
            minimumPrice = price;
            continue;
        }
        
        const profit:number = price - minimumPrice;
        maxProfit = Math.max(maxProfit, profit);
    }
    
    return maxProfit;
};