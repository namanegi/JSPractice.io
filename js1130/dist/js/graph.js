$(function() {
    $(document).ready(function() {
        $.getJSON("dist/js/include.json", function(data) {
            var males = 0;
            var females = 0;
            var p1 = 0;
            var p2 = 0;
            var p3 = 0;
            var p4 = 0;
            var era20 = [0, 0, 0];
            var era30 = [0, 0, 0];
            var era40 = [0, 0, 0];
            var era50 = [0, 0, 0];
            var h1 = 0, h2 = 0, h3 = 0, h4 = 0, h5 = 0;

            for (var i in data) {
                if (data[i].gender == "男") {
                    males++
                } else {
                    females++
                };

                if (data[i].position == "課長") {
                    p1++
                } else if (data[i].position == "課長代理") {
                    p2++
                } else if (data[i].position == "主査") {
                    p3++
                } else {
                    p4++
                };
                var currentTime = new Date();
                var age = currentTime.getFullYear() - data[i].birthday.substring(0,4);
                switch (parseInt(age/10)) {
                    case 2:
                        if (data[i].division == "ITI") {
                            era20[0]++
                        } else if (data[i].division == "WEB") {
                            era20[1]++
                        } else {
                            era20[2]++
                        };
                        break;
                    case 3:
                        if (data[i].division == "ITI") {
                            era30[0]++
                        } else if (data[i].division == "WEB") {
                            era30[1]++
                        } else {
                            era30[2]++
                        };
                        break;
                    case 4:
                        if (data[i].division == "ITI") {
                            era40[0]++
                        } else if (data[i].division == "WEB") {
                            era40[1]++
                        } else {
                            era40[2]++
                        };
                        break;
                    default:
                        if (data[i].division == "ITI") {
                            era50[0]++
                        } else if (data[i].division == "WEB") {
                            era50[1]++
                        } else {
                            era50[2]++
                        };
                };
                switch (data[i].hireday) {
                    case "2011-04-01":
                        h1++;
                        break;
                    case "2012-04-01":
                        h2++;
                        break;
                    case "2015-04-01":
                        h3++;
                        break;
                    case "2016-04-01":
                        h4++;
                        break;
                    case "2018-04-01":
                        h5++;
                        break;
                };
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
                    '男性',
                    '女性'
                ]
            };
            
            var position_data = {
                datasets: [{
                    data: [p1, p2, p3, p4],
                    backgroundColor: [
                        'rgba(0, 0, 255, 1)',
                        'rgba(63, 63, 255, 1)',
                        'rgba(127, 127, 255, 1)',
                        'rgba(191, 191, 255, 1)'
                    ]
                }],
                labels: [
                    '課長',
                    '課長代理',
                    '主査',
                    'その他'
                ]
            };

            var age_data = {
                datasets: [{
                    label: '年代比',
                    data: [
                        era20[0]+era20[1]+era20[2],
                        era30[0]+era30[1]+era30[2],
                        era40[0]+era40[1]+era40[2],
                        era50[0]+era50[1]+era50[2]
                    ],
                    backgroundColor: [
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 63, 63, 1)',
                        'rgba(255, 127, 127, 1)',
                        'rgba(255, 191, 191, 1)'
                    ]
                }],
                labels: [
                    '20代',
                    '30代',
                    '40代',
                    '50代'
                ]
            };

            var age_data_2 = {
                datasets: [{
                    label: 'ITI',
                    data: [era20[0], era30[0], era40[0], era50[0]],
                    backgroundColor: [
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)'
                    ]
                }, {
                    label: 'WEB',
                    data: [era20[1], era30[1], era40[1], era50[1]],
                    backgroundColor: [
                        'rgba(0, 255, 0, 1)',
                        'rgba(0, 255, 0, 1)',
                        'rgba(0, 255, 0, 1)',
                        'rgba(0, 255, 0, 1)'
                    ]
                }, {
                    label: 'SMT',
                    data: [era20[2], era30[2], era40[2], era50[2]],
                    backgroundColor: [
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)'
                    ]
                }],
                labels: [
                    '20代',
                    '30代',
                    '40代',
                    '50代'
                ]
            };

            var hire_data = {
                datasets: [{
                    label: '入社数の推移',
                    data: [h1, h2, h3, h4, h5],
                    backgroundColor: [
                        'rgba(255, 0, 0, 0.4)'
                    ]
                }],
                labels: [
                    '2011-04-01',
                    '2012-04-01',
                    '2015-04-01',
                    '2016-04-01',
                    '2018-04-01'
                ]
            };
        
            var ctx1 = document.getElementById('stage');
            var ctx2 = document.getElementById('stage2');
            var ctx3 = document.getElementById('stage3');
            var ctx4 = document.getElementById('stage4');
            var ctx5 = document.getElementById('stage5');
        
            var myChart1 = new Chart(ctx1, {
                type: 'pie',
                data: gender_data,
                options: {
                    title: {
                        display: true,
                        text: '男女比'
                    }
                }
            });
            var myChart2 = new Chart(ctx2, {
                type: 'pie',
                data: position_data,
                options: {
                    title: {
                        display: true,
                        text: '役職者比'
                    }
                }
            });
            var myChart3 = new Chart(ctx3, {
                type: 'bar',
                data: age_data,
                options: {
                    title: {
                        display: true,
                        text: '年代比'
                    }
                }
            });
            var myChart4 = new Chart(ctx4, {
                type: 'bar',
                data: age_data_2,
                options: {
                    title: {
                        display: true,
                        text: '部署ごとの年代比'
                    }
                }
            });
            var myChart5 = new Chart(ctx5, {
                type: 'line',
                data: hire_data,
                options: {
                    scales: {
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            });
        });
    });
})
