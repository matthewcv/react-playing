var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname,'../views/index.html'));
});


router.get('/comments', function(req,res){
              var data = [
                {author: "Pete Hunt", text: "This is one comment"},
                {author: "Jordan Walke", text: "This is *another* comment"}
            ];
  res.send(data);
})

module.exports = router;
