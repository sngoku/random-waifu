const express = require('express');

const app = express();

let url = '';

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
    const type = req.body.input1;
    const category = req.body.input2;
    url = 'https://waifu.now.sh/' + type + '/' + category;

    res.render('view', { imageUrl : url });
});

app.post('/next',function(req,res){
    res.render('view', { imageUrl : url });
});

app.listen(process.env.PORT || 3000, function() {
    console.log("server is running on port 3000");
});