var topics2 = [['medium'], ['share'], ['filipinos'], ['country'], ['illegal'], ['robredo'], ['jueteng'], ['drugs'], ['philippines'],  ['duterte']]

var backgroundColorsPie = ['#223D58', '#212724', '#F3B13E', '#B12418', '#6C120A', '#051519','#153946', '#33768F', '#C8C8C8', '#A62C1A'];

// For drawing the lines
var percentagePie = [101/2457*100, 170/2457*100, 155/2457*100, 132/2457*100, 34/2457*100, 141/2457*100, 16/2457*100, 97/2457*100, 733/2457*100, 705/2457*100];

Chart.pluginService.register({
  beforeDraw: (function(chart) {
    if (chart.config.type === 'doughnut') {
      var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx;

      ctx.restore();
      var fontSize = (height / 150).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";

      var percent = chart.config.data.datasets[0].data[0]
      var label = chart.config.data.labels[0]
      var text = percent.toFixed(2) + '%';
      textX = Math.round((width - ctx.measureText(text).width) / 2 + 2),
      textY = height / 2 + 15;

      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  }).bind(this)
});

for(var i = 0; i < 10; i++){
  var chartName = 'myChart' + i.toString();
  var ctx = document.getElementById(chartName);
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: topics2[i],
      datasets: [{
	      label: 'Percentage',
        data: [percentagePie[i], 100-percentagePie[i]],
        backgroundColor: [backgroundColorsPie[i]]
      }]
    },
    options: {
      responsive: true,
      legend: {
        display: true,
        onClick: (e) => e.stopPropagation()
      },
      tooltips: {
        enabled: false
      },
      hover: {
        mode: null
      }
    }
  });
}

Chart.pluginService.register({
  beforeDraw: function(x){ return null;}
});