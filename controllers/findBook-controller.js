//database connection
var connection = require('./../config');
//controller
module.exports.getBook=function(req,res){
    var BookName=req.body.BookName;

    // find the book with bookname
    connection.query('DELETE FROM books WHERE BookName = ?',[BookName], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with deleting book query'
            })
      }else{
        if(results.length >0){
            res.json({
                status:true,
                message:'Book  does not exits'
            })
        }
        else{
          res.json({
              status:false,    
            message:"successfully Deleted The given book"
          });
        }
      }
    });
}