
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

  // Trade ###########################################
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
    this.loss = undefined;
  }
  let tradeID = 0;
  Trade.prototype.openAt = function(index, quote) {
    this.open = new Point(index, quote);
    // if (this.type == 'buy') this.target = quote + 1;
    // if (this.type == 'sell') this.target = quote - 1;
    this.id = index + "|" + quote + "|" + ++tradeID;
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

  // Trades ###########################################
  function Trades() {
    this.Buy = [];
    this.Sell = [];
    this.balance = new Balance();
    this.BuyOpen = [];
    this.SellOpen = [];
    this.equity = [0];
    this.tradeCountBuyOpen = 0;
    this.tradeCountSellOpen = 0;
    this.tradeCountAllOpen = 0;
    this.tradeCountAllClosed = 0;
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
    this.tradeCountAllClosed = this.Buy.length + this.Sell.length;
  }
  Trades.prototype.isOpenBuyAt = function(index, quote) {
    return this.BuyOpen.find(el => el.open.y == quote);
  }
  Trades.prototype.isOpenSellAt = function(index, quote) {
    return this.SellOpen.find(el => el.open.y == quote);
  }
  Trades.prototype.isOpenBuyNoPairAt = function(index, quote) {
    return this.BuyOpen.find(el => el.open.y == quote && !el.pair);
  }
  Trades.prototype.isOpenSellNoPairAt = function(index, quote) {
    return this.SellOpen.find(el => el.open.y == quote && !el.pair);
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
  Trades.prototype.getSellOpenNoPairFor = function(tradeBuy) {
    let openBuy = tradeBuy.open.y
    let tradeRes = undefined;
    this.SellOpen.forEach(tradeSell => {
      if (tradeSell.open.y < openBuy && !tradeSell.pair) {
        tradeRes = (tradeRes && tradeRes.open.y < tradeSell.open.y) ? tradeRes : tradeSell;
      }
    });
    return tradeRes;
  }
  Trades.prototype.getBuyOpenNoPairFor = function(tradeSell) {
    let openSell = tradeSell.open.y
    let tradeRes = undefined;
    this.BuyOpen.forEach(tradeBuy => {
      if (tradeBuy.open.y > openSell && !tradeBuy.pair) {
        tradeRes = (tradeRes && tradeRes.open.y > tradeBuy.open.y) ? tradeRes : tradeBuy;
      }
    });
    return tradeRes;
  }
  Trades.prototype.closeAllOpenBuyNoPair = function(index, quote) {
    this.closeAllOpenTradeIf(index, quote, this.BuyOpen,
      trade => !trade.pair);
  }
  Trades.prototype.closeAllOpenSellNoPair = function(index, quote) {
    this.closeAllOpenTradeIf(index, quote, this.SellOpen,
      trade => !trade.pair);
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
    this.closeAllOpenTradeIf(index, quote, this.BuyOpen,
      trade => trade.getProfitOpen(quote) >= 0);
  }
  Trades.prototype.closeAllOpenSellProfit = function(index, quote) {
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
    this.tradeCountAllClosed = this.Buy.length + this.Sell.length;
  }
  Trades.prototype.closeAllOpenSell = function(index, quote) {
    this.SellOpen.forEach(trade => {
      trade.closeAt(index, quote);
      this.balance.update(trade);
      this.Sell.push(trade);
    });
    this.SellOpen.length = 0;
    this.tradeCountAllClosed = this.Buy.length + this.Sell.length;
  }
  Trades.prototype.closeAllOpenTrades = function(index, quote) {
    this.closeAllOpenBuy(index, quote);
    this.closeAllOpenSell(index, quote);
  }
  Trades.prototype.updateTradesOpenFullRange = function() {
    this.BuyHighest = this.BuyLowest = undefined;
    this.SellHighest = this.SellLowest = undefined;
    this.tradeCountBuyOpen = this.BuyOpen.length;
    this.tradeCountSellOpen = this.SellOpen.length;
    this.tradeCountAllOpen = this.tradeCountBuyOpen + this.tradeCountSellOpen;
    this.BuyOpen.forEach(el => {
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
    return pair;
  }
  Pairs.prototype.close = function(pair, index, quote) {
    if (pair) {
      trades.close(pair.buy, index, quote);
      trades.close(pair.sell, index, quote);
      const id = this.PairsOpen.indexOf(pair);
      if (id >= 0) this.PairsOpen.splice(id, 1);
      this.PairsClosed.push(pair);
    }
    return pair;
  }
  Pairs.prototype.closeFirst = function(trades, index, quote) {
    let pair = this.PairsOpen.shift();
    if (pair) {
      trades.close(pair.buy, index, quote);
      trades.close(pair.sell, index, quote);
      this.PairsClosed.push(pair);
    }
    return pair;
  }

  // Stack ###########################################
  function Layer() {
    this.first = undefined;
    this.buy = undefined;
    this.sell = undefined;
  }
  Layer.prototype.add = function(trade) {
    if (this.first == undefined) this.first = trade;
    if (trade.type == 'buy') this.buy = trade;
    if (trade.type == 'sell') this.sell = trade;
    return this;
  }
  Layer.prototype.delete = function(trade) {
    if (this.first == trade) this.first = undefined;
    if (trade.type == 'buy') this.buy = undefined;
    if (trade.type == 'sell') this.sell = undefined;
    return this;
  }
  Layer.prototype.isEmpty = function() {
    if (!this.first && !this.buy && !this.sell) return true;
    return false;
  }

  function Stack() {
    this.batch = {};
  }
  Stack.prototype.add = function(trade) {
    if (this.batch[trade.open.y]) {
      this.batch[trade.open.y].add(trade);
    } else {
      this.batch[trade.open.y] = (new Layer()).add(trade);
    }
  }
  Stack.prototype.getBuyAt = function(quote) {
    if (this.batch[quote]) return this.batch[quote].buy;
    else return undefined;
  }
  Stack.prototype.getSellAt = function(quote) {
    if (this.batch[quote]) return this.batch[quote].sell;
    else return undefined;
  }
  Stack.prototype.getTradeAt = function(quote) {
    if (this.batch[quote]) return this.batch[quote].first;
    else return undefined;
  }
  Stack.prototype.delete = function(trade) {
    if (this.batch[trade.open.y]) {
      this.batch[trade.open.y].delete(trade);
      if (this.batch[trade.open.y].isEmpty()) delete this.batch[trade.open.y];
    }
  }
  Stack.prototype.deleteAll = function() {
    this.batch = {};
  }
  Stack.prototype.getWeightBuyAbove = function(quote) {
    let countSell = countBuy = 0;
    let keys = Object.keys(this.batch);
    for (let key of keys) {
      if (key >= quote) {
        if (this.batch[key].sell) countSell++;
        if (this.batch[key].buy) countBuy++;
      }
    }
    return countBuy - countSell;
  }
  Stack.prototype.getWeightSellBelow = function(quote) {
    let countSell = countBuy = 0;
    let keys = Object.keys(this.batch);
    for (let key of keys) {
      if (key <= quote) {
        if (this.batch[key].sell) countSell++;
        if (this.batch[key].buy) countBuy++;
      }
    }
    return countSell - countBuy;
  }
  Stack.prototype.getBuyAbove = function(quote) {
    let countSell = countBuy = 0;
    let trade = undefined;
    let keys = Object.keys(this.batch);
    for (let key of keys) {
      if (key > quote) {
        if (this.batch[key].sell) countSell++;
        if (this.batch[key].buy) {
          countBuy++;
          if (!trade || trade.open.y > this.batch[key].buy.open.y) {
            trade = this.batch[key].buy;
          }
        }
      }
    }
    if (countBuy > countSell) return trade;
    return undefined;
  }
  Stack.prototype.getSellBelow = function(quote) {
    let countSell = countBuy = 0;
    let trade = undefined;
    let keys = Object.keys(this.batch);
    for (let key of keys) {
      if (key < quote) {
        if (this.batch[key].sell) {
          countSell++;
          if (!trade || trade.open.y < this.batch[key].sell.open.y) {
            trade = this.batch[key].sell;
          }
          if (this.batch[key].buy) countBuy++;
        }
      }
    }
    if (countSell > countBuy) return trade;
    return undefined;
  }

  // Strategy ###########################################
  function strategySimple(quotes) {
    trades = new Trades();
    let trade = undefined;
    let minProfit = 0;
    let i = 0;
    for (i = 1; i < quotes.length; i++) {
      trades.updateEquity(quotes[i]);
      // buy
      if (quotes[i] > quotes[i - 1]) {
        if (trade && trade.type == 'sell') {
          // check exit
          if ((trades.equity[i] + trades.balance.total) > minProfit) {
            // trades.closeAllOpenTrades(i, quotes[i]);
            trades.balance.total = 0;
          }
          trades.close(trade, i, quotes[i]);
          // reinit trade
          trade = undefined;
        }
        if (!trade) {
          trade = trades.buy(i, quotes[i]);
        }
      }
      // sell  
      if (quotes[i] < quotes[i - 1]) {
        if (trade && trade.type == "buy") {
          // check exit
          if ((trades.equity[i] + trades.balance.total) > minProfit) {
            // trades.closeAllOpenTrades(i, quotes[i]);
            trades.balance.total = 0;
          }
          trades.close(trade, i, quotes[i]);
          // reinit trade
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

  function strategyStack(quotes) {
    stack = new Stack();
    trades = new Trades();
    tradeID = 0;
    let tradeCountMaxOpen = 40;
    let tradeCountOpen = 0;
    let trade = prevTrade = lastTrade = undefined;
    let minProfit = 0;
    let direction = undefined;
    let i = 0;
    for (i = 1; i < quotes.length; i++) {
      trades.updateEquity(quotes[i]);
      // buy ------------------
      if (quotes[i] > quotes[i - 1]) {
        if (direction == 'sell') {
          // turn around
          // check exit
          if ((trades.equity[i] + trades.balance.total) > minProfit) {
            trades.closeAllOpenTrades(i, quotes[i]);
            trades.balance.total = 0;
            stack.deleteAll();
          }
        }
        trade = stack.getSellAt(quotes[i])
        // close opposite trade at same quote
        if (trade) {
          trades.close(trade, i, quotes[i]);
          stack.delete(trade);
        }
        trade = stack.getBuyAt(quotes[i])
        // set buy trade
        if (!trade) {
          trade = trades.buy(i, quotes[i]);
          stack.add(trade);
        }
        // set trade direction
        direction = 'buy';
      }
      // sell ------------------
      if (quotes[i] < quotes[i - 1]) {
        if (direction == 'buy') {
          // turn around
          // check exit
          if ((trades.equity[i] + trades.balance.total) > minProfit) {
            trades.closeAllOpenTrades(i, quotes[i]);
            trades.balance.total = 0;
            stack.deleteAll();
          }
        }
        trade = stack.getBuyAt(quotes[i])
        // close opposite trade at same quote
        if (trade) {
          trades.close(trade, i, quotes[i]);
          stack.delete(trade);
        }
        trade = stack.getSellAt(quotes[i])
        // set sell trade
        if (!trade) {
          trade = trades.sell(i, quotes[i]);
          stack.add(trade);
        }
        // set trade direction
        direction = 'sell';
      }
      // console.log("index: " + i + ", quote: " + quotes[i]);
      // console.log(stack);
      // console.log('.');
    }
    // close all open trades at end of quotes
    trades.closeAllOpenTrades(i - 1, quotes[i - 1]);
    trades.updateEquity(quotes[i - 1]);
    return trades;
  }

  function strategyStack4(quotes) {
    stack = new Stack();
    trades = new Trades();
    tradeID = 0;
    let tradeCountMaxOpen = 40;
    let tradeCountOpen = 0;
    let trade = undefined;
    let weight = 0;
    let minProfit = 0;
    let direction = undefined;
    let i = 0;
    for (i = 1; i < quotes.length; i++) {
      trades.updateEquity(quotes[i]);
      // buy ------------------
      if (quotes[i] > quotes[i - 1]) {
        if (direction == 'sell') {
          // turn around
          // check exit
          if ((trades.equity[i] + trades.balance.total) > minProfit) {
            trades.closeAllOpenTrades(i, quotes[i]);
            trades.balance.total = 0;
            stack.deleteAll();
          }
        }
        // close opposite trade at same quote if any
        trade = stack.getSellAt(quotes[i])
        if (trade) {
          trades.close(trade, i, quotes[i]);
          stack.delete(trade);
        }
        trade = stack.getBuyAt(quotes[i])
        if (!trade) {
          weight = stack.getWeightBuyAbove(quotes[i]);
          if (weight > 0) {
            // buy > sell 
            // no buy
          } else {
            // buy <= sell
            // set buy trade
            trade = trades.buy(i, quotes[i]);
            stack.add(trade);
          }
        }
        // set trade direction
        direction = 'buy';
      }
      // sell ------------------
      if (quotes[i] < quotes[i - 1]) {
        if (direction == 'buy') {
          // turn around
          // check exit
          if ((trades.equity[i] + trades.balance.total) > minProfit) {
            trades.closeAllOpenTrades(i, quotes[i]);
            trades.balance.total = 0;
            stack.deleteAll();
          }
        }
        // close opposite trade at same quote if any
        trade = stack.getBuyAt(quotes[i])
        if (trade) {
          trades.close(trade, i, quotes[i]);
          stack.delete(trade);
        }
        trade = stack.getSellAt(quotes[i])
        if (!trade) {
          weight = stack.getWeightSellBelow(quotes[i]);
          if (weight > 0) {
            // sell > buy
            // no sell
          } else {
            // sell <=  buy
            // set sell trade
            trade = trades.sell(i, quotes[i]);
            stack.add(trade);
          }
        }
        // set trade direction
        direction = 'sell';
      }
      // console.log("index: " + i + ", quote: " + quotes[i]);
      // console.log(stack);
      // console.log('.');
    }
    // close all open trades at end of quotes
    trades.closeAllOpenTrades(i - 1, quotes[i - 1]);
    trades.updateEquity(quotes[i - 1]);
    return trades;
  }

  function strategyStack5(quotes) {
    stack = new Stack();
    trades = new Trades();
    tradeID = 0;
    let tradeCountMaxOpen = 40;
    let tradeCountOpen = 0;
    let trade = aheadTrade = behindTrade = undefined;
    let loss = 0;
    let minProfit = 0;
    let direction = undefined;
    let i = 0;
    for (i = 1; i < quotes.length; i++) {
      trades.updateEquity(quotes[i]);
      // buy ------------------
      if (quotes[i] > quotes[i - 1]) {
        if (direction == 'sell') {
          // turn around
          // check exit
          if ((trades.equity[i] + trades.balance.total) > minProfit) {
            trades.closeAllOpenTrades(i, quotes[i]);
            trades.balance.total = 0;
            stack.deleteAll();
          }
        }
        // close opposite trade at same quote if no loss
        trade = stack.getSellAt(quotes[i])
        if (trade && (!trade.loss || trade.loss <= 0)) {
          trades.close(trade, i, quotes[i]);
          stack.delete(trade);
        }
        trade = stack.getBuyAt(quotes[i])
        if (!trade) {
          // set new buy trade
          trade = trades.buy(i, quotes[i]);
          stack.add(trade);
          // get buy above
          aheadTrade = stack.getBuyAbove(quotes[i]);
          if (aheadTrade) {
            // buy > sell 
            // delete buy above
            trades.close(aheadTrade, i, quotes[i]);
            stack.delete(aheadTrade);
            // account loss
            trade.loss = aheadTrade.open.y - quotes[i];
            if (aheadTrade.loss) trade.loss += aheadTrade.loss;
          }
          // get buy below
          behindTrade = stack.getBuyAt(quotes[i - 1]);
          if (behindTrade && behindTrade.loss && behindTrade.loss > 0) {
            // delete buy below
            trades.close(behindTrade, i, quotes[i]);
            stack.delete(behindTrade);
            // account loss
            trade.loss = behindTrade.loss - 1;
          }
        }
        // set trade direction
        direction = 'buy';
      }
      // sell ------------------
      if (quotes[i] < quotes[i - 1]) {
        if (direction == 'buy') {
          // turn around
          // check exit
          if ((trades.equity[i] + trades.balance.total) > minProfit) {
            trades.closeAllOpenTrades(i, quotes[i]);
            trades.balance.total = 0;
            stack.deleteAll();
          }
        }
        // close opposite trade at same quote if any
        trade = stack.getBuyAt(quotes[i])
        if (trade && (!trade.loss || trade.loss <= 0)) {
          trades.close(trade, i, quotes[i]);
          stack.delete(trade);
        }
        trade = stack.getSellAt(quotes[i])
        if (!trade) {
          // set new sell trade
          trade = trades.sell(i, quotes[i]);
          stack.add(trade);
          // get sell below
          aheadTrade = stack.getSellBelow(quotes[i]);
          if (aheadTrade) {
            // sell > buy
            // delete sell below
            trades.close(aheadTrade, i, quotes[i]);
            stack.delete(aheadTrade);
            // account loss
            trade.loss = quotes[i] - aheadTrade.open.y;
            if (aheadTrade.loss) trade.loss += aheadTrade.loss;
          }
          // get sell above
          behindTrade = stack.getSellAt(quotes[i - 1]);
          if (behindTrade && behindTrade.loss && behindTrade.loss > 0) {
            // delete sell above
            trades.close(behindTrade, i, quotes[i]);
            stack.delete(behindTrade);
            // accout loss
            trade.loss = behindTrade.loss - 1;
          }
        }
        // set trade direction
        direction = 'sell';
      }
      // console.log("index: " + i + ", quote: " + quotes[i]);
      // console.log(stack);
      // console.log('.');
    }
    // close all open trades at end of quotes
    trades.closeAllOpenTrades(i - 1, quotes[i - 1]);
    trades.updateEquity(quotes[i - 1]);
    return trades;
  }

  // Run  ###########################################
  let quotesCount = 1000;

  function showPlot(el) {
    // let quotes = quotesGenerator();
    // let quotes = quotesTest(steps1);
    // let quotes = stepsQuote1;
    // let quotes = stepsQuote2;
    // let quotes = stepsQuote3;
    let quotes = stepsQuote4;
    // let trades1 = strategySimple(quotes);
    // let trades2 = strategySimple2(quotes);
    // let trades2 = strategySimple3(quotes);
    // let trades2 = strategySimple3_1(quotes);
    // let trades2 = strategySimple3_2(quotes);
    let trades1 = strategyStack(quotes);
    // let trades2 = strategyStack2(quotes);
    // let trades2 = strategyStack3(quotes);
    // let trades1 = strategyStack4(quotes);
    let trades2 = strategyStack5(quotes);

    initPlot(el, quotes, trades1, trades2);
    // trimStepsQuote(stepsQuote4);

  }

  // public function ################################
  window.showPlot = showPlot;

  // testquotes #####################################
  function trimStepsQuote(stepsQuote) {
    console.log("Length: " + stepsQuote.length);
    let string = stepsQuote.toString();
    console.log(string);
  }
  let steps1 = [1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1];

  let stepsQuote1 = [0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 1, 2, 3, 4, 5, 6, 5, 4, 5, 4, 3, 2, 1, 2, 3, 2, 3, 2, 1, 2, 1, 2, 3, 2, 3, 4, 3, 2, 3, 2, 3, 4, 3, 2, 3, 2, 1, 0, 1, 0, -1, 0, -1, 0, -1, -2, -3, -2, -1, -2, -3, -2, -3, -2, -3, -2, -1, -2, -1, 0, -1, -2, -3, -2, -3, -2, -3, -2, -1, -2, -1, -2, -3, -2, -3, -4, -5, -4, -5, -6, -7, -6, -7, -6, -7, -6, -7, -8, -7, -6, -7, -8, -9, -8, -9, -8, -9, -10, -11, -10, -9, -10, -9, -10, -11, -12, -11, -12, -13, -12, -11, -10, -9, -10, -11, -12, -13, -14, -13, -14, -13, -12, -11, -10, -9, -10, -9, -10, -11, -12, -11, -12, -11, -12, -13, -12, -13, -14, -13, -14, -13, -14, -13, -14, -13, -14, -13, -14, -15, -16, -17, -18, -19, -20, -19, -18, -17, -16, -17, -18, -17, -18, -19, -18, -19, -18, -19, -20, -21, -22, -23, -22, -21, -20, -21, -22, -21, -22, -23, -22, -21, -22, -21, -22, -21, -22, -23, -24, -25];

  let stepsQuote2 = [0, -1, -2, -1, 0, 1, 2, 3, 2, 3, 2, 3, 4, 5, 6, 5, 4, 3, 4, 3, 4, 3, 2, 3, 4, 3, 4, 5, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 5, 6, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 11, 10, 11, 10, 9, 10, 11, 10, 11, 12, 11, 10, 9, 10, 9, 10, 9, 8, 7, 8, 7, 8, 9, 8, 9, 8, 7, 6, 5, 6, 7, 8, 7, 6, 5, 4, 3, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 2, 1, 2, 3, 4, 5, 6, 5, 6, 5, 4, 5, 6, 7, 6, 7, 6, 5, 6, 5, 4, 5, 6, 5, 6, 7, 8, 9, 8, 9, 8, 7, 8, 9, 10, 9, 8, 7, 6, 5, 6, 5, 6, 5, 4, 5, 4, 5, 6, 7, 6, 5, 6, 5, 4, 3, 4, 5, 4, 3, 4, 3, 2, 1, 0, -1, 0, -1, -2, -3, -2, -3, -2, -3, -2, -1, 0, -1, -2, -3, -2, -1, 0, 1, 0, 1, 2, 1, 2, 1]

  let stepsQuote3 = [0, -1, -2, -1, -2, -3, -2, -3, -4, -5, -6, -5, -6, -7, -8, -7, -6, -7, -8, -7, -8, -7, -8, -7, -6, -5, -4, -3, -4, -3, -4, -5, -6, -5, -4, -3, -4, -3, -4, -5, -4, -5, -6, -7, -6, -5, -4, -3, -4, -5, -6, -5, -6, -7, -8, -9, -10, -11, -10, -9, -10, -9, -10, -9, -8, -9, -8, -9, -8, -9, -10, -9, -8, -9, -10, -11, -12, -11, -10, -11, -12, -11, -10, -9, -8, -7, -8, -7, -6, -5, -4, -5, -6, -7, -8, -7, -8, -7, -6, -7, -6, -7, -8, -9, -8, -7, -8, -9, -10, -11, -12, -11, -10, -9, -8, -9, -10, -11, -10, -11, -10, -9, -8, -9, -10, -9, -8, -9, -8, -7, -6, -7, -6, -7, -8, -9, -8, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -16, -15, -16, -17, -16, -17, -18, -19, -18, -17, -16, -15, -16, -17, -16, -17, -16, -15, -16, -17, -16, -15, -14, -13, -14, -13, -12, -13, -12, -13, -14, -13, -14, -13, -12, -13, -14, -15, -16, -17, -16, -15, -16, -17, -16, -15, -14, -13, -14, -15, -14, -15, -14, -15, -16, -15, -16, -15, -14, -15, -14, -15, -16, -15, -16, -17, -18, -19, -20, -19, -20, -19, -18, -17, -16, -15, -16, -17, -16, -15, -14, -13, -12, -13, -14, -15, -14, -15, -14, -15, -14, -13, -14, -13, -14, -15, -14, -15, -16, -17, -16, -17, -18, -17, -18, -17, -16, -15, -14, -15, -16, -15, -14, -13, -14, -13, -14, -13, -12, -11, -10, -11, -12, -13, -12, -13, -14, -15, -16, -15, -16, -17, -16, -15, -16, -17, -16, -17, -16, -17, -18, -17, -18, -17, -16, -15, -16, -15, -16, -15, -14, -13, -12, -11, -12, -13, -14, -13, -12, -13, -14, -13, -12, -11, -10, -9, -8, -7, -6, -7, -8, -7, -8, -9, -8, -9, -8, -7, -8, -7, -8, -7, -6, -7, -6, -7, -8, -9, -8, -9, -10, -11, -10, -11, -12, -13, -12, -13, -12, -13, -14, -15, -16, -15, -14, -13, -14, -15, -14, -13, -12, -13, -14, -15, -14, -13, -12, -11, -12, -13, -12, -13, -12, -11, -12, -13, -14, -13, -14, -15, -16, -15, -14, -13, -14, -13, -14, -15, -16, -15, -14, -15, -16, -17, -16, -15, -16, -17, -18, -19, -20, -21, -20, -21, -22, -21, -22, -21, -22, -23, -22, -23, -22, -23, -22, -21, -22, -23, -24, -23, -24, -25, -26, -25, -26, -27, -28, -29, -28, -29, -30, -31, -32, -33, -32, -33, -32, -31, -30, -31, -30, -31, -32, -33];

  let stepsQuote4 = [0, -1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -7, -8, -9, -8, -9, -10, -9, -10, -9, -8, -7, -6, -5, -4, -3, -4, -3, -4, -5, -6, -7, -8, -9, -8, -9, -8, -7, -8, -9, -8, -9, -8, -7, -8, -9, -8, -9, -8, -7, -6, -5, -6, -5, -6, -7, -6, -5, -6, -5, -4, -3, -2, -1, 0, -1, -2, -3, -2, -1, -2, -3, -2, -3, -4, -5, -6, -7, -6, -5, -6, -5, -6, -7, -8, -9, -10, -11, -10, -9, -8, -7, -6, -7, -6, -5, -6, -7, -8, -7, -6, -5, -6, -5, -4, -5, -4, -3, -2, -3, -4, -5, -4, -3, -4, -3, -2, -1, 0, -1, 0, 1, 2, 1, 0, 1, 0, -1, -2, -1, -2, -1, 0, -1, -2, -1, 0, -1, 0, -1, 0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 2, 1, 0, -1, -2, -3, -2, -3, -2, -3, -4, -5, -4, -3, -4, -3, -2, -1, 0, -1, -2, -3, -2, -1, -2, -1, 0, -1, 0, 1, 0, 1, 0, 1, 0, -1, -2, -1, 0, -1, 0, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 3, 2, 3, 2, 3, 4, 5, 4, 5, 4, 5, 4, 3, 2, 3, 2, 1, 2, 1, 0, -1, 0, -1, 0, 1, 2, 3, 2, 3, 4, 5, 4, 5, 4, 5, 6, 5, 6, 5, 4, 3, 4, 3, 2, 1, 0, 1, 0, -1, -2, -3, -4, -5, -4, -5, -4, -5, -6, -7, -6, -7, -8, -9, -8, -9, -10, -11, -10, -11, -10, -11, -10, -11, -10, -9, -8, -9, -10, -11, -10, -9, -10, -9, -10, -11, -10, -9, -10, -11, -10, -9, -10, -9, -8, -9, -10, -9, -8, -7, -6, -5, -6, -5, -6, -5, -6, -5, -4, -5, -4, -5, -6, -7, -8, -7, -8, -9, -8, -9, -8, -7, -8, -9, -8, -7, -8, -7, -6, -7, -8, -9, -10, -9, -8, -9, -8, -7, -6, -7, -6, -5, -6, -5, -6, -5, -4, -3, -2, -1, 0, 1, 0, 1, 0, -1, 0, 1, 0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 6, 7, 6, 5, 4, 5, 4, 5, 4, 5, 6, 5, 4, 5, 6, 5, 6, 5, 6, 7, 6, 7, 6, 7, 8, 7, 6, 7, 6, 5, 4, 5, 6, 5, 6, 7, 6, 7, 6, 7, 8, 7, 8, 9, 10, 11, 12, 11, 12, 13, 14, 13, 12, 11, 10, 9, 8, 9, 8, 7, 8, 9, 10, 9, 10, 11, 10, 11, 12, 11, 10, 9, 10, 9, 8, 7, 8, 9, 8, 9, 10, 9, 10, 11, 12, 13, 12, 13, 12, 11, 12, 13, 14, 13, 14, 13, 14, 13, 12, 13, 12, 11, 12, 11, 10, 11, 12, 11, 10, 9, 10, 11, 12, 11, 10, 9, 10, 9, 10, 11, 12, 11, 10, 9, 8, 9, 10, 11, 10, 11, 10, 9, 10, 11, 12, 13, 14, 15, 14, 13, 14, 15, 14, 13, 14, 13, 14, 13, 12, 13, 12, 11, 10, 9, 10, 9, 10, 9, 8, 9, 8, 9, 10, 11, 10, 11, 10, 11, 12, 11, 10, 9, 8, 7, 8, 7, 8, 7, 6, 5, 6, 5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 0, -1, -2, -1, -2, -1, 0, 1, 2, 1, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 0, -1, 0, -1, -2, -1, -2, -3, -4, -5, -4, -3, -4, -5, -4, -3, -4, -3, -2, -1, 0, 1, 0, 1, 2, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, -1, 0, 1, 2, 3, 2, 3, 2, 1, 2, 1, 0, 1, 0, 1, 2, 3, 4, 3, 4, 3, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 0, -1, 0, 1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 1, 2, 1, 2, 1, 2, 3, 2, 3, 2, 1, 2, 1, 0, 1, 0, 1, 0, -1, -2, -1, -2, -3, -2, -3, -4, -5, -6, -7, -6, -7, -6, -7, -8, -7, -6, -7, -6, -7, -8, -9, -8, -9, -10, -11, -10, -11, -10, -11, -10, -9, -10, -9, -8, -7, -8, -7, -6, -5, -4, -3, -4, -3, -4, -5, -4, -3, -2, -1, -2, -1, 0, -1, 0, -1, -2, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 1, 2, 3, 2, 3, 2, 1, 0, -1, 0, 1, 2, 1, 2, 1, 0, 1, 2, 1, 0, -1, 0, 1, 0, 1, 0, -1, -2, -3, -4, -3, -2, -3, -4, -5, -4, -5, -4, -5, -4, -3, -2, -1, -2, -3, -4, -3, -4, -5, -4, -3, -2, -1, -2, -1, 0, 1, 0, 1, 2, 1, 2, 1, 2, 3, 2, 1, 0, -1, -2, -1, -2, -3, -2, -3, -4, -3, -2, -3, -2, -1, 0, 1, 2, 3, 2, 1, 0, -1, 0, 1, 0, -1, 0, 1, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -7, -6, -5, -4, -3, -2, -1, -2, -1, 0, -1, 0, -1, 0, 1, 0, 1, 2, 1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 2, 1, 2, 1, 0, 1, 0, -1, 0, -1, -2, -1, 0, -1, -2, -1, 0, 1, 2, 1, 0, 1, 0, -1, 0, 1, 2, 1, 0, -1, -2, -1, 0, 1, 2, 3, 4, 5, 4, 5, 4, 5, 6, 7, 6, 7, 8, 7, 6, 5, 4, 5, 6, 7, 6, 7, 6, 7, 6, 7, 6, 5, 4, 5, 6, 7, 6, 5, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 4, 5, 6, 5, 4, 5, 4, 5, 4, 3, 4, 3, 4, 5, 4, 5, 6, 7, 6, 5, 6, 5, 4, 3, 2, 1, 2, 1];

}())


