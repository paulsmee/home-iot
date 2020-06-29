window.getTempData = function() {
    // const urlParams = new URLSearchParams(window.location.search);
    // console.log(window.location.search)

    $.get(`/sensor/temperature/livingroom/data-return`)

    .done(function(data) {
            livingRoomGraph1(data);
        })
        .catch(function(err) {
            console.log("uh oh");
        });
};


var livingRoomGraph1 = function(data) {
    Chart.defaults.global.defaultFontColor = "white";
    //   Chart.defaults.global.title.fontColor = "rgb(61, 196, 184)";
    var ctxline = document.getElementById("myLineChart").getContext("2d");
    window.myLine = new Chart(ctxline, {
        type: "line",
        data: {
            labels: data.label.reverse(),
            datasets: [{
                label: "Past 24 Hours",
                backgroundColor: "rgb(61, 196, 184)",
                lineTension: 0.4,
                borderColor: "hotpink",
                data: data.data.reverse(),
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

window.onload = function() {
    getTempData();
};