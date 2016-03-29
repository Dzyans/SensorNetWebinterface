<%-- 
    Document   : LoginFront
    Created on : 04-03-2016, 21:42:53
    Author     : thor
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
    
<html>
    
    <head>
       
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
         <link type="text/css" rel="stylesheet" href="<c:url value="/maincss.css" />" />
                <link type="text/css" rel="stylesheet" href="<c:url value="/css/main.css" />" />
    </head>
    <body>
        <h1>Login!</h1>
        <nav>
            <form action="LoginJsp.jsp" method="post">
                <input type="text" name="UserName" value="Bruger Navn" >
        <input type="text" name="pw" value="Kodeord"></br>
        <input type="submit" value="Log ind">
            </form>
        </nav>
    </body>
</html>
