'use strict';

var christmasApp = angular.module('christmasApp', ['audioPlayer']);

christmasApp.constant('playlist', [
    {
      'title': 'Carol of the Bells',
      'artist': 'The def star',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': '/music/01 The def star Presents - Carol of the Bells.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Christmas Special Pt. 1',
      'artist': 'Tea Time Poetry',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': '/music/02 Tea Time Poetry - Christmas Special Pt. 1.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Commercial Break: Chief Running Buffalo Used Cars & Trees',
      'artist': 'Chief Running Buffalo',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': '/music/03 Commercial - Chief Running Buffalo Used Cars & Trees.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Christmas Special Pt. 2',
      'artist': 'Tea Time Poetry',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': '/music/04 Tea Time Poetry - Christmas Special Pt. 2.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Rudolf The Red Nose Raindeer',
      'artist': 'The def star',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': '/music/05 Rudolf The Red Nose Raindeer.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Christmas Greeting',
      'artist': 'All in One',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': '/music/06 All in One - Christmas Greeting.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Baby Christmas Baby',
      'artist': 'All in One',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': '/music/07 All in One - Baby Christmas Baby.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Black Friday',
      'artist': 'Turquoise Hippopotamus ... Giraffe!',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': '/music/08 TH...G - Black Friday.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Commercial Break: Crazy Ivanoff Vodka Milk Eggnog',
      'artist': 'Crazy Ivanoff',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': '/music/09 Commercial - Crazy Ivanoff Vodka Milk Eggnog.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'California Christmas',
      'artist': 'Helior Colorado',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': '/music/10 Helior Colorado - California Christmas.mp3',
      'type': 'audio/mpeg'
    },
    {
      'title': 'Frosty The Snow Man (Drunk Mix)',
      'artist': 'The Guys',
      'image': 'path/to/file.jpg',
      'parallax': true,
      'src': '/music/11 The Guys - Frosty The Snow Man (Drunk Mix).mp3',
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

  $scope.currentTrackTitle = function () {
    if (typeof $scope.audioPlayer != "undefined" && $scope.audioPlayer.playing) {
      return $scope.playlist[$scope.audioPlayer.currentTrack-1].title;
    }
    else {
      return "White Christmas For All The Good Girls"
    }
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

    if ($(document).width() >= 768) {
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
