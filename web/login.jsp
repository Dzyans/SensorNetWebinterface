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
    </head>
    <body>
        <h1>SensorNet Login</h1>
        <form name="login" action="mainpage2.html">
            Username<input type="text" name="userid"/>
            Password<input type="password" name="pswrd"/>
            <br><input type="button" onclick="check(this.form)" value="Login"/>
            <input type="reset" value="Reset"/>
        </form>
        <script language="javascript">
            function check(form) {            
                console.log("doing stuff");
                var xhr = new XMLHttpRequest();
//                xhr.open("GET", "http://localhost:8080/SNRESTUsrAuth/Login/user/login/"+ form.userid.value + "/"+ form.pswrd.value, true);
                xhr.open("GET", "http://54.229.188.28:8080/SNRESTUsrAuth/Login/user/login/" + form.userid.value+ "/" + form.pswrd.value, true);
                xhr.onload = function () {
                    
                    console.log(xhr.responseText);
                    console.log(xhr.status)
                    
                     if(xhr.status === 200) {
                    window.location.replace('mainpage2.html');
//                    setCookie(form.suderid.value, true);  
                     }
                else {
                    if(xhr.status === 400){
                        alert("Error Password or Username")/*displays error message*/
                    }else alert("Connection error, please contact serviceprovider")
                                   
                        
                }
                };
                xhr.send();   
                                                          <%--<c:if test="${status>0}">--%>
                                                             <%--<c:redirect url="/mainpage2.html"/>--%>
                                                               <%--</c:if>--%>
            }
        </script>
    </body>
</html>
