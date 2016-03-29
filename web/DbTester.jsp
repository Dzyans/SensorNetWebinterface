<%-- 
    Document   : DbTester
    Created on : 16-03-2016, 21:51:43
    Author     : thor
--%>
<%@page import="firebaseTest.FirebaseTest"%>
<%@page import="database.DAO.TestDAO"%>
<%@page import="database.dbConnector"%>
<%@page import="java.sql.Connection"%>
<%@page import="database.dbConnector.*"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        
        <%
            TestDAO td;
            Thread thread = new Thread();
        try{
            
            
            
            td = new TestDAO();
            long tid = System.currentTimeMillis();
            for(int i=0; i < 200; i++){
            td.sendTestSensorData(i);
            thread.sleep(10);
            }
            long dt = System.currentTimeMillis() - tid;
            System.out.println("det gik åbenbart godt, det tog: " + dt + " ms");
            td.closeCon();
        }catch(Exception e){
            e.printStackTrace();
        }
        //FirebaseTest ft = new FirebaseTest();
        //ft.testConnection();   
       
        

        %>
    </body>
</html>
