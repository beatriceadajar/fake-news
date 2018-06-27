var jsonData = [];
var names = [];
var bgColors = ["rgba(230,25,75,0.75)", "rgba(60,180,75,0.75)", "rgba(255,225,25,0.75)", "rgba(0,130,200,0.75)","rgba(245,130,48,0.75)", "rgba(145,30,180,0.75)", "rgba(0, 128, 128,0.75)", "rgba(240,50,230,0.75)", "rgba(210,245,60,0.75)", "rgba(128, 0, 0,0.75)", "rgba(230, 190, 255,0.8)"];
var borderColors = ["rgba(230,25,75,1)", "rgba(60,180,75,1)", "rgba(255,225,25,1)", "rgba(0,130,200,1)","rgba(245,130,48,1)", "rgba(145,30,180,1)", "rgba(0, 128, 128,1)", "rgba(240,50,230,1)", "rgba(210,245,60,1)", "rgba(128, 0, 0,1)", "rgba(230, 190, 255,1)"];

var datasets = [];

var ctx = document.getElementById("bubbleChart");
var bubbleChart = new Chart(ctx, {
	type: 'bubble',
	data: {
		labels: names,
	    datasets: datasets
	},
	options: {
		showLines: false,
		legend: {
		    display: true,
		    position: 'right'
		},
		tooltips: {
			enabled: true,
	        callbacks: {
	        	beforeLabel: function(tooltipItem, data) {
	            	var title = datasets[tooltipItem.datasetIndex].label;
	            	return title;
	            },
	            label: function(tooltipItem, data) {
	            	var x = datasets[tooltipItem.datasetIndex].data[tooltipItem.index].x;
	            	var y = datasets[tooltipItem.datasetIndex].data[tooltipItem.index].y;
	            	var r = datasets[tooltipItem.datasetIndex].data[tooltipItem.index].r * 20;
	            	return 'reacts' + ': ' + x + ', ' + 'shares' + ': ' + y + ', ' + 'articles' + ': ' + r;
	            }
	        }
	    },
	    scales: {
	    	yAxes: [{
	        	scaleLabel: {
	        		display: true,
	        		labelString: "Number of Shares"
	        	},
	        	ticks: {
	        	    beginAtZero: false,
	        	    max: 90000
	        	}
	        }],
	        xAxes: [{
	        	scaleLabel: {
	        		display: true,
	        		labelString: "Number of Reactions"
	        	},
	        	ticks: {
	        	    beginAtZero: true
	        	}
	        }]
	    }
	}
});

$.getJSON('data.json', function(data) {
	var pageNames = [];
	var totalPageCount = [];
	var totalReactCount = [];
	var totalShareCount = [];

	for (var i = 0; i < data.length; i++) {
		var pageName = data[i].page_id;
		pageNames.push(pageName);
	}

	var pageNamesUnique = Array.from(new Set(pageNames));

	for (var j = 0; j < pageNamesUnique.length; j++) {
		totalPageCount[j] = 0;
		totalReactCount[j] = 0;
		totalShareCount[j] = 0;
		for (var k = 0; k < data.length; k++) {
			if (pageNamesUnique[j] == data[k].page_id) {
				totalPageCount[j] = totalPageCount[j]+1;
				totalReactCount[j] += data[k].total_reacts;
				if(data[k].shares != undefined) totalShareCount[j] += data[k].shares;
				else totalShareCount[j] += 0;
			}
		}
	}

	for (var l = 0; l < pageNamesUnique.length; l++) {
		var jsonObj = {x: totalReactCount[l], y: totalShareCount[l], r: totalPageCount[l]/20};
		var nameObj = pageNamesUnique[l];
		jsonData.push(jsonObj);
		names.push(nameObj);
	}

	for (n = 0; n < jsonData.length; n++) {
		var object = {label: names[n], data: [jsonData[n]], backgroundColor: bgColors[n], borderColor: borderColors[n], hoverRadius: 5};
		datasets.push(object);
	}

	bubbleChart.update();
});