<%-- 
    Document   : SensorView
    Created on : May 12, 2016, 10:15:11 PM
    Author     : thor
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="js/libs/firebase/firebase.js" ></script> <!Script for firebase>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
</head>
<body onload="getNodeSensors('Truck_8')">
    <h1 id="Truck_id">Truck/sensorId</h1>
    <div id="main" style="text-align: center">
        <table id="lightTable"></table>
        
        <br>
        <table id="pressureTable"></table>
        <br>
        
        <table id="tempTable"></table>
        
    </div>
    
    
    <script >
//       <!--http://stackoverflow.com/questions/4744299/how-to-get-datetime-in-javascript-->
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
            
            console.log(getDate() + "--e---------------------------------------")
            var ref = new Firebase("https://sizzling-heat-4676.firebaseio.com/"+ truck_id +"/sensor/node_frontTruckSection/");
            ref.once('value', function (snap){
                var sensorTypeAmount = snap.numChildren(); 
                console.log(sensorTypeAmount);
                snap.forEach(function (snapChild){
                    console.log(snapChild.key());
                    var sensorType = snapChild.key();
                    switch(sensorType){
                        case 'temp':
                                console.log("setting up temperature table");
                                getSensordata('temp');
                            break;
                        case 'light':
                            getSensordata('light');
                            break;
                                
                        case 'pressure':
                            console.log("setting up pressure table");
                            getSensordata('pressure');
                            break;
                                
                                
                    }
                        
                });
                    
            });
                
        }        
               
        function getSensordata(sensorType){
            
                console.log("ligth found in switch");
            var ref = new Firebase("https://sizzling-heat-4676.firebaseio.com/Truck_8/sensor/node_frontTruckSection/"+sensorType);
            
            ref.once('value', function (lSnap){
               var lightSensorCount = lSnap.numChildren();
               console.log("number of " + sensorType + " sensors " + lightSensorCount);
               for(var i = 0; i < lightSensorCount; i++){
                   createSensorEntry(i, sensorType);
               }
               
            });
            
        }
        
        function createSensorEntry(index, sensorType){
            var curDate = getDate();
            console.log("creating "+ sensorType + " table " + index);
            var lightSensRef = new Firebase("https://sizzling-heat-4676.firebaseio.com/Truck_8/sensor/node_frontTruckSection/" + sensorType + "/"+ index +"/"+ curDate);
        
            var tablearea = document.getElementById(sensorType + "Table");
            var row = tablearea.insertRow(-1);
            var cell_truckUID = row.insertCell(0);
//            var cell_truckStatus = row.insertCell(1);
        
        
            lightSensRef.limitToLast(1).on('child_added', function(datasnapshot){
                
                var data = datasnapshot.val();
                console.log(datasnapshot.val() + " its out of the loop");
        
                row.style.backgroundColor = "lightblue";
                cell_truckUID.innerHTML = datasnapshot.val();
        
            });
        }
    </script>
    
    
</body>
</html>
