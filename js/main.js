jQuery(window).bind("load", function() {
	'use strict';
jQuery(function($) {

	$('.menu-btn').click(function(){
		$(this).toggleClass('open');
		$('.menu').toggleClass('open');
	});

  });
});
