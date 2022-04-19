var maxProfit = function(prices) {
  let min = prices[0];
  let max = prices[0];
  let profit = 0;
  
  prices.forEach((price) => {
    if (price < min) {
      min = price;
      max = price;
    } else if (price > max) {
      max = price;
      const newProfit = max - min;
      profit = Math.max(profit, newProfit);
    }
  });
  
  return profit;
};
