function maxProfit(prices) {
  var maxProfit = 0;

  for (i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      // console.log(prices[i], prices[i - 1], prices[i] - prices[i - 1]);
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
}

var price = [ 100, 180, 260, 310, 40, 535, 695 ];

console.log(maxProfit(price));
