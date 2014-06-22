$(function(){

handler = Gmaps.build('Google');
handler.buildMap({ provider: {}, 
  internal: {id: 'map'}},
  // other google map API options
  

  function(){
    markers = handler.addMarkers([
      {
        "lat": 51.506178, 
        "lng": -0.088369,
        "picture": {
          "url": "https://addons.cdn.mozilla.net/img/uploads/addon_icons/13/13028-64.png",
          "width":  36,
          "height": 36
        },
        "infowindow": "hello!"
      }
    ]);
    handler.bounds.extendWith(markers);
    handler.fitMapToBounds();
    });
  
    
})



 
