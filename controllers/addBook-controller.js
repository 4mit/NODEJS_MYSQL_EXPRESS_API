var connection = require('./../config');    // Needs DataBase Connection
module.exports.addBook=function(req,res){
    var books={
        "BookName":req.body.BookName,       // GettingParameters
        "Author":req.body.Author,
    }
    //Executing Qurey
    connection.query('INSERT INTO books SET ?',books, function (error, results, fields) {
      if (error) {
        //Creating JSON response
        res.json({
            status:false,
            message:'there are some error with insert book  query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Book Added sucessfully'
        })
      }
    });
}