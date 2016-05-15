<%-- 
    Document   : DbTester
    Created on : 16-03-2016, 21:51:43
    Author     : thor
--%>

<%--<%@page import="database.DAO.TestDAO"%>
<%@page import="database.dbConnector"%>
<%@page import="java.sql.Connection"%>
<%@page import="database.dbConnector.*"%>--%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="js/mainScript.js"></script>
        
    </head>
    <body>
        <div id="Login">
        <h1>SensorNet Login</h1>
        <form id="loginForm" name="login" >
            Username&nbsp;<input type="text" name="userid"/><br>
            Password&nbsp;&nbsp;<input type="password" name="pswrd"/>
            <br><input type="button" onclick="check(this.form)" value="Login"/>
            <input type="reset" value="Reset"/>
        </form>
        </div>
        <script language="javascript">
            
        </script>
    </body>
</html>
