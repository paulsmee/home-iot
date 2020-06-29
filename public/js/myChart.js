// var myLineChart = new Chart(ctx, {
//   type: "line",
//   data: data,
//   options: options,
// });

window.onload = function() {
    livingRoomGraph1()
    livingRoomGraph2()
};

var livingRoomGraph1 = function() {
    Chart.defaults.global.defaultFontColor = "white";
    //   Chart.defaults.global.title.fontColor = "rgb(61, 196, 184)";
    var ctxline = document.getElementById("myLineChart").getContext("2d");
    window.myLine = new Chart(ctxline, {
        type: "line",
        data: {
            labels: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
            ],
            datasets: [{
                label: "Past 24 Hours",
                backgroundColor: "rgb(61, 196, 184)",
                lineTension: 0.4,
                borderColor: "hotpink",
                data: [
                    12,
                    14,
                    16,
                    18,
                    18,
                    19,
                    20,
                    20,
                    20,
                    21,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    25,
                    24,
                    24,
                    23,
                    21,
                    21,
                    19,
                ],
                fill: false,
            }, ],
        },
        options: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Past 24 Hours",
            },
            tooltips: {
                mode: "index",
                intersect: false,
            },
            responsive: false,
            devicePixelRatio: 1.5,

            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Hour",
                    },
                }, ],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Celcius",
                    },
                }, ],
            },
        },
    });
}

var livingRoomGraph2 = function() {
    Chart.defaults.global.defaultFontColor = "white";
    //   Chart.defaults.global.title.fontColor = "rgb(61, 196, 184)";
    var ctxline = document.getElementById("myLineChart2").getContext("2d");
    window.myLine = new Chart(ctxline, {
        type: "line",
        data: {
            labels: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
            ],
            datasets: [{
                label: "Past 24 Hours",
                backgroundColor: "rgb(61, 196, 184)",
                lineTension: 0.4,
                borderColor: "hotpink",
                data: [
                    15,
                    15,
                    15,
                    16,
                    16,
                    17,
                    17,
                    18,
                    18,
                    19,
                    20,
                    20,
                    20,
                    20,
                    21,
                    21,
                    22,
                    21,
                    21,
                    20,
                    20,
                    21,
                    21,
                    19,
                ],
                fill: false,
            }, ],
        },
        options: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Past 24 Hours",
            },
            tooltips: {
                mode: "index",
                intersect: false,
            },
            responsive: true,
            devicePixelRatio: 1.5,

            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Hour",
                    },
                }, ],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Celcius",
                    },
                }, ],
            },
        },
    });
}