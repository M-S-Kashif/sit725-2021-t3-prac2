var express = require("express");
var app = express();

app.use(express.json());
const port = 8080;

app.use(express.static(__dirname + '/public'));

var add = function (n1, n2) {
    return n1 + n2;
};

//http://localhost:8080/test?username=%27saibi%27
app.get('/test', function (req, res) {
    var username = req.query.username;
    console.log('Hello' + username);
    res.send('Got your function '+ username);
});

//http://localhost:8080/add?num1=3&num2=2
app.get('/add', function (req, res) {
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    var result = add(num1, num2);
    res.send('The result is: ' + result);
});

app.listen(port, () => {
    console.log("Hello! I am listening to the port: " + port);
});

