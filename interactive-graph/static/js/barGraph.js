fakeNewsCanvas = document.getElementById("top-news");

// graph
var fakeNewsData = {
    labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    datasets: [{
        label: "Car Speed (mph)",
        data: [0, 59, 75, 20, 20, 55, 40]
    }]
};

var chartOptions = {
    legend: {
        display: true,
        position: "top"
    }
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
            fakeNewsData.labels = data.labels;
            fakeNewsData.datasets[0].label = data.title;
            fakeNewsData.datasets[0].data = data.data;
        })
        .catch((error) => {
            console.log(error);
        })
}
