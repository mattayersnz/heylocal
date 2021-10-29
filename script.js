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
  const initialMarkers = [
    [
      "Pine Tree!", -36.595541, 174.695866, "./markers/tree.svg", 42, 42
    ],
    [ "Peach Tree!", -36.5812913, 174.6892932, "./markers/tree.svg", 42, 42
    ]
  ]

  for(let i=0; i<initialMarkers.length; i++){
    const currentMarker = initialMarkers[i];

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
  }
}
