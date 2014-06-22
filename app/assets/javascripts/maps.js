// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
$(function(){
    function initialize(){
      //for markers we need to define latling
      // make a new object of it first!
      var myLatlng = new google.maps.LatLng(51.506178, -0.088369);
      var mapOptions = {
        zoom: 12,
        center: myLatlng
      }
      // we need to to put hte alting in a later postion so we can call it later 
      // to add markers
    //var image = 'doge.png' => doesn't work
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var contentString = '<div>' + '<p>' +  'this is my content string!' + '</p>' + '</div>'
    
    var marker = new google.maps.Marker({
      map:map,
        // call the marker here
      position: myLatlng,
      // add some animation
      animation: google.maps.Animation.DROP,
      //icon:image,
      title:"Hello World!" ,
      }); 
    // create our info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString
      // we can specofy the content of this with say an ajax request from travel advisor!!!!
    });
      google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map,marker);
        toggleBounce
      });
      
      function toggleBounce() {
          if (marker.getAnimation() != null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }  
      
    }

    initialize()

    

  })

// multiple makrer drop 
// function drop() {
//   for (var i =0; i < markerArray.length; i++) {
//     setTimeout(function() {
//       addMarkerMethod();
//     }, i * 200);
//   }
// }



