<template>
    <div class="bar-chart-container">
        <canvas id="barChart"></canvas>
    </div>
</template>

<script>
import { Chart } from 'chart.js/auto';

export default {
    name: 'BarChart',
    data() {
        return {
            chart: null
        };
    },
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const ctx = document.getElementById('barChart').getContext('2d');
            this.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                    datasets: [
                        {
                            label: 'Annual Stats',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                            'rgb(249, 115, 22)',
                            'rgb(249, 115, 22)',
                            'rgb(249, 115, 22)',
                            'rgb(249, 115, 22)',
                            'rgb(249, 115, 22)',
                            'rgb(249, 115, 22)'
                            ],
                            borderColor: [
                            'rgb(194, 65, 12)',
                            'rgb(194, 65, 12)',
                            'rgb(194, 65, 12)',
                            'rgb(194, 65, 12)',
                            'rgb(194, 65, 12)',
                            'rgb(194, 65, 12)',
                            ],
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return tooltipItem.label + ': ' + tooltipItem.raw;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    },
    beforeUnmount() {
        if (this.chart) {
            this.chart.destroy();
        }
    }
};
</script>

<style scoped>
.bar-chart-container {
    max-width: 600px;
    margin: 0 auto;
}
</style>