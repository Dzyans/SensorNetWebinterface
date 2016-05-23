<%-- 
    Document   : SensorView
    Created on : May 12, 2016, 10:15:11 PM
    Author     : thor
--%>

<%@page import="utils.LoginChecker"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
   <%
 Cookie[] cookies = request.getCookies();
             if(!LoginChecker.checkLoggedIn(cookies)){
            response.sendRedirect("login.jsp");
        }
%>

<html>
 
    <head>
        <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7Hmek5GDtLt4fYPGy4SmwjFlg2LWlZyU&callback=initMap">
        </script>
        
        <script type="text/javascript" src="js/mainScript.js"></script>
        <script type="text/javascript" src="js/Map.js" ></script> <!Script for map>
        <script type="text/javascript" src="js/libs/firebase/firebase.js" ></script> <!Script for firebase>
      <link rel="stylesheet" type="text/css" href="style.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <title>JSP Page</title>
</head>
<body onload="getNodeSensors()">
    <div id="header">
        <h1 id="Truck_id">Truck/sensorId</h1>
    </div>
    <div id="sensorViewMapPlace" style="width: 350px">   
        <div id="map">
        
        </div>
        <div id="controllerPlace">
            <form id="chauffeurMessages">
                Message one <br>
                <input type="button" value="send" onClick="sendMsg(1, this.form.frstMsg.value)">
                <input type="text" name="frstMsg">
                Message two <br>
                <input type="button" value="send" onClick="sendMsg(2, this.form.scndMsg.value)">
                <input type="text" name="scndMsg">               
            </form>
             
        </div>
        <button id="alarmButton" onclick="startStopAlarm()"> Start Alarm</button>
    </div>
    <div id="section">
         
    
    <div id="main">
        <table id="lightTable"></table>
        
        <br>
        <table id="pressureTable"></table>
        <br>
        
        <table id="tempTable"></table>
        
    </div>
    </div>
   
    
    
    <script >
//      
    </script>
    
    
</body>
</html>
