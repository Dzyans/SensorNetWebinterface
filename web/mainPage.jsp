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
        
        <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7Hmek5GDtLt4fYPGy4SmwjFlg2LWlZyU&callback=initMap">
        </script>
        <script type="text/javascript" src="Map.js" ></script> <!Script for map>
        
        
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="js/libs/firebase/firebase.js" ></script> <!Script for firebase>
        <script type="text/javascript" src="js/mainScript.js"></script>
    </head>
    
    <body>
        <% 
             Cookie[] cookies = request.getCookies();
             if(!LoginChecker.checkLoggedIn(cookies)){
            response.sendRedirect("login.jsp");
        }
//             boolean loggedInCookieFound = false;
//             boolean loggedIn = false;
//             for(int i = 0; i < cookies.length; i++){
//                 System.out.print(cookies[i].getName());
//                 if(cookies[i].getName().equals("login")){
//                     loggedInCookieFound = true;
//                     Cookie c = cookies[i];
//                     System.out.println(c.getValue());
//                     if(!c.getValue().equals("valid")){
//                         System.out.println("found cookie, but not valid");
//                     response.sendRedirect("login.jsp");
//                 } else loggedIn = true;
//                 }                
//             }
//              if(!loggedInCookieFound && !loggedIn){
//                     response.sendRedirect("login.jsp");
//                 }

        
        %>
        
        <div id="header">
            <h1> SensorNet </h1>
        </div>
        <div id="nav">
            <p onclick="populateTruckList()"> Trucks<br>
            chaufører<br>
            <!--<p onclick="clearFirebase('')"> clear firebase<br>-->
        </div>
        <div id="section">
            
            <table id="sensorTable">
                
            </table>
        </div>
        <div id="footer">
            bye bye
        </div>
    </body>
</html>