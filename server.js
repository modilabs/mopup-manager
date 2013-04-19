var express = require('express'),
    exp_server = express(),
    http = require('http'),
    server = http.createServer(exp_server),
    db = require('monk')('localhost/mopup'),
    PORT = process.env.PORT || 8080,
    io = require('socket.io').listen(server, { log: false });

server.listen(PORT);
//remove remainder db

//configure
exp_server.configure(function(){
    exp_server.use(express.static(__dirname + '/app'));
});

//routing
exp_server.get('/', function(req, res){
    res.sendfile(__dirname + '/app/index.html');
});

