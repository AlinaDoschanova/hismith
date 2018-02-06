svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){

  // Включение слайдера
  $('#diagram-slider').owlCarousel({
    loop:false,
    nav:true,
    items:1,
  });

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

var horizontalBarChartData = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: '#ff0',
                // borderColor: window.chartColors.red,
                // borderWidth: 1,
                data: [
                    10,
                    -5,
                    2,
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
                mode: 'index',
                enabled: false
            },
            responsive: true,
            gridLines: {
                display: false,
                drawBorder: false
            },
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
    window.myHorizontalBar = new Chart(ctx, {
                    type: 'horizontalBar',
                    data: horizontalBarChartData,
                    options: {
                        // Elements options apply to all of the options unless overridden in a dataset
                        // In this case, we are setting the border of each horizontal bar to be 2px wide
                        elements: {
                            rectangle: {
                                borderWidth: 2,
                            }
                        },
                        responsive: true,
                        legend: {
                            display: false,
                        },
                        title: {
                            display: false,
                            text: 'Chart.js Horizontal Bar Chart'
                        }
                    }
                });

    // var myChart = new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255,99,132,1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero:true
    //                 }
    //             }]
    //         }
    //     }
    // });
};
