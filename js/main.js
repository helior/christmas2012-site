'use strict';

var christmasApp = angular.module('christmasApp', ['audioPlayer']);

christmasApp.playlist = [
    {
      'title': 'Carol of the Bells',
      'image': 'path/to/file.jpg',
      'parallax' => true,
      'src': 'files/carol-of-the-bells.mpg',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Tea Time Poetry — Christmas Special Pt. 1',
      'image': 'path/to/file.jpg',
      'parallax' => true,
      'src': 'files/christmas-special-1.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Commercial Break: Chief Running Buffalo Used Cars & Trees',
      'image': 'path/to/file.jpg',
      'parallax' => true,
      'src': 'files/chief-running-buffalo-used-cars-trees.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Tea Time Poetry — Christmas Special Pt. 2',
      'image': 'path/to/file.jpg',
      'parallax' => true,
      'src': 'files/christmas-special-2.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Rudolf The Red Nose Raindeer',
      'image': 'path/to/file.jpg',
      'parallax' => true,
      'src': 'files/rudolf-the-red-nose-raindeer.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'All in One - Christmas Greeting',
      'image': 'path/to/file.jpg',
      'parallax' => true,
      'src': 'files/christmas-greeting.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'All in One - Baby Christmas Baby',
      'image': 'path/to/file.jpg',
      'parallax' => true,
      'src': 'files/baby-christmas-baby.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'TH...G - Black Friday',
      'image': 'path/to/file.jpg',
      'parallax' => true,
      'src': 'files/black-friday.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Commercial Break: Crazy Ivanoff Vodka Milk Eggnog',
      'image': 'path/to/file.jpg',
      'parallax' => true,
      'src': 'files/crazy-ivanoff-vodka-milk-eggnog.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Helior Colorado - California Christmas',
      'image': 'path/to/file.jpg',
      'parallax' => true,
      'src': 'files/california-christmas.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'The Guys - Frosty The Snow Man (Drunk Mix)',
      'image': 'path/to/file.jpg',
      'parallax' => true,
      'src': 'files/frosty-the-snowman.mp3',
      'type': 'audio/mpeg'
    },
];

christmasApp.controller('christmasAudioController', function($scope,playlist) {
    // $scope.audioPlaylist = playlist.map(function(song, index, array) {
    //     return {
    //         src: song.src,
    //         type: song.type,
    //         artist: song.artist,
    //         title: song.title
    //     };
    // });
});


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
        $(this).css("background-position", "50% " + (scrollTop - offset) / 8 + "px");
      });
    }
  });
});
