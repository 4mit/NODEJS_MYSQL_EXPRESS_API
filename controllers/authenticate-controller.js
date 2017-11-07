//databse connection
var connection = require('./../config');
//export controller
module.exports.authenticate=function(req,res){
    var UserName=req.body.UserName;
    var Password=req.body.Password;
  
    // find the user
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
                    message:'successfully authenticated'
                })
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
         
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}