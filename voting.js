let voteCounts = {
    kohli: 0,
    faf: 0,
    maxwell: 0
};

const ctx = document.getElementById('mvpChart').getContext('2d');
const mvpChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Virat Kohli', 'Faf du Plessis', 'Glenn Maxwell'],
        datasets: [{
            label: 'Votes',
            data: [0, 0, 0],
            backgroundColor: ['red', 'gold', 'black']
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 1000
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function vote(player) {
    voteCounts[player]++;
    updateChart();
}

function updateChart() {
    mvpChart.data.datasets[0].data = [
        voteCounts.kohli,
        voteCounts.faf,
        voteCounts.maxwell
    ];
    mvpChart.update();
}
