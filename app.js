var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
// app.use(express.static(__dirname + '/public/js'));

app.get('/',function(req,res) {
    res.render('index');
});


app.get('/main',function(req,res) {
    res.render('main');
});
app.get('/queue',function(req,res) {
    res.render('queue');
});
app.get('/homepage',function(req,res) {
    res.render('homepage');
});

// app.use('/*', function(req, res){
//   res.sendFile(__dirname + '/public/index.ejs');
// });

app.listen(3000,function() {
    console.log('listening on 3000');
});
