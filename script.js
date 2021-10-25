function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -36.594767, lng: 174.695967},
    zoom: 18,
    mapId: '1a0581c7287d35ef',
    mapTypeId: 'satellite',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  });

  // marker: [name, lat, long, img url, scaledSize width, scaledSize height]
  const markers = [
    [
      "Pine Tree!", -36.595541, 174.695866, "./markers/tree.svg", 42, 42
    ],
    [
      "Pine Tree!", -36.595472, 174.695966, "./markers/tree.svg", 42, 42
    ]
  ]

  for(let i=0; i<markers.length; i++){
    const currentMarker = markers[i];

    const marker = new google.maps.Marker({
      position: {lat: currentMarker[1], lng: currentMarker[2]},
      map,
      title: currentMarker[0],
      icon: {
        url: currentMarker[3],
        scaledSize: new google.maps.Size(currentMarker[4], currentMarker[5])
      },
      animation: google.maps.Animation.DROP
    });
    const infowindow = new google.maps.InfoWindow({
      content: currentMarker[0],
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });

    google.maps.event.addListener(map, 'click', function(event) {
      placeMarker(event.latLng);
    });
  }
}

function placeMarker(location) {
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });
}
