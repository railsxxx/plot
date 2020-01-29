
//https://plot.ly/javascript/plotlyjs-function-reference/#plotlyextendtraces
(function() {


  // plot ###################################
  function initPlot(graph, quotes, trades1, trades2) {
    let quotesIndex = [...Array(quotes.length).keys()];

    let arr1, arr2;
    // trades1
    let buy1 = {};
    arr1 = trades1.Buy.map((trade) => [trade.open.x, trade.close.x, null]);
    arr2 = trades1.BuyOpen.map((trade) => [trade.open.x, trade.open.x, null]);
    buy1.x = [].concat.apply([], arr1.concat(arr2));

    arr1 = trades1.Buy.map((trade) => [trade.open.y, trade.close.y, null]);
    // arr2 = trades1.BuyOpen.map((trade) => [trade.open.y, trade.open.y + 1, null]);
    arr2 = trades1.BuyOpen.map((trade) => [trade.open.y, trade.open.y + trade.open.target, null]);
    buy1.y = [].concat.apply([], arr1.concat(arr2));

    let sell1 = {};
    arr1 = trades1.Sell.map((trade) => [trade.open.x, trade.close.x, null]);
    arr2 = trades1.SellOpen.map((trade) => [trade.open.x, trade.open.x, null]);
    sell1.x = [].concat.apply([], arr1.concat(arr2));

    arr1 = trades1.Sell.map((trade) => [trade.open.y, trade.close.y, null]);
    // arr2 = trades1.SellOpen.map((trade) => [trade.open.y, trade.open.y - 1, null]);  
    arr2 = trades1.SellOpen.map((trade) => [trade.open.y, trade.open.y - trade.open.target, null]);
    sell1.y = [].concat.apply([], arr1.concat(arr2));

    let balance1 = {};
    balance1.x = trades1.balance.x;
    balance1.y = trades1.balance.y;
    let equity1 = trades1.equity;

    // trades2
    let buy2 = {};
    arr1 = trades2.Buy.map((trade) => [trade.open.x, trade.close.x, null]);
    arr2 = trades2.BuyOpen.map((trade) => [trade.open.x, trade.open.x, null]);
    buy2.x = [].concat.apply([], arr1.concat(arr2));

    arr1 = trades2.Buy.map((trade) => [trade.open.y, trade.close.y, null]);
    arr2 = trades2.BuyOpen.map((trade) => [trade.open.y, trade.open.y + 1, null]);
    // arr2 = trades2.BuyOpen.map((trade) => [trade.open.y, trade.open.y + trade.open.target, null]);
    buy2.y = [].concat.apply([], arr1.concat(arr2));

    let sell2 = {};
    arr1 = trades2.Sell.map((trade) => [trade.open.x, trade.close.x, null]);
    arr2 = trades2.SellOpen.map((trade) => [trade.open.x, trade.open.x, null]);
    sell2.x = [].concat.apply([], arr1.concat(arr2));

    arr1 = trades2.Sell.map((trade) => [trade.open.y, trade.close.y, null]);
    arr2 = trades2.SellOpen.map((trade) => [trade.open.y, trade.open.y - 1, null]);
    // arr2 = trades2.SellOpen.map((trade) => [trade.open.y, trade.open.y - trade.open.target, null]);
    sell2.y = [].concat.apply([], arr1.concat(arr2));

    let balance2 = {};
    balance2.x = trades2.balance.x;
    balance2.y = trades2.balance.y;
    let equity2 = trades2.equity;

    let quotes11 = {
      name: 'quotes',
      x: quotesIndex,
      y: quotes,
      //xaxis: 'x1',
      yaxis: 'y1',
      mode: 'lines+markers',
      marker: { color: 'darkgray', size: 2 },
      line: { width: 1 },
      type: 'scatter'
    };
    let buy11 = {
      name: 'buy1',
      x: buy1.x,
      y: buy1.y,
      //xaxis: 'x1',
      yaxis: 'y1',
      mode: 'lines+markers',
      marker: { color: 'blue', size: 2 },
      line: {
        width: 1,
        shape: 'vh'
      },
      connectgaps: false,
      type: 'scatter'
    };
    let sell11 = {
      name: 'sell1',
      x: sell1.x,
      y: sell1.y,
      //xaxis: 'x1',
      yaxis: 'y1',
      mode: 'lines+markers',
      marker: { color: 'red', size: 2 },
      line: {
        width: 1,
        shape: 'vh'
      },
      connectgaps: false,
      type: 'scatter'
    };
    let balance11 = {
      name: 'balance1',
      x: balance1.x,
      y: balance1.y,
      //xaxis: 'x2',
      yaxis: 'y2',
      mode: 'lines+markers',
      marker: { color: 'green', size: 2 },
      line: {
        width: 1,
        shape: 'hv'
      },
      type: 'scatter'
    };
    let equity11 = {
      name: 'equity1',
      x: quotesIndex,
      y: equity1,
      //xaxis: 'x2',
      yaxis: 'y2',
      mode: 'lines+markers',
      marker: { color: 'darkgray', size: 2 },
      line: {
        width: 1,
        shape: 'hv'
      },
      type: 'scatter'
    };

    let quotes22 = {
      name: 'quotes',
      x: quotesIndex,
      y: quotes,
      //xaxis: 'x1',
      yaxis: 'y3',
      mode: 'lines+markers',
      marker: { color: 'darkgray', size: 2 },
      line: { width: 1 },
      type: 'scatter'
    };
    let buy22 = {
      name: 'buy2',
      x: buy2.x,
      y: buy2.y,
      //xaxis: 'x1',
      yaxis: 'y3',
      mode: 'lines+markers',
      marker: { color: 'blue', size: 2 },
      line: {
        width: 1,
        shape: 'vh'
      },
      connectgaps: false,
      type: 'scatter'
    };
    let sell22 = {
      name: 'sell2',
      x: sell2.x,
      y: sell2.y,
      //xaxis: 'x1',
      yaxis: 'y3',
      mode: 'lines+markers',
      marker: { color: 'red', size: 2 },
      line: {
        width: 1,
        shape: 'vh'
      },
      connectgaps: false,
      type: 'scatter'
    };
    let balance22 = {
      name: 'balance2',
      x: balance2.x,
      y: balance2.y,
      //xaxis: 'x2',
      yaxis: 'y4',
      mode: 'lines+markers',
      marker: { color: 'green', size: 2 },
      line: {
        width: 1,
        shape: 'hv'
      },
      type: 'scatter'
    };
    let equity22 = {
      name: 'equity2',
      x: quotesIndex,
      y: equity2,
      //xaxis: 'x2',
      yaxis: 'y4',
      mode: 'lines+markers',
      marker: { color: 'darkgray', size: 2 },
      line: {
        width: 1,
        shape: 'hv'
      },
      type: 'scatter'
    };

    let data = [quotes11, buy11, sell11, balance11, equity11, quotes22, buy22, sell22, balance22, equity22];

    let layout = {
      title: 'Quotes',
      xaxis: {
        rangeslider: {
          visible: true,
          autorange: true
        }
      },
      yaxis: {
        fixedrange: false
      },
      grid: {
        rows: 4,
        columns: 1,
        pattern: 'coupled',
        //roworder: 'bottom to top'
      }
    };

    Plotly.newPlot(graph, data, layout);
  }

  // Quotes ###########################################
  function rand() {
    return Math.random();
  }
  function quotesGenerator() {
    let quotesCount = 200;
    quotes = [0];
    let quote = 0;
    for (let i = 1; i < quotesCount; i++) {
      quote += rand() < 0.5 ? -1 : 1;
      quotes.push(quote);
    }
    console.log(quotes);
    return quotes;
  }
  function quotesTest(steps) {
    let quotes = [0];
    let quote = 0;
    steps.forEach(step => {
      quote += step;
      quotes.push(quote);
    });
    return quotes;
  }
  // Balance ###########################################
  function Balance() {
    this.total = 0;
    this.x = [0];
    this.y = [0];
  }
  Balance.prototype.update = function(trade) {
    if (trade.isClosed()) {
      this.total += trade.getProfit();
      this.x.push(trade.close.x);
      this.y.push(this.total);
    }
  }

  // Trades ###########################################
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  function Trade(type) {
    this.type = type;
    this.id = undefined;
    this.open = undefined;
    this.close = undefined;
    this.stop = undefined;
    this.target = undefined;
    this.pair = undefined;
  }
  let tradeCount = 0;
  Trade.prototype.openAt = function(index, quote) {
    this.open = new Point(index, quote);
    // if (this.type == 'buy') this.target = quote + 1;
    // if (this.type == 'sell') this.target = quote - 1;
    this.id = index + "|" + quote + "|" + ++tradeCount;
    return this;
  }
  Trade.prototype.closeAt = function(index, quote) {
    this.close = new Point(index, quote);
    return this;
  }
  Trade.prototype.isOpen = function() {
    if (this.open && !this.close) return true;
    return false;
  }
  Trade.prototype.isClosed = function() {
    if (this.open && this.close) return true;
    return false;
  }
  Trade.prototype.getProfit = function() {
    if (!this.open || !this.close) return undefined;
    if (this.type == 'buy') {
      return this.close.y - this.open.y;
    }
    if (this.type == 'sell') {
      return this.open.y - this.close.y;
    }
  }
  Trade.prototype.getProfitOpen = function(quote) {
    if (!this.open || this.close) return undefined;
    if (this.type == 'buy') {
      return quote - this.open.y;
    }
    if (this.type == 'sell') {
      return this.open.y - quote;
    }
  }

  function Trades() {
    this.Buy = [];
    this.Sell = [];
    this.balance = new Balance();
    this.BuyOpen = [];
    this.SellOpen = [];
    this.equity = [0];
    this.tradeCountAll = 0;
    this.BuyAboveQuote = 0;
    this.SellBelowQuote = 0;
    this.BuyHighest = undefined;
    this.BuyLowest = undefined;
    this.SellHighest = undefined;
    this.SellLowest = undefined;
    this.breakevenBuyPair = undefined;
    this.breakevenSellPair = undefined;
  }
  Trades.prototype.buy = function(index, quote) {
    let trade = (new Trade('buy')).openAt(index, quote);
    this.BuyOpen.push(trade);
    return trade;
  }
  Trades.prototype.sell = function(index, quote) {
    let trade = (new Trade('sell')).openAt(index, quote);
    this.SellOpen.push(trade);
    return trade;
  }
  Trades.prototype.close = function(trade, index, quote) {
    trade.closeAt(index, quote);
    this.balance.update(trade);
    if (trade.type == 'buy') {
      const id = this.BuyOpen.indexOf(trade);
      if (id >= 0) this.BuyOpen.splice(id, 1);
      this.Buy.push(trade);
    }
    if (trade.type == 'sell') {
      const id = this.SellOpen.indexOf(trade);
      if (id >= 0) this.SellOpen.splice(id, 1);
      this.Sell.push(trade);
    }
  }
  Trades.prototype.isOpenBuyAt = function(index, quote) {
    return this.BuyOpen.find(el => el.open.y == quote);
  }
  Trades.prototype.isOpenSellAt = function(index, quote) {
    return this.SellOpen.find(el => el.open.y == quote);
  }
  Trades.prototype.isTargetBuyAt = function(index, quote) {
    return this.BuyOpen.find(el => el.target.y == quote);
  }
  Trades.prototype.isTargetSellAt = function(index, quote) {
    return this.SellOpen.find(el => el.target.y == quote);
  }
  Trades.prototype.updateEquity = function(quote) {
    let equity = 0;
    let breakevenBuyPair = breakevenBuyPairCount = 0;
    let breakevenSellPair = breakevenSellPairCount = 0;
    this.BuyOpen.forEach(trade => {
      equity += quote - trade.open.y;
      if (trade.pair) {
        breakevenBuyPairCount++;
        breakevenBuyPair += trade.open.y;
      }
    });
    this.SellOpen.forEach(trade => {
      equity += trade.open.y - quote;
      if (trade.pair) {
        breakevenSellPairCount++;
        breakevenSellPair += trade.open.y;
      }
    });
    this.equity.push(equity);
    this.breakevenBuyPair = breakevenBuyPair / breakevenBuyPairCount;
    this.breakevenSellPair = breakevenSellPair / breakevenSellPairCount;
  }
  Trades.prototype.closeAllOpenBuyNoPair = function(index, quote) {
    this.BuyOpen.forEach(trade => {
      if (!trade.pair) {
        this.close(trade, index, quote)
      }
    });
  }
  Trades.prototype.closeAllOpenSellNoPair = function(index, quote) {
    this.SellOpen.forEach(trade => {
      if (!trade.pair) {
        this.close(trade, index, quote)
      }
    });
  }
  Trades.prototype.closeAllOpenTradeIf = function(index, quote, array, predicate) {
    let trade;
    for (let i = 0; i < array.length; i++) {
      trade = array[i];
      if (predicate(trade, index, quote)) {
        this.close(trade, index, quote);
        i--;  //array reduced by one trade;
      }
    }
  }
  Trades.prototype.closeAllOpenBuyProfitNoPair = function(index, quote) {
    this.closeAllOpenTradeIf(index, quote, this.BuyOpen,
      trade => !trade.pair && trade.getProfitOpen(quote) >= 0);
  }
  Trades.prototype.closeAllOpenSellProfitNoPair = function(index, quote) {
    this.closeAllOpenTradeIf(index, quote, this.SellOpen,
      trade => !trade.pair && trade.getProfitOpen(quote) >= 0);
  }
  Trades.prototype.closeAllOpenBuyProfit = function(index, quote) {
    // this.BuyOpen.forEach(trade => {
    //   if (trade.getProfitOpen(quote) >= 0) {
    //     this.close(trade, index, quote)
    //   }
    // });
    this.closeAllOpenTradeIf(index, quote, this.BuyOpen,
      trade => trade.getProfitOpen(quote) >= 0);
  }
  Trades.prototype.closeAllOpenSellProfit = function(index, quote) {
    // this.SellOpen.forEach(trade => {
    //   if (trade.getProfitOpen(quote) >= 0) {
    //     this.close(trade, index, quote)
    //   }
    // });
    this.closeAllOpenTradeIf(index, quote, this.SellOpen,
      trade => trade.getProfitOpen(quote) >= 0);
  }
  Trades.prototype.closeAllOpenBuy = function(index, quote) {
    this.BuyOpen.forEach(trade => {
      trade.closeAt(index, quote);
      this.balance.update(trade);
      this.Buy.push(trade);
    });
    this.BuyOpen.length = 0;
  }
  Trades.prototype.closeAllOpenSell = function(index, quote) {
    this.SellOpen.forEach(trade => {
      trade.closeAt(index, quote);
      this.balance.update(trade);
      this.Sell.push(trade);
    });
    this.SellOpen.length = 0;
  }
  Trades.prototype.closeAllOpenTrades = function(index, quote) {
    this.closeAllOpenBuy(index, quote);
    this.closeAllOpenSell(index, quote);
  }
  Trades.prototype.updateTradeCount = function(quote) {
    this.BuyAboveQuote = this.SellBelowQuote = 0;
    this.BuyHighest = this.BuyLowest = undefined;
    this.SellHighest = this.SellLowest = undefined;
    this.tradeCountAll = this.BuyOpen.length + this.SellOpen.length;
    this.BuyOpen.forEach(el => {
      if (el.open.y >= quote) {
        this.BuyAboveQuote++;
        if (this.BuyHighest) {
          this.BuyHighest = (this.BuyHighest.open.y >= el.open.y) ? this.BuyHighest : el;
        }
        else {
          this.BuyHighest = el;
        }
        if (this.BuyLowest) {
          this.BuyLowest = (this.BuyLowest.open.y <= el.open.y) ? this.BuyLowest : el;
        }
        else {
          this.BuyLowest = el;
        }
      }
      else this.SellBelowQuote--;
    });
    this.SellOpen.forEach(el => {
      if (el.open.y <= quote) {
        this.SellBelowQuote++;
        if (this.SellLowest) {
          this.SellLowest = (this.SellLowest.open.y <= el.open.y) ? this.SellLowest : el;
        }
        else {
          this.SellLowest = el;
        }
        if (this.SellHighest) {
          this.SellHighest = (this.SellHighest.open.y >= el.open.y) ? this.SellHighest : el;
        }
        else {
          this.SellHighest = el;
        }
      }
      else this.BuyAboveQuote--;
    });
  }
  Trades.prototype.updateTradeCountFullRange = function() {
    this.BuyHighest = this.BuyLowest = undefined;
    this.SellHighest = this.SellLowest = undefined;
    this.tradeCountAll = this.BuyOpen.length + this.SellOpen.length;
    this.BuyOpen.forEach(el => {
      this.BuyAboveQuote++;
      if (this.BuyHighest) {
        this.BuyHighest = (this.BuyHighest.open.y >= el.open.y) ? this.BuyHighest : el;
      }
      else {
        this.BuyHighest = el;
      }
      if (this.BuyLowest) {
        this.BuyLowest = (this.BuyLowest.open.y <= el.open.y) ? this.BuyLowest : el;
      }
      else {
        this.BuyLowest = el;
      }
    });
    this.SellOpen.forEach(el => {
      this.SellBelowQuote++;
      if (this.SellLowest) {
        this.SellLowest = (this.SellLowest.open.y <= el.open.y) ? this.SellLowest : el;
      }
      else {
        this.SellLowest = el;
      }
      if (this.SellHighest) {
        this.SellHighest = (this.SellHighest.open.y >= el.open.y) ? this.SellHighest : el;
      }
      else {
        this.SellHighest = el;
      }
    });
  }

  // Pair ###########################################
  function Pair() {
    this.buy = undefined;
    this.sell = undefined;
    return this;
  }
  Pair.prototype.buyTrade = function(tradeBuy) {
    this.buy = tradeBuy;
    this.buy.pair = this;
    return this;
  }
  Pair.prototype.sellTrade = function(tradeSell) {
    this.sell = tradeSell;
    this.sell.pair = this;
    return this;
  }

  function Pairs() {
    this.PairsOpen = [];
    this.PairsClosed = [];
  }
  Pairs.prototype.add = function(buyTrade, sellTrade) {
    let pair = (new Pair()).buyTrade(buyTrade).sellTrade(sellTrade);
    this.PairsOpen.push(pair);
  }

  // Strategy ###########################################
  function strategySimple(quotes) {
    trades = new Trades();
    let trade = undefined;
    let i = 0;
    for (i = 1; i < quotes.length; i++) {
      trades.updateEquity(quotes[i]);
      // buy
      if (quotes[i] > quotes[i - 1]) {
        if (trade && trade.type == 'sell') {
          trades.close(trade, i, quotes[i]);
          trade = undefined;
        }
        if (!trade) {
          trade = trades.buy(i, quotes[i]);
        }
      }
      // sell  
      if (quotes[i] < quotes[i - 1]) {
        if (trade && trade.type == "buy") {
          trades.close(trade, i, quotes[i]);
          trade = undefined;
        }
        if (!trade) {
          trade = trades.sell(i, quotes[i]);
        }
      }
    }
    // close last trade at end of quotes
    trades.close(trade, i - 1, quotes[i - 1]);
    trades.updateEquity(quotes[i - 1]);
    return trades;
  }

  function strategySimple2(quotes) {
    trades = new Trades();
    let trade = undefined;
    let i = 0;
    for (i = 1; i < quotes.length; i++) {
      trades.updateEquity(quotes[i]);
      // buy
      if (quotes[i] > quotes[i - 1]) {
        trades.closeAllOpenSell(i, quotes[i]);

        trades.buy(i, quotes[i]);
      }
      // sell  
      if (quotes[i] < quotes[i - 1]) {
        trades.closeAllOpenBuy(i, quotes[i]);

        trade = trades.sell(i, quotes[i]);
      }
    }
    // close last trade at end of quotes
    trades.close(trade, i - 1, quotes[i - 1]);
    trades.updateEquity(quotes[i - 1]);
    return trades;
  }

  function strategySimple3(quotes) {
    pairs = new Pairs();
    trades = new Trades();
    tradeCount = 0;
    let trade = undefined;
    let pairTrade = undefined;
    let i = 0;
    for (i = 1; i < quotes.length; i++) {
      trades.updateEquity(quotes[i]);
      console.log("index: " + i);
      console.log("breakevenBuyPair: " + trades.breakevenBuyPair);
      console.log("breakevenSellPair: " + trades.breakevenSellPair);
      console.log(trade);
      // buy
      if (quotes[i] > quotes[i - 1]) {
        trades.closeAllOpenSellProfitNoPair(i, quotes[i]);
        // create and register pair
        if (trade && trade.type == 'sell' && !trade.pair) {
          pairTrade = trades.buy(i, quotes[i]);
          pairs.add(pairTrade, trade);
        }
        trade = pairTrade;
        // create buy trade if no pairTrade
        if (!trade)
          trade = trades.buy(i, quotes[i]);
      }
      // sell  
      if (quotes[i] < quotes[i - 1]) {
        trades.closeAllOpenBuyProfitNoPair(i, quotes[i]);
        // create and register pair
        if (trade && trade.type == 'buy' && !trade.pair) {
          pairTrade = trades.sell(i, quotes[i]);
          pairs.add(trade, pairTrade);
        }
        trade = pairTrade;
        // create sell trade if no pairTrade
        if (!trade)
          trade = trades.sell(i, quotes[i]);
      }
      console.log(pairTrade);
      pairTrade = undefined;
    }
    // close all open trades at end of quotes
    trades.closeAllOpenBuyNoPair(i - 1, quotes[i - 1]);
    trades.closeAllOpenSellNoPair(i - 1, quotes[i - 1]);
    trades.updateEquity(quotes[i - 1]);
    return trades;
  }

  function strategySimple_2Steps(quotes) {
    trades = new Trades();
    let trade = undefined;
    let i = 0;
    for (i = 1; i < quotes.length; i++) {
      trades.updateEquity(quotes[i]);
      // buy
      if (quotes[i] > quotes[i - 1]) {
        if (trade && trade.type == 'sell' && trade.open.x + 2 <= i) {
          trades.close(trade, i, quotes[i]);
          trade = undefined;
        }
        if (!trade) {
          trade = trades.buy(i, quotes[i]);
        }
      }
      // sell  
      if (quotes[i] < quotes[i - 1]) {
        if (trade && trade.type == "buy" && trade.open.x + 2 <= i) {
          trades.close(trade, i, quotes[i]);
          trade = undefined;
        }
        if (!trade) {
          trade = trades.sell(i, quotes[i]);
        }
      }
    }
    // close last trade at end of quotes
    trades.close(trade, i - 1, quotes[i - 1]);
    trades.updateEquity(quotes[i - 1]);
    return trades;
  }

  function strategySimple2_2Steps(quotes) {
    trades = new Trades();
    let trade = undefined;
    let tradeLast = undefined;
    let i = 0;
    for (i = 1; i < quotes.length; i++) {
      trades.updateEquity(quotes[i]);
      // // close trade after 2 steps
      if (tradeLast) {
        trades.close(tradeLast, i, quotes[i]);
      }
      if (trade) {
        tradeLast = trade;
      }
      // buy
      if (quotes[i] > quotes[i - 1]) {
        // trades.closeAllOpenSell(i, quotes[i]);
        // trades.closeAllOpenTradeIf(i, quotes[i], trades.SellOpen, (trade, i) => trade.open.x + 2 <= i);

        trade = trades.buy(i, quotes[i]);
      }
      // sell  
      if (quotes[i] < quotes[i - 1]) {
        // trades.closeAllOpenBuy(i, quotes[i]);
        // trades.closeAllOpenTradeIf(i, quotes[i], trades.BuyOpen, (trade, i) => trade.open.x + 2 <= i);

        trade = trades.sell(i, quotes[i]);
      }
    }
    // close last trade at end of quotes
    // trades.close(trade, i - 1, quotes[i - 1]);
    trades.closeAllOpenTrades();
    trades.updateEquity(quotes[i - 1]);
    return trades;
  }
  function strategySimple4(quotes) {
    trades = new Trades();
    let trade = undefined;
    let i = 0;
    for (i = 1; i < quotes.length; i++) {
      trades.updateEquity(quotes[i]);
      trades.updateTradeCount(quotes[i]);
      // buy
      if (quotes[i] > quotes[i - 1]) {
        trade = trades.isOpenSellAt(i, quotes[i]);
        if (trade) {
          trades.close(trade, i, quotes[i]);
        } else {
          trade = trades.SellLowest;
          if (trade) {
            trades.close(trade, i, quotes[i]);
          } else {
            trades.buy(i, quotes[i]);
          }
        }
      }
      // sell  
      if (quotes[i] < quotes[i - 1]) {
        trade = trades.isOpenBuyAt(i, quotes[i]);
        if (trade) {
          trades.close(trade, i, quotes[i]);
        } else {
          trade = trades.BuyHighest;
          if (trade) {
            trades.close(trade, i, quotes[i]);
          } else {
            trades.sell(i, quotes[i]);
          }
        }
      }
    }
    // close trades at end of quotes
    trades.closeAllOpenTrades(i - 1, quotes[i - 1]);
    trades.updateEquity(quotes[i - 1]);
    return trades;
  }
  function strategySimple4_1(quotes) {
    trades = new Trades();
    let tradeSell = tradeBuy = undefined;
    let tradeCountMax = 40;
    tradeCount = 0;
    let i = 0;
    for (i = 1; i < quotes.length; i++) {
      // console.log("index: " + i);
      trades.updateEquity(quotes[i]);
      trades.updateTradeCountFullRange();
      tradeSell = tradeBuy = undefined;
      // buy
      if (quotes[i] > quotes[i - 1]) {
        trade = trades.isOpenSellAt(i, quotes[i]);
        if (trade) {
          trades.close(trade, i, quotes[i]);
          // console.log("buy: sell closed:")
          // console.log(trade);
        } else {
          if (trades.tradeCountAll >= tradeCountMax) {
            tradeSell = trades.SellLowest;
            tradeBuy = trades.BuyLowest;
            if (tradeSell) {
              trades.close(tradeSell, i, quotes[i]);
              // console.log("SellLowest closed:")
              // console.log(tradeSell);
              if (tradeBuy && tradeBuy.open.y < quotes[i]) {
                trades.close(tradeBuy, i, quotes[i]);
                // console.log("BuyLowest closed:")
                // console.log(tradeBuy);
                trade = trades.buy(i, quotes[i]);
              } else {
                // only close tradeSell and no new trade buy
              }
            } else {
              trade = trades.buy(i, quotes[i]);
            }
          }
          else {
            trade = trades.buy(i, quotes[i]);
          }
        }
        // console.log("buy opened:")
        // console.log(trade);
      }
      // sell  
      if (quotes[i] < quotes[i - 1]) {
        trade = trades.isOpenBuyAt(i, quotes[i]);
        if (trade) {
          trades.close(trade, i, quotes[i]);
          // console.log("sell: buy closed:")
          // console.log(trade);
        } else {
          if (trades.tradeCountAll >= tradeCountMax) {
            tradeBuy = trades.BuyHighest;
            tradeSell = trades.SellHighest;
            if (tradeBuy) {
              trades.close(tradeBuy, i, quotes[i]);
              // console.log("BuyHighest closed:")
              // console.log(tradeBuy);
              if (tradeSell && tradeSell.open.y > quotes[i]) {
                trades.close(tradeSell, i, quotes[i]);
                // console.log("SellHighest closed:")
                // console.log(tradeSell);
                trade = trades.sell(i, quotes[i]);
              } else {
                // only close tradeBuy and no new trade sell
              }
            } else {
              trade = trades.sell(i, quotes[i]);
            }
          } else {
            trade = trades.sell(i, quotes[i]);
          }
        }
        // console.log("sell opened:")
        // console.log(trade);
      }
    }
    // close trades at end of quotes
    trades.closeAllOpenTrades(i - 1, quotes[i - 1]);
    trades.updateEquity(quotes[i - 1]);
    return trades;
  }



  // Run  ###########################################
  function showPlot(el) {
    // let quotes = quotesGenerator();
    // let quotes = quotesTest(steps1);
    let quotes = stepsQuote;
    let tradesSimple = strategySimple(quotes);
    // let trades2 = strategySimple2(quotes);
    // let trades2 = strategySimple3(quotes);
    // let trades2 = strategySimple_2Steps(quotes);
    // let trades2 = strategySimple2_2Steps(quotes);
    // let trades2 = strategySimple4(quotes);
    let trades2 = strategySimple4_1(quotes);
    // let trades2 = strategySimple(quotes);
    // let trades2 = strategy2(quotes);
    // let trades2 = strategy3(quotes);
    // let trades2 = strategyPair(quotes);


    initPlot(el, quotes, tradesSimple, trades2);
  }

  // public function ################################
  window.showPlot = showPlot;

  // testquotes #####################################
  let steps1 = [1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1];

  let stepsQuote = [
    0,
    1,
    2,
    3,
    4,
    3,
    2,
    1,
    0,
    1,
    2,
    1,
    2,
    3,
    4,
    5,
    6,
    5,
    4,
    5,
    4,
    3,
    2,
    1,
    2,
    3,
    2,
    3,
    2,
    1,
    2,
    1,
    2,
    3,
    2,
    3,
    4,
    3,
    2,
    3,
    2,
    3,
    4,
    3,
    2,
    3,
    2,
    1,
    0,
    1,
    0,
    -1,
    0,
    -1,
    0,
    -1,
    -2,
    -3,
    -2,
    -1,
    -2,
    -3,
    -2,
    -3,
    -2,
    -3,
    -2,
    -1,
    -2,
    -1,
    0,
    -1,
    -2,
    -3,
    -2,
    -3,
    -2,
    -3,
    -2,
    -1,
    -2,
    -1,
    -2,
    -3,
    -2,
    -3,
    -4,
    -5,
    -4,
    -5,
    -6,
    -7,
    -6,
    -7,
    -6,
    -7,
    -6,
    -7,
    -8,
    -7,
    -6,
    -7,
    -8,
    -9,
    -8,
    -9,
    -8,
    -9,
    -10,
    -11,
    -10,
    -9,
    -10,
    -9,
    -10,
    -11,
    -12,
    -11,
    -12,
    -13,
    -12,
    -11,
    -10,
    -9,
    -10,
    -11,
    -12,
    -13,
    -14,
    -13,
    -14,
    -13,
    -12,
    -11,
    -10,
    -9,
    -10,
    -9,
    -10,
    -11,
    -12,
    -11,
    -12,
    -11,
    -12,
    -13,
    -12,
    -13,
    -14,
    -13,
    -14,
    -13,
    -14,
    -13,
    -14,
    -13,
    -14,
    -13,
    -14,
    -15,
    -16,
    -17,
    -18,
    -19,
    -20,
    -19,
    -18,
    -17,
    -16,
    -17,
    -18,
    -17,
    -18,
    -19,
    -18,
    -19,
    -18,
    -19,
    -20,
    -21,
    -22,
    -23,
    -22,
    -21,
    -20,
    -21,
    -22,
    -21,
    -22,
    -23,
    -22,
    -21,
    -22,
    -21,
    -22,
    -21,
    -22,
    -23,
    -24,
    -25
  ]
}())
