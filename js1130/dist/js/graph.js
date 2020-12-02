$(document).ready(function() {
    $db = null;
    $.getJSON("dist/js/include.json", function(data) {
        $db = data;
    });
    var males = 0;
    var females = 0;
    for (var i in $db) {
        if ($db[i].gender == "男") {
            males++
        } else {
            females++
        }
    };

    var gender_data = {
        datasets: [{
            data: [males, females],
            backgroundColor: [
                'rgba(0, 0, 255, 1)',
                'rgba(255, 0, 0, 1)'
            ]
        }],
        labels: [
            'males',
            'females'
        ]
    };

    var ctx1 = document.getElementById('stage');
    var ctx2 = document.getElementById('stage2');
    var ctx3 = document.getElementById('stage3');
    var ctx4 = document.getElementById('stage4');
    var ctx5 = document.getElementById('stage5');

    var myChart1 = new Chart(ctx1, {
        type: 'pie',
        data: gender_data
    });
    var myChart5 = new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
