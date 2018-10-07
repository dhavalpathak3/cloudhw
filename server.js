var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var router = express.Router();
router.get('/', function(req, res){
  res.end('Sample web app!!');
});
app.use(router);
app.listen(3000);
