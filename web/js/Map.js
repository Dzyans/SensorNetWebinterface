/*
 * Made by: Thor Dahlstrøm, Patrick Kaalund
 * Created: 29.marts 2016
 */

function initMap() {
    var myLatlng = {lat: 55.7075059, lng: 12.5862603};
    var map = new google.maps.Map(document.getElementById("map"), {
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
    updatemap(map, myLatlng, marker);
   
}

function updatemap(map, myLatlng, marker){
        ref = new Firebase("https://sensornet-82ce8.firebaseio.com/Truck_Thorm_0/location/Current_location/");
        
        ref.limitToFirst(1).on("child_changed", function (dataSnapshot){
//            console.log(dataSnapshot.child("asString").key());
           
//            console.log(dataSnapshot.val());
           var asString = dataSnapshot.val();
            var latitute = asString.split(" ")[0];
           var longitude = asString.split(" ")[1];
//           console.log(latitute);
//           console.log(longitude);
           marker.setMap(null);
           myLatlng = {lat: parseFloat(latitute), lng: parseFloat(longitude)};

           marker.setPosition(myLatlng);

           map.setCenter(myLatlng);
           marker.setMap(map);
           
        });
    }