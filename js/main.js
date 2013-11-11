$(function() {
	// Mobile navigation dropdown
	$('#navicon').click(function() {
		$('.mobilenav').slideToggle();
	});

    $('#nav').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 1000,
        scrollOffset: 0,
        easing: 'easeInOutExpo'

    });

    $('#nav2').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 1500,
        scrollOffset: 30,
        easing: 'easeInOutExpo'

    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var minusscrollTop = ($(window).scrollTop() * -1);

        if ($(document).width() >= 1100) {
            $('#video_background').css('transform', 'translate(0px,' + (minusscrollTop) * 0.3 + 'px)');
            $('#video_background').css('-ms-transform', 'translate(0px,' + (minusscrollTop) * 0.3 + 'px)');
            $('#video_background').css('-webkit-transform', 'translate(0px,' + (minusscrollTop) * 0.3 + 'px)');
            $('#video_background .row .slogan').css('transform', 'translate(0px,' + (minusscrollTop) * 0.35 + 'px)');
            $('#video_background .row .slogan').css('-ms-transform', 'translate(0px,' + (minusscrollTop) * 0.35 + 'px)');
            $('#video_background .row .slogan').css('-webkit-transform', 'translate(0px,' + (minusscrollTop) * 0.35 + 'px)');

            $(".parallax").each(function (index, element) {
                var offset = $(this).offset().top;
                $(this).css("background-position", "50% " + (scrollTop - offset) / 2 + "px");
            });
        }
    });
});
