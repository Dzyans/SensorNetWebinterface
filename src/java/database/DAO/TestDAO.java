/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database.DAO;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.Statement;
import static com.sun.org.apache.xalan.internal.lib.ExsltDatetime.year;

import database.dbConnector;
import java.sql.Date;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author thor
 */
public class TestDAO {
    java.sql.Connection con; 
    public TestDAO() throws Exception{
        con = dbConnector.getDbConnection();     
    }
    
    
    public boolean sendTestSensorData(int i) throws SQLException, Exception{
        
        
        java.sql.Statement stm = con.createStatement();
        Calendar cal = Calendar.getInstance();
        //cal.setTimeInMillis(0);
        //java.util.Date date = cal.getTime();
        java.util.Date date = new java.util.Date();
        java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        
        String stamp = sdf.format(date);
        System.out.println("from dao " + stamp);
        try {
            //stm.execute("insert into temperature(sensor_id, datatime, temp_c) values ('one','" + stamp + "' ,100)");
            stm.execute("insert into new_table(testvalue, testv2) values ('one" + i + "'," + i+100 + ")");
        } catch (SQLException ex) {
            Logger.getLogger(TestDAO.class.getName()).log(Level.SEVERE, null, ex);
        }   
        
        return true;
    }
    public void closeCon() throws SQLException{
        if (con != null) con.close();
    }
    
}
