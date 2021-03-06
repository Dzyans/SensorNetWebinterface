/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//const SOME_VALUE = "Your string";
function populateTruckList(){
    //    var ref = new Firebase("https://sizzling-heat-4676.firebaseio.com/ActiveTrucks/");
    var ref = new Firebase("https://sensornet-82ce8.firebaseio.com/ActiveTrucks");
    depopulateTruckList();
    
    var tablearea = document.getElementById("sensorTable");
    
    ref.once("value", function (dataSnapshot){
        
        console.log(dataSnapshot.key());
        dataSnapshot.forEach(function(childSnapshot){
            
            var row = tablearea.insertRow(-1);
            var cell_truckUID = row.insertCell(0);
            row.style.backgroundColor = "lightblue";
            cell_truckUID.innerHTML = childSnapshot.key();
            cell_truckUID.id = "truckText";
            cell_truckUID.addEventListener('click',function (){
                console.log("clicked!!!!");
                setTruckInfoCookie(cell_truckUID.innerHTML);
                console.log(getTruckCookie());
                window.open('SensorView.jsp');
                //                window.location.assign('SensorView.jsp');
            });
            
            console.log(childSnapshot.key()); 
        });
    });
    
}
//developer function
function clearFirebase(path){
    
    var path = "https://sizzling-heat-4676.firebaseio.com/Truck_Thorm_0/sensor/node_frontTruckSection"
    var ref = new Firebase("https://sizzling-heat-4676.firebaseio.com/Truck_Thorm_0/sensor/node_frontTruckSection/");
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
// Fra www3 schools start
function setTruckInfoCookie(truckId) {
    
    document.cookie = "TruckCookie" + "=" + truckId + "; ";
}

function setCookie(cname, cvalue) {
    //    var d = new Date();
    //    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //    var expires = "expires="+d.toUTCString();
    //    document.cookie = cname + "=" + cvalue + "; " + expires;
    document.cookie = cname + "=" + cvalue + ";";
}

function getTruckCookie() {
    var name = "TruckCookie";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            //              return c.toString();
            return c.substring(name.length+1, c.length);
        }
    }
    return "";
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
// fra www3 schools slut
// 
// Function AddZero fra http://stackoverflow.com/questions/4744299/how-to-get-datetime-in-javascript-->
function AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}

function getDate(){
    var date =new Date();
    
    var strDate = [AddZero(date.getDate().toLocaleString()), AddZero(date.getMonth()+1), AddZero(date.getFullYear())].join("-");
    return strDate;
}

function getNodeSensors(){
    var truck_id = getTruckCookie();
    document.getElementById("Truck_id").innerHTML = truck_id;
    initMap();
    console.log(getDate() + "--------------------------------------------")
    //this is a very ineffective way of accessing the database, which is why the webpage loads the sensordata extremely slow
    //    var ref = new Firebase("https://sizzling-heat-4676.firebaseio.com/"+ truck_id +"/sensor/node_frontTruckSection/");
    var ref = new Firebase("https://sensornet-82ce8.firebaseio.com/ActiveTrucks/"+ truck_id + "/Sensors" );
    ref.once('value', function (snap){
        
        //        var sensorTypeAmount = snap.numChildren(); 
        var sensorTypeAmount = snap.val(); 
        console.log(sensorTypeAmount + " sensor types");
        snap.forEach(function (snapChild){
            console.log(snapChild.key().toString());
            var sensorType = snapChild.key().toString();
            switch(sensorType){
                case 'temp':
                    console.log("setting up temperature table");
                    getSensordata('temp', truck_id, snapChild);
                    break;
                case 'light':
                    console.log("setting up light table");
                    getSensordata('light', truck_id, snapChild);
                    break;                
                case 'pressure':
                    console.log("setting up pressure table");
                    getSensordata('pressure', truck_id, snapChild);
                    break;
            }
            
        });
        
    });
    
}        

