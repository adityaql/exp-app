var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.get('/',function(req,res) {
    res.render('index');
});

app.get('/main',function(req,res) {
    res.render('main');
});




app.listen(3000,function() {
    console.log('listening on 3000');
});
