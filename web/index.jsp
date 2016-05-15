<%-- 
    Document   : index
    Created on : May 15, 2016, 6:11:32 PM
    Author     : thor
--%>

<%@page import="utils.LoginChecker"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    
    <% 
             Cookie[] cookies = request.getCookies();
             if(!LoginChecker.checkLoggedIn(cookies)){
                 System.out.print("login not good");
            response.sendRedirect("login.jsp");
        } else response.sendRedirect("mainPage.jsp");
        
        %>
    <body>
        <h1>Welcome to sensorNets</h1>
    </body>
</html>
