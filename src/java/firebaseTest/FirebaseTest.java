/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package firebaseTest;

import com.firebase.client.Firebase;

/**
 *
 * @author thor
 */
public class FirebaseTest {
    
    
    public void testConnection(){
        Firebase db = new Firebase("https://sizzling-heat-4676.firebaseio.com/");
        for(int i= 0; i <20; i++){
        User us = new User("jon"+i, 1982+i);
        Firebase refref = db.child("users").child(us.getFullName());
        
        refref.setValue(us);
            System.out.println("data written");
        }
        
        
        
        
        
    }
    
    
    
    
     
}
