// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
$(function(){
    function initialize(){
      var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(51.506178, -0.088369),
      }
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    }

    initialize()

  })



