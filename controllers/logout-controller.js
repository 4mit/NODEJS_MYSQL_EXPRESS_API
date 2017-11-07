var connection = require('./../config');

module.exports.logout=function(req,res){
    //collectig username and password

    var UserName=req.body.UserName;
    var Password=req.body.Password;
    //searching for the user 
    connection.query('SELECT * FROM users WHERE UserName = ?',[UserName], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        if(results.length >0){
            if(Password==results[0].Password){
                res.json({
                    status:true,
                    message:'successfully Logged Out'
                })
            }else{
                res.json({
                  status:false,
                  message:"Incorrect Credentials.."
                 });
            }
         
        }
        else{
          res.json({
              status:false,    
              message:"Incorrect Credentials.."
          });
        }
      }
    });
}