const ctx = document.getElementById('myChart');

new Chart(ctx, {
type: 'polarArea',
data: {
  labels: ['Facebook', 'Youtube', 'Amazon'],
  datasets: [{
	label: 'Traffic Source',
	data: [1200, 1900, 300],
	backgroundColor: [
		'rgba(255, 99, 132, 1)',
		'rgba(54, 162, 235, 1)',
		'rgba(255, 206, 86, 1)'
	],
  }]
},
options: {
  responsive: true,
}
});