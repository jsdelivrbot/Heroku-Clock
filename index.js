const cool = require('cool-ascii-faces');
const throng = require('throng');
const cluster = require('cluster');

const WORKERS = process.env.WEB_CONCURRENCY || 1;
for (let i = 0; i < WORKERS; i++) {
  cluster.fork();
}

throng({
  workers: WORKERS,
  lifetime: Infinity
}, start);


function start() {
  var express = require('express');
  var app = express();


  app.set('port', (process.env.PORT || 5000));

  app.use(express.static(__dirname + '/public'));

  // views is directory for all template files
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');

  app.get('/', function(request, response) {
    response.render('pages/index')
  });

  app.get('/cool', function(request, response) {
    response.send(cool());
  });


  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
}
