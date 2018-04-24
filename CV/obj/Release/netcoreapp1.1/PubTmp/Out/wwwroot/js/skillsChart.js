Highcharts.chart('technical-skills-container', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Technical Skills'
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
        name: 'Expertise',
        data: [
            ['.Net (C#, ASP.Net MVC, Web API)', 50.0],           
            ['JavaScript (Pure JavaScripts, jQuery, AngularJS 2.0)', 20],         
            ['SQL Server', 20]
        ]
    }]
});