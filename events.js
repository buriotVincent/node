var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
});

server.on('close', function() {
    console.log('Bye bye !');
});

server.listen(3389);

server.close();