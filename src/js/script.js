svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){

  // Включение слайдера
  $('#diagram-slider').owlCarousel({
    loop:false,
    nav:true,
    items:1,
  });

});

// Define a plugin to provide data labels
Chart.plugins.register({
    afterDatasetsDraw: function(chart, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chart.ctx;

        var numColor, positionYCorrect, positionXCorrect;

        if(chart.canvas.id == 'Chart01') {
          numColor = '#fff';
          positionYCorrect = 15;
          positionXCorrect = 0;
        }
        else {
          numColor = '#000';
          positionYCorrect = 0;
          positionXCorrect = 10;
        }

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function(element, index) {
                    // Draw the text in black, with the specified font
                    ctx.fillStyle = numColor;

                    var fontSize = 16;
                    var fontStyle = 'normal';
                    var fontFamily = 'Helvetica Neue';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    // Just naively convert to string for now
                    var dataString = dataset.data[index].toString();
                    if(dataset.data[index] < 0) {
                      positionXCorrect * -1;
                    }

                    // Make sure alignment settings are correct
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var padding = 5;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x + positionXCorrect, position.y + positionYCorrect);
                });
            }
        });
    }
});

var barChartData = {
    labels: ["2016", "2017", "2018"],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: '#2b4989',
        data: [
            10,
            18,
            25,
        ]
    }, {
        label: 'Dataset 2',
        backgroundColor: '#405e9e',
        data: [
            60,
            55,
            50,
        ]
    }, {
        label: 'Dataset 3',
        backgroundColor: '#617fbd',
        data: [
            30,
            27,
            25,
        ]
    }]

};

var horizontalBarChartData1 = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: '#ff0',
        data: [
            10,
            -5,
            2,
            1,
            3,
            -1,
            -2,
            0.8
        ]
    },
    ]
};
>>>>>>> 5b98c335f5936fbe93ad21811f63b9123fcd6965

var horizontalBarChartData2 = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: '#ff0',
        data: [
            8,
            -3,
            6,
            1,
            3,
            -1,
            -2,
            0.8
        ]
    },
    ]
};

window.onload = function() {

    var ctx = document.getElementById("Chart01");
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            title:{
                display:false,
            },
            legend:{
                display:false,
            },
            tooltips: {
                enabled: false
            },
            responsive: false,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            if (value === 100 || value === 50 || value === 0) {
                              return value + '%';
                            }
                            else return '';
                        }
                    }
                }]
            }
        }
    });

    var cty = document.getElementById("Chart02");
    window.myHorizontalBar = new Chart(cty, {
        type: 'horizontalBar',
        data: horizontalBarChartData1,
        options: {
            elements: {
                rectangle: {
                    borderWidth: 2,
                }
            },
            responsive: false,
            tooltips: {
                enabled: false
            },
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        // drawOnChartArea: false,
                    },
                    ticks: {
                        callback: function(value, index, values) {
                            return '';
                        }
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        // drawOnChartArea: false,
                    },
                    // ticks: {
                    //     callback: function(value, index, values) {
                    //         return '';
                    //     }
                    // }
                }],
            }
        }
    });

    var ctz = document.getElementById("Chart03");
    window.myHorizontalBar = new Chart(ctz, {
        type: 'horizontalBar',
        data: horizontalBarChartData2,
        options: {
            elements: {
                rectangle: {
                    borderWidth: 2,
                }
            },
            responsive: false,
            tooltips: {
                enabled: false
            },
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        // drawOnChartArea: false,
                    },
                    ticks: {
                        callback: function(value, index, values) {
                            return '';
                        }
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        // drawOnChartArea: false,
                    },
                    ticks: {
                        callback: function(value, index, values) {
                            return '';
                        }
                    }
                }],
            }
        }
    });
};
