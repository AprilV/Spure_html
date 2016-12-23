$(document).ready(function(){

	$("#pop-intro").popover({
		html: true,
		trigger: 'hover',
		content: '<img src="https://stockx.imgix.net/Adidas-Yeezy-Boost-350-Low-Pirate-Black-2016.jpg?fit=fillmax&bg=FFFFFF&w=300&h=214&auto=compress" style="height: 150px;">'
		+ '<div class="pop-title">Adidas Yeezy Boost 350<br>Pirate Black (2016)</div>'
		+ '<div class="current-price">'
			+ '<div class="pop-price-label">Current Price</div>'
			+ '<div class="pop-price">$1,490</div>'
		+ '</div>'
		// + '<div class="pop-price-history">'
		// 	+'<span class="pop-price">'
		// 		+ '<div class="pop-price-label">Highest</div>'
		// 		+ '<div class="pop-price-value">$1,400</div>'
		// 	+ '</span>'
		// 	+ '<span class="pop-price">'
		// 		+ '<div class="pop-price-label">Lowest</div>'
		// 		+ '<div class="pop-price-value">$900</div>'
		// 	+ '</span>'
		// + '</div>'
		// content: function(){
		// 	return '<img src="'+$(this).data('img') + '" />';
		// }
	});

});
