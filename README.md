# NODEJS_MYSQL_EXPRESS_API
Intern_assingment

#before you proceed please import mysql database   -test.sql


How To Use : 
(1) Download /Clone
    Download this repository and Copy it into your System or You Can clone it by using the following command 
    git clone https://github.com/4mit/NODEJS_MYSQL_EXPRESS_API
    
    
(2) Go to terminal and navigate through that folder/ Directory then type 
    node index.js
    if You are using Nodmon
    Type nodemon index.js
    NodeMon help to restart server each time when make changes on the file it detects all the changes as restarts the 
    server automatically when any changes occured.
    
(3) Guide to Register User 
    You can use any user friendly request maker like POSTMAN (that I'm using)
    go to postmaninterface and type 
        http://localhost:8012/api/register
    in address bar also add body with UserName and Password then cllick on send button
    
(4) Guide to Login User
    go to postmaninterface and type 
        http://localhost:8012/api/authenticate
    in address bar also add body with UserName and Password then cllick on send button
   
(5) Guide Add Book    
    go to postmaninterface and type 
        http://localhost:8012/api/addBook
    in address bar also add body with BookName and author then cllick on send button
 ## Make Sure for above request You have select request type  = POST

(6) To Delete Book 
     go to postmaninterface and type 
     ## Make Sure for above request You have select request type  = DELETE
        http://localhost:8012/api/deletebook
    in address bar also add body with BookName then cllick on send button
    
(7) Logout
     go to postmaninterface and type 
     ## Make Sure for above request You have select request type  = POST
        http://localhost:8012/api/logout
    in address bar also add body with UserName and Password then cllick on send button
   

    

