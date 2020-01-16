
//https://plot.ly/javascript/plotlyjs-function-reference/#plotlyextendtraces

// const md = require("./model.js");
// const rand = md.rand;

// Plot ###########################################
let quotes = [];
let quotesIndex = [];
let buy = { x: [], y: [] };
let sell = { x: [], y: [] };
let balance = { x: [], y: [] };

function initPlot(graph) {
  var trace1 = {
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
  var trace2 = {
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
  var trace3 = {
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
  var trace4 = {
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

  var data = [trace1, trace2, trace3, trace4];

  var layout = {
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
};

// function extendPlot(graph) {
//   let cnt = 0;
//   let interval = setInterval(function() {
//     Plotly.extendTraces(graph, {
//       y: [[rand()], [rand()]]
//     }, [0, 1])

//     cnt = cnt + 1;
//     if (cnt === 10) clearInterval(interval);
//   }, 1000);
// }

// Quotes ###########################################

function rand() {
  return Math.random();
};
function quotesGenerator() {
  let quotesCount = 100;
  quotes = [0];
  let quote = 0;
  for (let i = 1; i < quotesCount; i++) {
    quote += rand() < 0.5 ? -1 : 1;
    quotes.push(quote);
  }
  quotesIndex = [...Array(quotesCount).keys()];
};
// Trades ###########################################
function Point(x, y) {
  this.x = x;
  this.y = y;
};
function Trade(type, open) {
  this.type = type;
  this.open = open;
  this.close;
};
let tradesBuy = [];
let tradesSell = [];

function tradeGenerator() {
  initBalance();
  buy.x.length = buy.y.length = 0;
  sell.x.length = sell.y.length = 0;
  let trade;
  for (let i = 1; i < quotes.length; i++) {
    if (quotes[i] > quotes[i - 1]) {
      // buy
      if (trade && trade.type == 'sell') {
        trade.close = new Point(i, quotes[i]);
        sell.x.push(trade.open.x);
        sell.y.push(trade.open.y);
        sell.x.push(trade.close.x);
        sell.y.push(trade.close.y);
        sell.x.push(null);
        sell.y.push(null);
        Balance(trade);
        trade = undefined;
      }
      if (!trade) {
        trade = new Trade('buy', new Point(i, quotes[i]));
        tradesBuy.push(trade);
      }
    }
    if (quotes[i] < quotes[i - 1]) {
      // sell
      if (trade && trade.type == "buy") {
        trade.close = new Point(i, quotes[i]);
        buy.x.push(trade.open.x);
        buy.y.push(trade.open.y);
        buy.x.push(trade.close.x);
        buy.y.push(trade.close.y);
        buy.x.push(null);
        buy.y.push(null);
        Balance(trade);
        trade = undefined;
      }
      if (!trade) {
        trade = new Trade('sell', new Point(i, quotes[i]));
        tradesSell.push(trade);
      }
    }
  }
}
// Balance ###########################################
let balanceTotal = 0;

function initBalance(){
  balanceTotal = 0;
  balance.x.length = balance.y.length = 0;
  balance.x.push(0);
  balance.y.push(0);
}

function Balance(trade) {
  if (trade.type == 'buy') {
    balanceTotal += trade.close.y - trade.open.y;
    let id = tradesBuy.indexOf(trade);
    tradesBuy.splice(id, 1);
  }
  if (trade.type == 'sell') {
    balanceTotal += trade.open.y - trade.close.y;
    let id = tradesSell.indexOf(trade);
    tradesSell.splice(id, 1);
  }
  balance.x.push(trade.close.x);
  balance.y.push(balanceTotal);
  //console.log(balance);
}

function showBalance() {
  console.log("Balance: " + balanceTotal);
}
// Run ###########################################
function showPlot(el) {
  quotesGenerator();
  tradeGenerator();
  initPlot(el);
  //extendPlot(el);
  showBalance()
}

