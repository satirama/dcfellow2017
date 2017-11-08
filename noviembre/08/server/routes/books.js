var express = require('express');
var router = express.Router();
var csv = require('csvtojson');
var cors = require('cors');

 
/* GET home page. */
/* Read all */
router.get('/', function(req, res, next) {
  csv().fromFile('./books.csv')
  .on('json', (json) =>{
    json
  })
  .on('end_parsed', (jArr) =>{
    res.json({status:200, books: jArr});
  })
  .on('error',(error) =>{
    res.send({status: 500})
  })
});

/* Read one */
router.get('/:id', function(req, res, next){
    console.log(req.params);
    var response = {status: 200, book : []};
    csv().fromFile('./books.csv')
    .on('json', (jObj) =>{
        jObj
      /*if (jObj.id == req.params){
          console.log(jObj)
          //res.json({status: 200, book: c})
          //response.book.push(json)
      }*/
    })
    .on('end_parsed',(jArrObj) =>{
        for (var i = 0; i < jArrObj.lenght; i++){
            console.log(jArrObj[i].id);
            if (jArrObj[i].id == req.params){
                response.book.push(jArrObj[i]);
                console.log('checked')
            }
        }
        res.json(response)
    })
    .on('error',(error) =>{
      res.send({status: 500})
    })
})

module.exports = router;
 