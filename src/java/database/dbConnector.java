/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database;

import com.mysql.jdbc.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author thor
 */
public class dbConnector {
    
    public static java.sql.Connection getDbConnection() throws Exception{
        
            Class.forName("com.mysql.jdbc.Driver");
           java.sql.Connection con = DriverManager.getConnection("jdbc:mysql://ubuntu4.javabog.dk:3306/SensorData", "sensor", "net");
          //  Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/LocalSensor", "root", "Roar");
            return con;
      
        
    }
    
}
