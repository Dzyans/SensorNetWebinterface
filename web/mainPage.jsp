<%-- 
    Document   : mainPage
    Created on : May 14, 2016, 6:56:00 PM
    Author     : thor
--%>

<%@page import="utils.LoginChecker"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>MainPage</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">        
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="js/libs/firebase/firebase.js" ></script> <!Script for firebase>
        <script type="text/javascript" src="js/mainScript.js"></script>
    </head>
    
    <body>
        <% 
             Cookie[] cookies = request.getCookies();
             if(!LoginChecker.checkLoggedIn(cookies)){
                 System.out.print("login good not");
            response.sendRedirect("login.jsp");
        }
        
        %>
        
        <div id="header">
            <h1> SensorNet </h1>
        </div>
        <div id="nav">
            <p id="truckText" onclick="populateTruckList()"> Trucks<br>
            <!--<p onclick="clearFirebase('')"> clear firebase<br>-->
        </div>
        <div id="section">
            <<-tryk på trucks for at få liste over active trucks
            <table id="sensorTable">
                
            </table>
        </div>
        <div id="footer">
            The edge
        </div>
    </body>
</html>