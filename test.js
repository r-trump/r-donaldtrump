/* 
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
*/

var html = require('js-to-html').html;

html()

console.log(
  html.div(
      {'class':'the_class', id:'47'},
      [
          html.p('First paragraph'),
          html.p('Second paragraph'),
      ]
  ).toHtmlText({pretty:true})
)