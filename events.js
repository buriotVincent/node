var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
});

server.on('close', function() {
    console.log('Bye bye !');
});

var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message, age){
    console.log(message, age);
});

jeu.emit('gameover', 'Vous avez perdu', '\nVous avez ' + 32 + ' ans');

server.listen(3389);

server.close();