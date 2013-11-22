'use strict';

var christmasApp = angular.module('christmasApp', ['audioPlayer']);

christmasApp.constant('playlist', [
    {
      'title': 'Carol of the Bells',
      'artist': 'The def star',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': 'files/carol-of-the-bells.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Christmas Special Pt. 1',
      'artist': 'Tea Time Poetry',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': 'files/christmas-special-1.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Commercial Break: Chief Running Buffalo Used Cars & Trees',
      'artist': 'Chief Running Buffalo',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': 'files/chief-running-buffalo-used-cars-trees.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Christmas Special Pt. 2',
      'artist': 'Tea Time Poetry',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': 'files/christmas-special-2.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Rudolf The Red Nose Raindeer',
      'artist': 'The def star',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': 'files/rudolf-the-red-nose-raindeer.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Christmas Greeting',
      'artist': 'All in One',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': 'files/christmas-greeting.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Baby Christmas Baby',
      'artist': 'All in One',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': 'files/baby-christmas-baby.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Black Friday',
      'artist': 'Turquoise Hippopotamus ... Giraffe!',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': 'files/black-friday.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Commercial Break: Crazy Ivanoff Vodka Milk Eggnog',
      'artist': 'Crazy Ivanoff',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': 'files/crazy-ivanoff-vodka-milk-eggnog.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'California Christmas',
      'artist': 'Helior Colorado',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': 'files/california-christmas.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Frosty The Snow Man (Drunk Mix)',
      'artist': 'The Guys',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': 'files/frosty-the-snowman.mp3',
      'type': 'audio/mpeg'
    },
]);

christmasApp.controller('christmasAudioController', function($scope,playlist) {
  $scope.playlist = playlist;
  $scope.audioPlaylist = playlist.map(function(song, index, array) {
      return {
          src: song.src,
          type: song.type,
          artist: "The Christmas Time Band",
          title: song.title
      };
  });
  $scope.isActive = function (value) {
    return $scope.audioPlayer.playing && $scope.audioPlayer.currentTrack-1 === value;
  }
});


$(function() {
	// Mobile navigation dropdown
	$('#navicon').click(function() {
		$('.mobilenav').slideToggle();
	});

  $('#nav').onePageNav({
    changeHash: false,
    scrollSpeed: 1500,
    scrollOffset: 30,
    easing: 'easeInOutExpo',
    begin: function() {
      $('.mobilenav').slideToggle();
    }
  });

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var minusscrollTop = ($(window).scrollTop() * -1);

    if ($(document).width() >= 500) {
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
