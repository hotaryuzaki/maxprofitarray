# max profit of stock array
The cost of a stock on each day is given in an array. Find the maximum profit that you can make by buying and selling on those days. If the given array of prices is sorted in decreasing order, then profit cannot be earned at all.

THE SIMPLEST SOLUTION IS BUY TODAY AND SELL TOMORROW FOR EACH DAY, AND NOT BUY IF THERE IS A LOSS

```
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
```
