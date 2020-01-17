
//https://plot.ly/javascript/plotlyjs-function-reference/#plotlyextendtraces

// plot ###################################
function initPlot(graph, quotes, trades) {
  let quotesIndex = [...Array(quotes.length).keys()];
  let buy = {};
  buy.x = trades.Buy.map((trade) => [trade.open.x, trade.close.x, null]);
  buy.x = [].concat.apply([], buy.x);
  buy.y = trades.Buy.map((trade) => [trade.open.y, trade.close.y, null]);
  buy.y = [].concat.apply([], buy.y);
  let sell = {};
  sell.x = trades.Sell.map((trade) => [trade.open.x, trade.close.x, null]);
  sell.x = [].concat.apply([], sell.x);
  sell.y = trades.Sell.map((trade) => [trade.open.y, trade.close.y, null]);
  sell.y = [].concat.apply([], sell.y);
  let balance = {};
  balance.x = trades.balance.x;
  balance.y = trades.balance.y;

  let trace1 = {
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
  let trace2 = {
    name: 'buy',
    x: buy.x,
    y: buy.y,
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
  let trace3 = {
    name: 'sell',
    x: sell.x,
    y: sell.y,
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
  let balance1 = {
    name: 'balance',
    x: balance.x,
    y: balance.y,
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

  let data = [trace1, trace2, trace3, balance1];

  let layout = {
    title: 'Quotes',
    xaxis: {
      rangeslider: {
        visible: true,
        autorange: true
      }
    },
    yaxis: {
      fixedrange: true
    },
    grid: {
      rows: 2,
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
  let quotesCount = 100;
  quotes = [0];
  let quote = 0;
  for (let i = 1; i < quotesCount; i++) {
    quote += rand() < 0.5 ? -1 : 1;
    quotes.push(quote);
  }
  return quotes;
}

// Balance ###########################################
function Balance() {
  this.total = 0;
  this.x = [];
  this.y = [];

  this.update = function(trade) {
    if (trade.type == 'buy') {
      this.total += trade.close.y - trade.open.y;
    }
    if (trade.type == 'sell') {
      this.total += trade.open.y - trade.close.y;
    }
    this.x.push(trade.close.x);
    this.y.push(this.total);
  }
}

// Trades ###########################################
function Point(x, y) {
  this.x = x;
  this.y = y;
}
function Trade(type, open) {
  this.type = type;
  this.open = open;
  this.close;
}
function Trades() {
  this.Buy = [];
  this.Sell = [];
  this.balance = new Balance();
}
Trades.prototype.buy = function(index, quote) {
  let point = new Point(index, quote);
  let trade = new Trade('buy', point);
  this.Buy.push(trade);
  return trade;
}
Trades.prototype.sell = function(index, quote) {
  let trade = new Trade('sell', new Point(index, quote));
  this.Sell.push(trade);
  return trade;
}
Trades.prototype.close = function(trade, index, quote) {
  trade.close = new Point(index, quote);
  this.balance.update(trade);
}

// Strategy ###########################################
function strategySimple(quotes) {
  trades = new Trades();
  let trade = undefined;
  let i;
  for (i = 1; i < quotes.length; i++) {
    if (quotes[i] > quotes[i - 1]) {
      // buy
      if (trade && trade.type == 'sell') {
        trades.close(trade, i, quotes[i]);
        trade = undefined;
      }
      if (!trade) {
        trade = trades.buy(i, quotes[i]);
      }
    }
    if (quotes[i] < quotes[i - 1]) {
      // sell
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
  return trades;
}

// Run  ###########################################
function showPlot(el) {
  let quotes = quotesGenerator();
  let tradesSimple = strategySimple(quotes);
  initPlot(el, quotes, tradesSimple);
}


