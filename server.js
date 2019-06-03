var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);

    if (page == '/') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('Vous êtes à l\'accueil, que puis-je faire pour vous ?');
    } else if (page == '/sous-sol') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('Vous êtes dans ma cave à vin, pas touche aux bouteilles !!');
    } else if (page == '/etage/1/chambre') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('He ! Les chambres sont privées !');
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write('Cette page n\'existe pas');
    }
    /*res.write(
        '<!DOCTYPE html>' +
        '<html>' +
            '<head>' +
                '<meta charset="utf-8" />' +
                '<title>Ma page Node.js !</title>' +
            '</head>' +
            '<body>' +
                '<p>Voici un paragraphe <strong>HTML</strong></p>' +
            '</body>' +
        '</html>'
    );*/
    res.end();
});
server.listen(3389);