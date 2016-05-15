/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utils;

import javax.servlet.http.Cookie;


/**
 *
 * @author thor
 */
public class LoginChecker {
    
    
  public static boolean checkLoggedIn(Cookie[] cookiesToBeChecked){
        Cookie[] cookies = cookiesToBeChecked;
             boolean loggedInCookieFound = false;
             boolean loggedIn = false;
             for(int i = 0; i < cookies.length; i++){
                 System.out.print(cookies[i].getName());
                 if(cookies[i].getName().equals("login")){
                     System.out.println("login cookie found");
                     loggedInCookieFound = true;
                     Cookie c = cookies[i];
                     System.out.println(c.getValue());
                     if(!c.getValue().equals("valid")){
                         System.out.println("found cookie, but not valid");
                     return false;
                 } else loggedIn = true;
                 }                
             }
              if(loggedInCookieFound && loggedIn){
                  return true;
                 } else return false;    
    }
    
}
