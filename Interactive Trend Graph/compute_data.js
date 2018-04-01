var arr = [];

var convertPoints = function(data, label1, label2) {
  var obj = Object.values(data).map(function(c) {
    var score = (c.like * 0.25 + (c.total_reacts - c.like) * 0.5 + c.comments * 0.75 + c.shares * 1) || 0;
    return {[label1]: moment(c.created_time).format('YYYY-MM-DD HH:mm:ss').toString(),[label2]: score, title: c.name};
  });
  Object.keys(obj).forEach(function(item) {
    arr.push(obj[item]);
  })
}

convertPoints(ClassifiedTrends, "date1", "y1");
convertPoints(IAmFilipino, "date2", "y2");
convertPoints(DuterteNewsInfo, "date3", "y3");
convertPoints(FilipiNewsPH, "date4", "y4");
convertPoints(Benigno, "date5", "y5");
convertPoints(NetizenPHOfficial, "date6", "y6");
convertPoints(Okd2Ads, "date7", "y7");
convertPoints(PinoyViralNewsPH, "date8", "y8");
convertPoints(PinoyWorld, "date9", "y9");
convertPoints(PublicTrendingOfficial, "date10", "y10");
convertPoints(TheVolatilian, "date11", "y11");

var backgroundColors = ['#223D58', '#212724', '#F3B13E', '#B12418', '#6C120A', '#051519','#153946', '#33768F', '#C8C8C8', '#A62C1A'];