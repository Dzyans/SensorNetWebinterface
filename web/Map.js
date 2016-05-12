/*
 * Made by: Patrick Kaalund
 * Created: 29.marts 2016
 */

function initMap() {
    var myLatlng = {lat: 55.7075059, lng: 12.5862603};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatlng
    });
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Click to zoom'
    });
    map.addListener('center_changed', function () {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function () {
            map.panTo(marker.getPosition());
        }, 3000);
    });
    marker.addListener('click', function () {
        //map.setZoom(15);
        
        map.setCenter(marker.getPosition());
        //infowindow.open(marker.get('map'), marker);
    });
    updatemap(map);
   
}
 function updatemap(map){
        ref = new Firebase("https://sizzling-heat-4676.firebaseio.com/Truck_Thorm_0/location/");
        
        ref.limitToLast(1).on("value", function (dataSnapshot, adsf){
            console.log(dataSnapshot.key());
            console.log(dataSnapshot.numChildren());
            console.log(dataSnapshot.val().key());
           var latitute = dataSnapshot.child("latitute").val();
           var longitude = dataSnapshot.child("longitude").val();
           console.log(latitute);
           console.log(longitude);
           
           var LatLng = {lat: latitute, lng: longitude};
           map.setCenter(LatLng);
        });
    }