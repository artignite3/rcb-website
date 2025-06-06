const voteCounts = {
  mvp: { kohli: 0, pandya: 0, hazelwood: 0 },
  batter: { kohli: 0, patidar: 0, salt: 0 },
  bowler: { hazelwood: 0, bhuvi: 0, pandya: 0 },
  fielder: { salt: 0, david: 0, sheriff: 0 },
};

const charts = {
  mvp: setupChart("mvpChart", ["Kohli", "Pandya", "Hazelwood"], ["red", "gold", "black"]),
  batter: setupChart("batterChart", ["Kohli", "Patidar", "Salt"], ["red", "gold", "black"]),
  bowler: setupChart("bowlerChart", ["Hazelwood", "Bhuvi", "Pandya"], ["red", "gold", "black"]),
  fielder: setupChart("fielderChart", ["Salt", "David", "Shephard"], ["red", "gold", "black"]),
};

function setupChart(id, labels, colors) {
  const ctx = document.getElementById(id).getContext("2d");
  return new Chart(ctx, {
    type: "bar",
    data: { labels, datasets: [{ data: [0,0,0], backgroundColor: colors }] },
    options: { responsive: true, scales: { y: { beginAtZero: true } } },
  });
}

function vote(category, player) {
  voteCounts[category][player]++;
  charts[category].data.datasets[0].data = Object.values(voteCounts[category]);
  charts[category].update();
}
