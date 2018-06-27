function handleLegendClick(graph) {
  var chart = graph.chart;
  if ( chart.graphs[graph.index].hidden == true ) {
    chart.showGraph(chart.graphs[graph.index]);
  }
  else{
    chart.hideGraph(chart.graphs[graph.index]);
  }
  return false;
}

function balloony(graphDataItem, graph) {
  return "[" + graph.title + "] " + (graphDataItem.dataContext.title || "Untitled") + ": " + graphDataItem.values.y + " \u2012 " + new Date(graphDataItem.values.x);
}

//CHANGE COLOR SCHEME NA LANG HAHAHA PANGET EH
var backgroundColorsTrend = ['#223D58', '#212724', '#F3B13E', '#B12418', '#6C120A', '#051519','#153946', '#33768F', '#C8C8C8', '#A62C1A', '#000000'];

var chartTrend = AmCharts.makeChart("chartdiv", {
  "type": "xy",
  "theme": "light",
  "dataDateFormat": "YYYY-MM-DD JJ:NN:SS",
  "startDuration": 0,
  "marginRight": 40,
  "marginLeft": 40,
  "autoMarginOffset": 20,
  "mouseWheelZoomEnabled":true,
  "legend": {
    "horizontalGap": 10,
    "useGraphSettings": true,
    "markerSize": 10,
    "clickMarker": handleLegendClick,
    "clickLabel": handleLegendClick
  },
  "balloon": {
    "cornerRadius": 6,
    "adjustBorderColor": false,
    "horizontalPadding": 8,
    "verticalPadding": 8,
    "borderThickness": 0,
    "color": "#FFFFFF",


  },
  "chartCursor": {
    "zoomable": false,
    "cursorAlpha": 0
  },
  "graphs": [
  {
    "title": "ClassifiedTrends",
    "bullet": "round",
    "lineAlpha": 1,
    "lineColor": backgroundColorsTrend[0],
    "xField": "date1",
    "yField": "y1",
    "hidden": false,
    "balloonFunction": balloony,
    "balloonText": "[[value]]"
  }, {
    "title": "i.am.filipino",
    "bullet": "round",
    "lineAlpha": 1,
    "lineColor": backgroundColorsTrend[1],
    "xField": "date2",
    "yField": "y2",
    "hidden": false,
    "balloonFunction": balloony,
    "balloonText": "[[value]]"             
  }, {
    "title": "DuterteNewsInfo",
    "bullet": "round",
    "lineAlpha": 1,
    "lineColor": backgroundColorsTrend[2],
    "xField": "date3",
    "yField": "y3",
    "hidden": false,
    "balloonFunction": balloony,
    "balloonText": "[[value]]"
  }, {
    "title": "FilipiNewsPH",
    "bullet": "round",
    "lineAlpha": 1,
    "lineColor": backgroundColorsTrend[3],
    "xField": "date4",
    "yField": "y4",
    "hidden": false,
    "balloonFunction": balloony,
    "balloonText": "[[value]]"
  }, {
    "title": "benign0",
    "bullet": "round",
    "lineAlpha": 1,
    "lineColor": backgroundColorsTrend[4],
    "xField": "date5",
    "yField": "y5",
    "hidden": false,
    "balloonFunction": balloony,
    "balloonText": "[[value]]"
  }, {
    "title": "NetizenOfficialPH",
    "bullet": "round",
    "lineAlpha": 1,
    "lineColor": backgroundColorsTrend[5],
    "xField": "date6",
    "yField": "y6",
    "hidden": false,
    "balloonFunction": balloony,
    "balloonText": "[[value]]"
  }, {
    "title": "okd2ads",
    "bullet": "round",
    "lineAlpha": 1,
    "lineColor": backgroundColorsTrend[6],
    "xField": "date7",
    "yField": "y7",
    "hidden": false,
    "balloonFunction": balloony,
    "balloonText": "[[value]]"
  }, {
    "title": "PinoyViralNewsPH",
    "bullet": "round",
    "lineAlpha": 1,
    "lineColor": backgroundColorsTrend[7],
    "xField": "date8",
    "yField": "y8",
    "hidden": false,
    "balloonFunction": balloony,
    "balloonText": "[[value]]"
  }, {
    "title": "PinoyWorld.co",
    "bullet": "round",
    "lineAlpha": 1,
    "lineColor": backgroundColorsTrend[8],
    "xField": "date9",
    "yField": "y9",
    "hidden": false,
    "balloonFunction": balloony,
    "balloonText": "[[value]]"
  }, {
    "title": "PublicTrendingOfficial",
    "bullet": "round",
    "lineAlpha": 1,
    "lineColor": backgroundColorsTrend[9],
    "xField": "date10",
    "yField": "y10",
    "hidden": false,
    "balloonFunction": balloony,
    "balloonText": "[[value]]"
  }, {
    "title": "TheVolatilian",
    "bullet": "round",
    "lineAlpha": 1,
    "lineColor": backgroundColorsTrend[10],
    "xField": "date11",
    "yField": "y11",
    "hidden": false,
    "balloonFunction": balloony,
    "balloonText": "[[value]]"
  }
  ],
  "chartScrollbar": {
    "graph": "g1",
    "oppositeAxis":false,
    "offset":30,
    "scrollbarHeight": 50,
    "backgroundAlpha": 0,
    "selectedBackgroundAlpha": 0.1,
    "selectedBackgroundColor": "#888888",
    "graphFillAlpha": 0,
    "graphLineAlpha": 0.5,
    "selectedGraphFillAlpha": 0,
    "selectedGraphLineAlpha": 1,
    "autoGridCount":true,
    "color":"#AAAAAA"
  },
  "chartCursor": {
    "pan": true,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha":1,
    "cursorColor":"#258cbb",
    "limitToGraph":"g1",
    "valueLineAlpha":0.2,
    "valueZoomable":true
  },
  "valueScrollbar":{
    "oppositeAxis":false,
    "offset":50,
    "scrollbarHeight":10
  },
  "valueAxes": [{
    "id": "v1",
    "axisAlpha": 0
  }, {
    "id": "v2",
    "axisAlpha": 0,
    "position": "bottom",
    "type": "date"
  }],
  "dataProvider": arr  
});