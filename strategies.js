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
  // function strategySimple_2Steps(quotes) {
  //   trades = new Trades();
  //   let trade = undefined;
  //   let i = 0;
  //   for (i = 1; i < quotes.length; i++) {
  //     trades.updateEquity(quotes[i]);
  //     // buy
  //     if (quotes[i] > quotes[i - 1]) {
  //       if (trade && trade.type == 'sell' && trade.open.x + 2 <= i) {
  //         trades.close(trade, i, quotes[i]);
  //         trade = undefined;
  //       }
  //       if (!trade) {
  //         trade = trades.buy(i, quotes[i]);
  //       }
  //     }
  //     // sell  
  //     if (quotes[i] < quotes[i - 1]) {
  //       if (trade && trade.type == "buy" && trade.open.x + 2 <= i) {
  //         trades.close(trade, i, quotes[i]);
  //         trade = undefined;
  //       }
  //       if (!trade) {
  //         trade = trades.sell(i, quotes[i]);
  //       }
  //     }
  //   }
  //   // close last trade at end of quotes
  //   trades.close(trade, i - 1, quotes[i - 1]);
  //   trades.updateEquity(quotes[i - 1]);
  //   return trades;
  // }

  // function strategySimple2_2Steps(quotes) {
  //   trades = new Trades();
  //   let trade = undefined;
  //   let tradeLast = undefined;
  //   let i = 0;
  //   for (i = 1; i < quotes.length; i++) {
  //     trades.updateEquity(quotes[i]);
  //     // // close trade after 2 steps
  //     if (tradeLast) {
  //       trades.close(tradeLast, i, quotes[i]);
  //     }
  //     if (trade) {
  //       tradeLast = trade;
  //     }
  //     // buy
  //     if (quotes[i] > quotes[i - 1]) {
  //       // trades.closeAllOpenSell(i, quotes[i]);
  //       // trades.closeAllOpenTradeIf(i, quotes[i], trades.SellOpen, (trade, i) => trade.open.x + 2 <= i);

  //       trade = trades.buy(i, quotes[i]);
  //     }
  //     // sell  
  //     if (quotes[i] < quotes[i - 1]) {
  //       // trades.closeAllOpenBuy(i, quotes[i]);
  //       // trades.closeAllOpenTradeIf(i, quotes[i], trades.BuyOpen, (trade, i) => trade.open.x + 2 <= i);

  //       trade = trades.sell(i, quotes[i]);
  //     }
  //   }
  //   // close last trade at end of quotes
  //   // trades.close(trade, i - 1, quotes[i - 1]);
  //   trades.closeAllOpenTrades();
  //   trades.updateEquity(quotes[i - 1]);
  //   return trades;
  // }

  //   function strategySimple3_1(quotes) {
  //   pairs = new Pairs();
  //   trades = new Trades();
  //   tradeID = 0;
  //   let tradeCountMaxOpen = 40;
  //   let tradeCountOpen = 0;
  //   let trade = opTrade = tradeSell = tradeBuy = undefined;
  //   let pairTrade = undefined;
  //   let pair = undefined;
  //   let i = 0;
  //   for (i = 1; i < quotes.length; i++) {
  //     console.log("index: " + i);
  //     // console.log(trade); 
  //     trades.updateTradesOpenFullRange();
  //     // ** check tradeCountMaxOpen
  //     tradeCountOpen = trades.tradeCountAllOpen - tradeCountMaxOpen;
  //     console.log("tradeCountOpen: " + tradeCountOpen);
  //     while (tradeCountOpen > 0) {
  //       pair = pairs.closeFirst(trades, i, quotes[i]);
  //       if (pair) {
  //         console.log("pair closed:");
  //         console.log(pair);
  //       } else {
  //         tradeSell = trades.SellHighest;
  //         tradeBuy = trades.BuyLowest;
  //         trades.close(tradeSell, i, quotes[i]);
  //         trades.close(tradeBuy, i, quotes[i]);
  //         console.log("trades closed: profit: " + (tradeSell.getProfit() + tradeBuy.getProfit()));
  //         console.log(tradeSell);
  //         console.log(tradeBuy);
  //         // reinit SellHighest, BuyLowest
  //         trades.updateTradesOpenFullRange();
  //       }
  //       tradeCountOpen -= 2;
  //     }
  //     // ** end check tradeCountMaxOpen
  //     trades.updateEquity(quotes[i]);

  //     // buy
  //     if (quotes[i] > quotes[i - 1]) {
  //       // create and register pair
  //       // if (trade && trade.type == 'sell' && !trade.pair) {
  //       //   pairTrade = trades.buy(i, quotes[i]);
  //       //   pairs.add(pairTrade, trade);
  //       // }
  //       trade = pairTrade;
  //       // create buy trade if no pairTrade
  //       if (!trade) {
  //         // opposite trade at same quote
  //         opTrade = trades.isOpenSellAt(i, quotes[i]);
  //         if (opTrade)
  //           trades.close(opTrade, i, quotes[i]);
  //         else
  //           trade = trades.buy(i, quotes[i]);
  //       }
  //     }
  //     // sell  
  //     if (quotes[i] < quotes[i - 1]) {
  //       // create and register pair
  //       // if (trade && trade.type == 'buy' && !trade.pair) {
  //       //   pairTrade = trades.sell(i, quotes[i]);
  //       //   pairs.add(trade, pairTrade);
  //       // }
  //       trade = pairTrade;
  //       // create sell trade if no pairTrade
  //       if (!trade) {
  //         // opposite trade at same quote
  //         opTrade = trades.isOpenBuyAt(i, quotes[i]);
  //         if (opTrade)
  //           trades.close(opTrade, i, quotes[i]);
  //         else
  //           trade = trades.sell(i, quotes[i]);
  //       }
  //     }
  //     // console.log(pairTrade);
  //     pairTrade = undefined;
  //   }
  //   // close all open trades at end of quotes
  //   trades.closeAllOpenBuyNoPair(i - 1, quotes[i - 1]);
  //   trades.closeAllOpenSellNoPair(i - 1, quotes[i - 1]);
  //   // trades.closeAllOpenBuy(i - 1, quotes[i - 1]);
  //   // trades.closeAllOpenSell(i - 1, quotes[i - 1]);
  //   trades.updateEquity(quotes[i - 1]);
  //   return trades;
  // }

  //   function strategySimple3_1(quotes) {
  //   pairs = new Pairs();
  //   trades = new Trades();
  //   tradeID = 0;
  //   let tradeCountMaxOpen = 40;
  //   let tradeCountOpen = tradeCountBuyOpen = tradeCountSellOpen = 0;
  //   let opTrade = tradeSell = tradeBuy = undefined;
  //   let i = 0;
  //   for (i = 1; i < quotes.length; i++) {
  //     console.log("index: " + i);
  //     // console.log(trade); 
  //     trades.updateTradesOpenFullRange();
  //     // ** check tradeCountMaxOpen
  //     tradeCountBuyOpen = trades.BuyOpen.length;
  //     tradeCountSellOpen = trades.SellOpen.length;
  //     tradeCountOpen = trades.tradeCountAllOpen - tradeCountMaxOpen;
  //     console.log("tradeCountBuyOpen: " + tradeCountBuyOpen + ", tradeCountSellOpen: " + tradeCountSellOpen + ", tradeCountMaxOpen: " + tradeCountMaxOpen + ", tradeCountOpen: " + tradeCountOpen);
  //     while (tradeCountOpen > 0) {
  //       tradeSell = trades.SellHighest;
  //       tradeBuy = trades.BuyLowest;
  //       if (tradeCountBuyOpen > tradeCountSellOpen) tradeSell = trades.SellLowest;
  //       if (tradeCountSellOpen > tradeCountBuyOpen) tradeBuy = trades.BuyHighest;
  //       trades.close(tradeSell, i, quotes[i]);
  //       trades.close(tradeBuy, i, quotes[i]);
  //       console.log("trades closed: profit: " + (tradeSell.getProfit() + tradeBuy.getProfit()));
  //       console.log(tradeSell);
  //       console.log(tradeBuy);
  //       // reinit SellHighest, BuyLowest
  //       trades.updateTradesOpenFullRange();
  //       tradeCountOpen -= 2;
  //     }
  //     // ** end check tradeCountMaxOpen
  //     trades.updateEquity(quotes[i]);

  //     // buy
  //     if (quotes[i] > quotes[i - 1]) {
  //       // opposite trade at same quote
  //       opTrade = trades.isOpenSellAt(i, quotes[i]);
  //       if (opTrade)
  //         trades.close(opTrade, i, quotes[i]);
  //       else
  //         trade = trades.buy(i, quotes[i]);
  //     }
  //     // sell  
  //     if (quotes[i] < quotes[i - 1]) {
  //       // opposite trade at same quote
  //       opTrade = trades.isOpenBuyAt(i, quotes[i]);
  //       if (opTrade)
  //         trades.close(opTrade, i, quotes[i]);
  //       else
  //         trade = trades.sell(i, quotes[i]);
  //     }
  //   }
  //   // close all open trades at end of quotes
  //   trades.closeAllOpenBuy(i - 1, quotes[i - 1]);
  //   trades.closeAllOpenSell(i - 1, quotes[i - 1]);
  //   trades.updateEquity(quotes[i - 1]);
  //   return trades;
  // }
