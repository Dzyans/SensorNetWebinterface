/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function populateTruckList(){
    var ref = new Firebase("https://sizzling-heat-4676.firebaseio.com/");
    depopulateTruckList();
    
    var tablearea = document.getElementById("sensorTable");
    
    ref.once("value", function (dataSnapshot){
        
        console.log(dataSnapshot.val());
        dataSnapshot.forEach(function(childSnapshot){
            
            var row = tablearea.insertRow(-1);
            var cell_truckUID = row.insertCell(0);
            var cell_truckStatus = row.insertCell(1);
            row.style.backgroundColor = "lightblue";
            cell_truckUID.innerHTML = childSnapshot.key();
            cell_truckUID.addEventListener('click',function (){
                console.log("clicked!!!!");
                window.location.assign('SensorView.jsp');
            });
            
            console.log(childSnapshot.key()); 
        });
    });
    
}
function clearFirebase(path){
    
    var ref = new Firebase("https://sizzling-heat-4676.firebaseio.com/"+ path);
    ref.remove(function(){
        console.log("data at " + path +"cleared");
    });
}
function depopulateTruckList(){
    var div = document.getElementById('sensorTable');
    var section = document.getElementById('section');
    section.innerHTML ="<table id='sensorTable'></table>";
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

// http://stackoverflow.com/questions/4744299/how-to-get-datetime-in-javascript-->
        function AddZero(num) {
            return (num >= 0 && num < 10) ? "0" + num : num + "";
        }
        
        function getDate(){
            var date =new Date();
            
            var strDate = [AddZero(date.getDate().toLocaleString()), AddZero(date.getMonth()+1), AddZero(date.getFullYear())].join("-");
            return strDate;
        }
        
        function getNodeSensors(truck_id){
            document.getElementById("Truck_id").innerHTML = truck_id;
            initMap();
            console.log(getDate() + "--------------------------------------------")
            var ref = new Firebase("https://sizzling-heat-4676.firebaseio.com/"+ truck_id +"/sensor/node_frontTruckSection/");
//            var ref = new Firebase("https://sizzling-heat-4676.firebaseio.com/Truck_Thorm_0/sensor/node_frontTruckSection/");
            console.log("firebase made");
            ref.once('value', function (snap){
                console.log("flflflflflflflflflflfl");
                var sensorTypeAmount = snap.numChildren(); 
                console.log(sensorTypeAmount);
                snap.forEach(function (snapChild){
                    console.log(snapChild.key().toString());
                    var sensorType = snapChild.key().toString();
                    switch(sensorType){
                        case 'temp':
                                console.log("setting up temperature table");
                                getSensordata('temp', truck_id);
                            break;
                        case 'light':
                            getSensordata('light', truck_id);
                            break;
                                
                        case 'pressure':
                            console.log("setting up pressure table");
                            getSensordata('pressure', truck_id);
                            break;
                    }
                        
                });
                    
            });
                
        }        
               
        function getSensordata(sensorType, truck_id){
            
                console.log("ligth found in switch");
            var ref = new Firebase("https://sizzling-heat-4676.firebaseio.com/"+ truck_id+"/sensor/node_frontTruckSection/"+sensorType);
            
            ref.once('value', function (lSnap){
               var lightSensorCount = lSnap.numChildren();
               console.log("number of " + sensorType + " sensors " + lightSensorCount);
               for(var i = 0; i < lightSensorCount; i++){
                   createSensorEntry(i, sensorType, truck_id);
               }
               
            });
            
        }
        
        function createSensorEntry(index, sensorType, truck_id){
            var curDate = getDate();
            console.log("creating "+ sensorType + " table " + index);
            var lightSensRef = new Firebase("https://sizzling-heat-4676.firebaseio.com/"+ truck_id+"/sensor/node_frontTruckSection/" + sensorType + "/"+ index +"/"+ curDate);
        
            var tablearea = document.getElementById(sensorType + "Table");
            var row = tablearea.insertRow(-1);
            var cell_truckUID = row.insertCell(0);
//            var cell_truckStatus = row.insertCell(1);
        
        
            lightSensRef.limitToLast(1).on('child_added', function(datasnapshot){
                
                var data = datasnapshot.val();
                console.log(datasnapshot.val() + " its out of the loop");
        
                row.style.backgroundColor = "lightblue";
                cell_truckUID.innerHTML = datasnapshot.val().toString();
        
            });
        }