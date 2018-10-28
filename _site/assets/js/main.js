$(window).scroll( paralaxScroll);

function paralaxScroll() {
	var wScroll = $(window).scrollTop();
	$('.video-strip').css('background-position', 'center -'+ wScroll +'px');
}