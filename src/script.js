// put all your JS in here
$(document).ready(function(){
	$('.mobile_nav').click(function(){
		$(this).toggleClass('open', 500);
	});

	function checkOffset() {
			if($('.services_main_button').offset().top
					>= $('.footer').offset().top)
					$('.services_main_button').css({'position': 'absolute', 'bottom': '-80px'});
			if($(document).scrollTop() + window.innerHeight < $('.footer').offset().top)
					$('.services_main_button').css({'position': 'fixed', 'bottom': '5%'});
					// restore when you scroll up
			$('.services_main_button').scrollTop() + window.innerHeight;
	}

		$(document).scroll(function() {
				checkOffset();
		});
});
