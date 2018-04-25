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
            ['Problem solving', 20],
            ['Ability to explain my own ideas', 20],         
            ['Listen carefully to others', 20],          
            ['Teamwork', 20]    
        ]
    }]
});