function getSensordata(sensorType, truck_id, dataSnapshot){
    
    console.log(sensorType + " found in switch");
    //    var ref = new Firebase("https://sizzling-heat-4676.firebaseio.com/"+ truck_id+"/sensor/node_frontTruckSection/"+sensorType);
    
    var data = dataSnapshot;
    
    //    ref.once('value', function (lSnap){
    //        var lightSensorCount = lSnap.numChildren();
    //        console.log("number of " + sensorType + " sensors " + lightSensorCount);
    //        for(var i = 0; i < lightSensorCount; i++){
    //            createSensorEntry(i, sensorType, truck_id);
    //        }
    //        
    //    });
    console.log(data.key() + " ++++++++ " + data.val())
    var lightSensorCount = data.val();
    console.log("number of " + sensorType + " sensors " + lightSensorCount);
    for(var i = 0; i < lightSensorCount; i++){
        createSensorEntry(i, sensorType, truck_id);
    }   
}

function createSensorEntry(index, sensorType, truck_id){
    var curDate = getDate();
    console.log("creating "+ sensorType + " table " + index);
    //    var SensorRef = new Firebase("https://sizzling-heat-4676.firebaseio.com/"+ truck_id+"/sensor/node_frontTruckSection/" + sensorType + "/"+ index +"/"+ curDate);
    
    var tablearea = document.getElementById(sensorType + "Table");
    var row = tablearea.insertRow(-1);
    var cell_truckUID = row.insertCell(0);
    //          var cell_truckStatus = row.insertCell(1);
    
    var SensorRef = new Firebase("https://sensornet-82ce8.firebaseio.com/"+ truck_id
            + "/sensor/node_frontTruckSection/" + sensorType + "/"+ index +"/"+ curDate);
    SensorRef.limitToLast(1).on('child_added', function(datasnapshot){                  
        var data = datasnapshot.val();        
        row.style.backgroundColor = "lightblue";       
        cell_truckUID.innerHTML = datasnapshot.val().toString();        
    });
}

function sendMsg(msgLnNr, msg){    
    var truck_id = getTruckCookie();
    if(msg !== null){
        //        var msg = form.frstMsg.value;
        console.log(msg);
        if(msg.toString.length <= 16){
            
            if(truck_id !== null){
                
                var TruckMsgRef = new Firebase("https://sensornet-82ce8.firebaseio.com/"+ truck_id + "/controller/node_frontTruckSection/lcdController_messeges/");
                //                var TruckMsgRef = new Firebase("https://sizzling-heat-4676.firebaseio.com/"+ truck_id + "/controller/node_frontTruckSection/lcdController_messeges/");
                TruckMsgRef.child('messageLine_' + msgLnNr).set(msg, function(){
                    console.log("done on " + truck_id + " msgLn " + msgLnNr);
                });
            }
        }
    }
    
}

function startStopAlarm(){
    var truck_id = getTruckCookie();
    
    var TruckAlarmMsgRef = new Firebase("https://sensornet-82ce8.firebaseio.com/"+ truck_id + "/controller/node_frontTruckSection/ledControllerRealTest/ledRed_0");
    TruckAlarmMsgRef.once("value", function (data){
        if(data.val() === 'true'){
        console.log("stopping alarm")
        TruckAlarmMsgRef.set('false', function(){
            document.getElementById('alarmButton').innerHTML = "Start alarm";
        });
    }else {
        console.log("starting alarm")
        TruckAlarmMsgRef.set('true', function(){
            document.getElementById('alarmButton').innerHTML = "Stop alarm";
        });
    }
    });
    
    
    
}

function check(form) {            
    console.log("doing stuff");
    var xhr = new XMLHttpRequest();
    //                xhr.open("GET", "http://localhost:8080/SNRESTUsrAuth/Login/user/login/"+ form.userid.value + "/"+ form.pswrd.value, true);
    xhr.open("GET", "http://54.229.188.28:8080/SNRESTUsrAuth/Login/user/login/" + form.userid.value+ "/" + form.pswrd.value, true);
    xhr.onload = function () {
        
        console.log(xhr.responseText);
        console.log(xhr.status)
        
        if(xhr.status === 200) {
            setCookie('login', 'valid');
            window.location.replace('mainPage.jsp');
            //                    setCookie(form.suderid.value, true);  
        }
        else {
            setCookie('login', 'invalid');
            if(xhr.status === 400){
                alert("Error Password or Username")/*displays error message*/
            }else alert("Connection error, please contact serviceprovider")
            
            
        }
    };
    xhr.send();
}