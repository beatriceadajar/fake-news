fakeNewsCanvas = document.getElementById("top-news").getContext("2d");

var message = message;

// graph
var fakeNewsData = {
    labels: labels,
    datasets: [{
        label: title,
        data: data,
        backgroundColor: ["#223D58", "#212724", "#F3B13E", "#B12418", "#6C120A", "#051519", "#153946", "#33768F", "#C8C8C8", "#A62C1A"]
    }]
};

var chartOptions = {
    tooltips: {
        callbacks: {
            label: (tooltipItem, data) => {
                var stringLabel = ["title: " + data.datasets[0].label[tooltipItem.index]];
                stringLabel.push("message: " + message[tooltipItem.index]);
                stringLabel.push("count: " + tooltipItem.yLabel);

                return stringLabel;
            }
        }
    },
    legend: {
        display: false
    },
    responsive: true
};

var fakeNewsChart = new Chart(fakeNewsCanvas, {
    type: "bar",
    data: fakeNewsData,
    options: chartOptions
});

// ajax
document.getElementById("fake-news").onchange = (event) => {
    axios({
        method: "get",
        url: $SCRIPT_ROOT + "/update-plot",
        params: {
            ref: event.target.value
        }
    })
        .then((response) => {
            const data = response.data;
            message = data.message;
            fakeNewsData.labels = data.labels;
            fakeNewsData.datasets[0].label = data.title;
            fakeNewsData.datasets[0].data = data.data;

            fakeNewsChart.destroy();

            fakeNewsChart = new Chart(fakeNewsCanvas, {
                type: "bar",
                data: fakeNewsData,
                options: chartOptions
            });            
        })
        .catch((error) => {
            console.log(error);
        })
}
