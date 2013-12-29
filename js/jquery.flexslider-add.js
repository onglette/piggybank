$(document).ready(function(){
	$('.gallery-area').flexslider({
		animation: "slide",
		slideshow: true,
		directionNav: true,
		slideshowSpeed: 5000
	});
	
	
	var t_ = $('.flex-control-nav, .flex-direction-nav').clone(true);
	$('.flex-control-nav, .flex-direction-nav').wrapAll('<div class="pagination-area"></div>');
	var prev_ = $('.flex-direction-nav .flex-prev').clone(true);
	var next_ = $('.flex-direction-nav .flex-next').clone(true);
	$('.pagination-area').prepend(prev_);
	$('.pagination-area').append(next_);
});