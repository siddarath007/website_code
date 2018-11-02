$(function(){
	skillBubbleClick();
});

function skillBubbleClick(){
	$(".skill").on("click", function(){

		var $this = $(this),
				skillTop = $this.position().top,
				verMath = -1 * (skillTop - 230);
				skillLeft = $this.position().left,
				hrzntlMath = 0 - skillLeft

		if ($(window).width() > 640) {
			$this.parent().css('top', +verMath+ 'px')

			$(this).children("div").addClass("has-bubble-open")
				.parent().siblings().children("div").removeClass("has-bubble-open");
		} else {
			$this.parent().css('left', +hrzntlMath+ 'px');
		}
	});
};

$(window).scroll( paralaxScroll);

function paralaxScroll() {
	var wScroll = $(window).scrollTop();
	$('.video-strip').css('background-position', 'center -'+ wScroll +'px');
}


$(window).scroll( startSkill);

function startSkill() {
	var wScroll = $(window).scrollTop();

	if ($("section.skills-wrap").offset().top - 500 < wScroll && $(window).width() > 640) {
		$(".skills").addClass("launched");

		if (!$(".skill .bubble").hasClass("has-bubble-open")) {
			setTimeout(function(){
				$(".skill:nth-child(3) .bubble").addClass("has-bubble-open");
			},400);
		}
	}
}