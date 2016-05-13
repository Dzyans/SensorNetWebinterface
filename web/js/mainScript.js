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

function depopulateTruckList(){
    var div = document.getElementById('sensorTable');
    var section = document.getElementById('section');
    section.innerHTML ="<table id='sensorTable'></table>";
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}

function populateSensorList(){
    var ref = new Firebase("https://sizzling-heat-4676.firebaseio.com");
    
    var tablearea = document.getElementById("sensorTable")
    var table = document.createElement('table');
    
    ref.once("value", function (dataSnapshot){
        console.log(dataSnapshot.val());
        dataSnapshot.forEach(function(childSnapshot){
            
            
            console.log(childSnapshot.key()); 
        });
    });
    var tablearea = document.getElementById("sensorTable")
    var table = document.createElement('table');
    for(var i= 1; i < 4; i++ ){
        console.log(i)
        var row = tablearea.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "dlksfj "+ i;
        cell2.innerHTML = "sdælkfjadslækfj " + i;
        
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