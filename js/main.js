$(document).ready( function{
	$('a[href="#web"]').click( function() {
		$('main').fadeOut();
		$('#web').fadeIn();
	})
	$('a[href="#web"]').click( function() {
		$('main').fadeOut();
		$('#web').fadeIn();
	})

	function footerFade() {
		if ($(window).scrollTop() > $('h2.musings').scrollTop()) {
			$('footer').fadeIn();
		}
		else {
			$('footer').fadeOut();	
		}
		setTimeout (footerFade(), 400);
	}

	footerFade();
})