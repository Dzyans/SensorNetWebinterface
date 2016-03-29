
import static database.dbConnector.getDbConnection;
import java.sql.Connection;
import java.util.logging.Level;
import java.util.logging.Logger;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author thor
 */
public class DbTest {
    
    public static void main (String argv){
        
        try { 
            Connection con = getDbConnection();
        } catch (Exception ex) {
            ex.printStackTrace();
            Logger.getLogger(DbTest.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
    
}
