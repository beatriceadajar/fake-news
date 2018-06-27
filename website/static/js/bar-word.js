var topics = [['medium'], ['share'], ['filipinos', 'filipino'], ['country'], ['illegal'], ['robredo', 'leni'], ['jueteng'], ['drugs', 'drug', 'droga'], ['pilipinas','philippines', 'philippine', 'philippines'],  ['duterte', 'president', 'rodrigo']]

var backgroundColorsBar = ['#223D58', '#212724', '#F3B13E', '#B12418', '#6C120A', '#051519','#153946', '#33768F', '#C8C8C8', '#A62C1A'];

// For drawing the lines
var percentage = [101/2457*100, 170/2457*100, 155/2457*100, 132/2457*100, 34/2457*100, 141/2457*100, 16/2457*100, 97/2457*100, 733/2457*100, 705/2457*100];

var ctxBar = document.getElementById("myChart10");
var myChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: topics,
    datasets: [{
        yAxisID: 'A',
        data: [178, 
               181, 
               184, 
               187, 
               187, 
               187, 
               304, 
               354, 
               695, 
               971],
        type: 'bar',
        backgroundColor: backgroundColorsBar
      }],
  },
  options: {
    legend: {
      display: false
  },
    pieceLabel: {
      render: 'label',
      fontColor: 'white'
  },
  scales: {
        yAxes:[{
            id: 'A',
              display: true,
              ticks: {
                  beginAtZero: true,
                  max: 1000
              },
              scaleLabel: {
            display: true,
            labelString: 'Number of Occurrences'
          }
        }
      ]
    },
  }
});