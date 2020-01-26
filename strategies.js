  // function strategy2(quotes) {
  //   trades = new Trades();
  //   let trade = undefined;
  //   let tradeOpen = undefined;
  //   let i;
  //   for (i = 1; i < quotes.length; i++) {
  //     // equity
  //     trades.updateEquity(quotes[i]);
  //     if (trades.equity[i] >= 0 && trades.equity[i - 1] < 0) {
  //       trades.closeAllOpen(i, quotes[i]);
  //     }
  //     // buy
  //     if (quotes[i] > quotes[i - 1]) {
  //       if (trade && trade.type == 'sell') {
  //         if (trade.getProfitOpen(quotes[i]) > 0) {
  //           trades.close(trade, i, quotes[i]);
  //         }
  //         trade = undefined;
  //       }
  //       if (!trade) {
  //         if (!trades.isOpenBuyAt(i, quotes[i])) {
  //           trade = trades.buy(i, quotes[i]);
  //         }
  //       }
  //     }
  //     // sell
  //     if (quotes[i] < quotes[i - 1]) {
  //       if (trade && trade.type == "buy") {
  //         if (trade.getProfitOpen(quotes[i]) > 0) {
  //           trades.close(trade, i, quotes[i]);
  //         }
  //         trade = undefined;
  //       }
  //       if (!trade) {
  //         if (!trades.isOpenSellAt(i, quotes[i])) {
  //           trade = trades.sell(i, quotes[i]);
  //         }
  //       }
  //     }
  //   }
  //   // close last trade at end of quotes
  //   //trades.close(trade, i - 1, quotes[i - 1]);
  //   return trades;
  // }

  // function strategy3(quotes) {
  //   trades = new Trades();
  //   let trade = undefined;
  //   let i;
  //   for (i = 1; i < quotes.length; i++) {
  //     // equity
  //     trades.updateEquity(quotes[i]);
  //     if (trades.equity[i] >= 0 && trades.equity[i - 1] < 0
  //       && ((quotes[i - 2] < quotes[i - 1] && quotes[i - 1] > quotes[i])
  //         || (quotes[i - 2] > quotes[i - 1] && quotes[i - 1] < quotes[i]))
  //     ) {
  //       trades.closeAllOpen(i, quotes[i]);
  //     }
  //     // trade count above and below quote
  //     trades.updateTradeCount(quotes[i]);
  //     const BuyHighestIndex = trades.BuyHighest ? trades.BuyHighest.open.x : -1;
  //     const SellLowestIndex = trades.SellLowest ? trades.SellLowest.open.x : -1;
  //     console.log("i: " + i + ", Buyabove: " + trades.BuyAboveQuote + ", SellBelowQuote: " + trades.SellBelowQuote + ", BuyHighest Index: " + BuyHighestIndex + ", SellLowest Index: " + SellLowestIndex);
  //     // buy
  //     if (quotes[i] > quotes[i - 1]) {
  //       if (trade && trade.type == 'sell') {
  //         if (trade.getProfitOpen(quotes[i]) > 0) {
  //           trades.close(trade, i, quotes[i]);
  //         }
  //         trade = undefined;
  //       }
  //       tradeOpen = trades.isTargetSellAt(i, quotes[i])
  //       if (tradeOpen) {
  //         trades.close(tradeOpen, i, quotes[i]);
  //         tradeOpen = undefined;
  //       }
  //       tradeOpen = trades.isOpenSellAt(i, quotes[i] + 1)
  //       if (tradeOpen) {
  //         trades.close(tradeOpen, i, quotes[i]);
  //         tradeOpen = undefined;
  //       }
  //       if (trades.SellBelowQuote >= 0) {
  //         if (!trades.isOpenBuyAt(i, quotes[i])) {
  //           trade = trades.buy(i, quotes[i]);
  //         }
  //       }
  //     }
  //     // sell
  //     if (quotes[i] < quotes[i - 1]) {
  //       if (trade && trade.type == "buy") {
  //         if (trade.getProfitOpen(quotes[i]) > 0) {
  //           trades.close(trade, i, quotes[i]);
  //         }
  //         trade = undefined;
  //       }
  //       tradeOpen = trades.isTargetBuyAt(i, quotes[i])
  //       if (tradeOpen) {
  //         trades.close(tradeOpen, i, quotes[i]);
  //         tradeOpen = undefined;
  //       }
  //       tradeOpen = trades.isOpenBuyAt(i, quotes[i] - 1)
  //       if (tradeOpen) {
  //         trades.close(tradeOpen, i, quotes[i]);
  //         tradeOpen = undefined;
  //       }
  //       if (trades.BuyAboveQuote >= 0) {
  //         if (!trades.isOpenSellAt(i, quotes[i])) {
  //           trade = trades.sell(i, quotes[i]);
  //         }
  //       }
  //     }
  //   }
  //   // close last trade at end of quotes
  //   //trades.close(trade, i - 1, quotes[i - 1]);
  //   return trades;
  // }
  // function strategyPair(quotes) {
  //   trades = new Trades();
  //   let trade = undefined;
  //   let pair = undefined;
  //   let i;
  //   for (i = 1; i < quotes.length; i++) {
  //     trades.updateEquity(quotes[i]);
  //     // buy
  //     if (quotes[i] > quotes[i - 1]) {
  //       if (trade && trade.type == 'sell') {
  //         if (trade.getProfitOpen(quotes[i]) >= 1) {
  //           trades.close(trade, i, quotes[i]);
  //         }
  //         trade = undefined;
  //       }
  //     }
  //     if (!trade && !trades.isOpenBuyAt(i, quotes[i])) {
  //       trade = trades.buy(i, quotes[i]);
  //       // register pair
  //       if (!pair)
  //         pair = trade.pair = (new Pair()).buyTrade(trade);
  //       else
  //         pair.buy = trade;
  //     }
  //     // sell
  //     if (quotes[i] < quotes[i - 1]) {
  //       if (trade && trade.type == 'buy') {
  //         if (trade.getProfitOpen(quotes[i]) >= 1) {
  //           trades.close(trade, i, quotes[i]);
  //         }
  //         trade = undefined;
  //       }
  //       if (!trade && !trades.isOpenSellAt(i, quotes[i])) {
  //         trade = trades.sell(i, quotes[i]);
  //         // register pair
  //         if (!pair)
  //           pair = trade.pair = (new Pair()).sellTrade(trade);
  //         else
  //           pair.sell = trade;
  //       }
  //     }
  //     console.log("i: " + i);
  //     console.log(trade);
  //     console.log(pair);
  //   }
  //   // close last trade at end of quotes
  //   //trades.close(trade, i - 1, quotes[i - 1]);
  //   return trades;
  // }
