document.addEventListener('DOMContentLoaded', () => {

    const commonChartOptions = {
        chart: {
            foreColor: '#ffffff',
            toolbar: {
                show: false
            }
        },
        grid: {
            borderColor: '#444'
        },
        xaxis: {
            labels: {
                style: {
                    colors: '#ccc'
                }
            },
            axisBorder: {
                color: '#444'
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#ccc'
                }
            }
        },
        legend: {
            labels: {
                colors: '#ffffff'
            }
        },
        tooltip: {
            theme: 'dark'
        }
    };

    const radarChartOptions = {
        series: [{
            name: 'Nível de Competência',
            data: [80, 50, 30, 40, 100, 20],
        }],
        chart: {
            height: 350,
            type: 'radar',
            ...commonChartOptions.chart,
        },
        xaxis: {
            categories: ['Comunicação', 'Trabalho em Equipe', 'Liderança', 'Proatividade', 'Inovação', 'Gestão de Tempo'],
            ...commonChartOptions.xaxis,
        },
        yaxis: {
            ...commonChartOptions.yaxis,
        },
        fill: {
            opacity: 0.6,
            colors: ['#00aaff']
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['#00aaff'],
            dashArray: 0
        },
        markers: {
            colors: ['#00aaff'],
            size: 4,
            strokeColors: '#1e1e1e'
        },
        tooltip: {
            ...commonChartOptions.tooltip,
        }
    };

    const radarChart = new ApexCharts(document.querySelector("#radar-chart"), radarChartOptions);
    radarChart.render();

    const barChartOptions = {
        series: [{
            name: 'Comunicação',
            data: [44, 55, 57, 56, 61, 58]
        }, {
            name: 'Liderança',
            data: [76, 85, 101, 98, 87, 105]
        }, {
            name: 'Inovação',
            data: [35, 41, 36, 26, 45, 48]
        }],
        chart: {
            type: 'bar',
            height: 350,
            ...commonChartOptions.chart,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 5
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Equipe A', 'Equipe B', 'Equipe C', 'Equipe D', 'Equipe E', 'Equipe F'],
            ...commonChartOptions.xaxis,
        },
        fill: {
            opacity: 1,
            colors: ['#008ffb', '#00e396', '#feb019']
        },
        grid: {
            ...commonChartOptions.grid,
        },
        legend: {
            ...commonChartOptions.legend
        },
        tooltip: {
            ...commonChartOptions.tooltip,
        }
    };

    const barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
    barChart.render();

    const donutChartOptions = {
        series: [25, 45, 30],
        chart: {
            type: 'donut',
            height: 350,
            ...commonChartOptions.chart,
        },
        labels: ['Iniciante', 'Intermediário', 'Avançado'],
        colors: ['#ff4560', '#ffea00', '#00e676'],
        legend: {
            ...commonChartOptions.legend,
            position: 'bottom'
        },
        tooltip: {
            ...commonChartOptions.tooltip
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: '100%'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    const donutChart = new ApexCharts(document.querySelector("#donut-chart"), donutChartOptions);
    donutChart.render();
});