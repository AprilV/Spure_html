Morris.Donut({
	element: 'sneaker-count-chart',
	data: [
	{value: 6, label: 'Adidas'},
	{value: 3, label: 'Nike'},
	{value: 1, label: 'Jordan'},
	],
	labelColor: '#060',
	colors:[
	'#0BA462',
    '#39B580',
    '#67C690'
	],
	formatter: function (x) { return x + " sneakers"}
}).on('click', function(i, row){
  console.log(i, row);
});

Morris.Donut({
	element: 'market-value-chart',
	data: [
	{value: 600, label: 'Adidas'},
	{value: 300, label: 'Nike'},
	{value: 150, label: 'Jordan'},
	],
	labelColor: '#060',
	colors:[
	'#0BA462',
    '#39B580',
    '#67C690'
	],
	formatter: function (x) { return "$" + x + " USD"}
}).on('click', function(i, row){
  console.log(i, row);
});