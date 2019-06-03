var monmodule = require('./monmodule');

monmodule.direBonjour();
monmodule.direAurevoir();

var markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));