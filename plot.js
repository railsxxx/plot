
//https://plot.ly/javascript/plotlyjs-function-reference/#plotlyextendtraces

// const md = require("./model.js");
// const rand = md.rand;

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
      shape: 'hv'
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
  buy.x = buy.y = [0];
  sell.x = sell.y = [0];

  for (let i = 0; i < quotes.length; i++) {

  }

  buy.x = [25, 50, null, 60, 80];
  buy.y = [quotes[25], quotes[50], null, quotes[60], quotes[80]];
  sell.x = [10, 25, null, 50, 60];
  sell.y = [quotes[10], quotes[25], null, quotes[50], quotes[60]];
}

function showPlot() {
  quotesGenerator();
  tradeGenerator();
  initPlot('graph');
  //extendPlot('graph');
}
