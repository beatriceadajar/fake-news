var jsonDataScatter = [];
var namesScatter = [];
var pageNamesScatter = [];
var articlesScatter = [];
var bgColorsScatter = ["rgba(230,25,75,0.5)", "rgba(60,180,75,0.5)", "rgba(255,225,25,0.5)", "rgba(0,130,200,0.5)","rgba(245,130,48,0.5)", "rgba(145,30,180,0.5)", "rgba(0, 128, 128,0.5)", "rgba(240,50,230,0.5)", "rgba(210,245,60,0.5)", "rgba(128, 0, 0,0.5)", "rgba(230, 190, 255,0.5)"];
var borderColorsScatter = ["rgba(230,25,75,1)", "rgba(60,180,75,1)", "rgba(255,225,25,1)", "rgba(0,130,200,1)","rgba(245,130,48,1)", "rgba(145,30,180,1)", "rgba(0, 128, 128,1)", "rgba(240,50,230,1)", "rgba(210,245,60,1)", "rgba(128, 0, 0,1)", "rgba(230, 190, 255,1)"];

var datasetsScatter = [];

var ctxScatter = document.getElementById("scatterChart");
var scatterChart = new Chart(ctxScatter, {
	type: 'scatter',
	data: {
		labels: namesScatter,
	    datasets: datasetsScatter
	},
	options: {
		showLines: false,
		legend: {
		    display: false,
		    position: 'right'
		},
		tooltips: {
			enabled: true,
	        callbacks: {
	        	beforeLabel: function(tooltipItem, data) {
	            	var title = datasetsScatter[tooltipItem.datasetIndex].label;
	            	return title;
	            },
	            label: function(tooltipItem, data) {
	            	var x = datasetsScatter[tooltipItem.datasetIndex].data[tooltipItem.index].x;
	            	var y = datasetsScatter[tooltipItem.datasetIndex].data[tooltipItem.index].y;
	            	var page = data.labels[tooltipItem.index];
	            	return 'reacts' + ': ' + x + ', ' + 'shares' + ': ' + y;
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
	        	    //max: 90000
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
	var pageNamesScatter = [];
	var totalPageCount = [];
	var totalReactCount = [];
	var totalShareCount = [];

	for (var i = 0; i < data.length; i++) {
		var pageName = data[i].page_id;
		pageNamesScatter.push(pageName);
	}

	var pageNamesScatterUnique = Array.from(new Set(pageNamesScatter));

	for (var l = 0; l < data.length; l++) {
		var jsonObj = {x: data[l].total_reacts, y: data[l].shares};
		var nameObj = pageNamesScatterUnique[l];
		var articleTitle = data[l].name;
		jsonDataScatter.push(jsonObj);
		namesScatter.push(nameObj);
		articlesScatter.push(articleTitle);
	}

	for (n = 0; n < jsonDataScatter.length; n++) {
		for (p = 0; p < data.length; p++) {
			if (namesScatter[n] == data[p].page_id) {
				var object = {label: articlesScatter[p], data: [jsonDataScatter[p]], backgroundColor: bgColorsScatter[n], borderColor: borderColorsScatter[n], hoverRadius: 5};
				datasetsScatter.push(object);
			}
		}
	}

	scatterChart.update();
});