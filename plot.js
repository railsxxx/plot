
//https://plot.ly/javascript/plotlyjs-function-reference/#plotlyextendtraces

const md = require("./model.js");
// const rand = md.rand;

// Plot ###########################################
let quotes = [];
let buy = { x: [], y: [] };
let sell = { x: [], y: [] };

function initPlot(graph) {
  let trace0 = {
    y: quotes,
    mode: 'lines+markers',
    marker: { color: 'darkgray', size: 2 },
    line: { width: 1 },
    name: 'quotes'
  }
  let trace1 = {
    x: buy.x,
    y: buy.y,
    mode: 'lines+markers',
    marker: { color: 'blue', size: 2 },
    line: {
      width: 1,
      shape: 'vh'
    },
    connectgaps: false,
    type: 'scatter',
    name: 'buy'
  }
  let trace2 = {
    x: sell.x,
    y: sell.y,
    mode: 'lines+markers',
    marker: { color: 'red', size: 2 },
    line: {
      width: 1,
      shape: 'vh'
    },
    connectgaps: false,
    type: 'scatter',
    name: 'sell'
  }
  let data = [trace0, trace1, trace2];
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
    }
  };
  Plotly.plot(graph, data, layout);
}

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
  quotes = [0];
  let next = quote = 0;
  for (let i = 1; i < 100; i++) {
    quote += rand() < 0.5 ? -1 : 1;
    quotes.push(quote);
  }
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
  buy.x.length = buy.y.length = 0;
  sell.x.length = sell.y.length = 0;
  // console.log(buy);
  let trade;
  // let tradeCount =0, tradeCountMax = 10;
  for (let i = 1; i < quotes.length; i++) {
    if (quotes[i] > quotes[i - 1]) {
      // buy
      if (trade && trade.type == 'sell') {
        trade.close = new Point(i, quotes[i]);
        Balance(trade);
        // let id = tradesSell.indexOf(trade);
        // tradesSell.splice(id,1);
        sell.x.push(trade.open.x);
        sell.y.push(trade.open.y);
        sell.x.push(trade.close.x);
        sell.y.push(trade.close.y);
        sell.x.push(null);
        sell.y.push(null);
        // console.log(trade);
        // console.log(sell);
        trade = undefined;
        // tradeCount++;
        // if (tradeCount >=tradeCountMax)break;
      }
      if (!trade) {
        trade = new Trade('buy', new Point(i, quotes[i]));
        tradesBuy.push(trade);
      }
    }
    if (quotes[i] < quotes[i - 1]) {
      if (trade && trade.type == "buy") {
        trade.close = new Point(i, quotes[i]);
        Balance(trade);
        // let id = tradesBuy.indexOf(trade);
        // tradesBuy.splice(id,1);
        buy.x.push(trade.open.x);
        buy.y.push(trade.open.y);
        buy.x.push(trade.close.x);
        buy.y.push(trade.close.y);
        buy.x.push(null);
        buy.y.push(null);
        // console.log(trade);
        // console.log(buy);
        trade = undefined;
        // tradeCount++;
        // if (tradeCount >=tradeCountMax)break;
      }
      if (!trade) {
        trade = new Trade('sell', new Point(i, quotes[i]));
        tradesSell.push(trade);
      }
    }
  }

  // buy.x = [25, 50, null, 60, 80];
  // buy.y = [quotes[25], quotes[50], null, quotes[60], quotes[80]];
  // sell.x = [10, 25, null, 50, 60];
  // sell.y = [quotes[10], quotes[25], null, quotes[50], quotes[60]];
}
// Balance ###########################################
let balance = 0;

function Balance(trade) {
  if (trade.type == 'buy') {
    balance += trade.close.y - trade.open.y;
    let id = tradesBuy.indexOf(trade);
    tradesBuy.splice(id, 1);
  }
  if (trade.type == 'sell') {
    balance += trade.open.y - trade.close.y;
    let id = tradesSell.indexOf(trade);
    tradesSell.splice(id, 1);
  }
}

function showBalance() {
  console.log("Balance: " + balance);
}
// Run ###########################################
function showPlot(el) {
  quotesGenerator();
  tradeGenerator();
  initPlot(el);
  //extendPlot(el);
  showBalance()
}

// exports #######################################
exports.showPlot = showPlot;