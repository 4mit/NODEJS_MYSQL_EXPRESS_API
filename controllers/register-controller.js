//connect to database
var connection = require('./../config');

//export the controller
module.exports.register=function(req,res){
    var users={
        "UserName":req.body.UserName,
        "Password":req.body.Password,
    }
    //register users 
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with insert query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}