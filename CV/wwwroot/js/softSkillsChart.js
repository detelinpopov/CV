Highcharts.chart('soft-skills-container', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Soft Skills'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Level',
        data: [
            ['Teamwork', 20],           
            ['Ability to explain my own ideaS', 20],         
            ['Listen carefully to others', 20],
            ['Can sense how others feel based on their nonverbal communication', 20]
        ]
    }]
});