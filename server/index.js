const express = require('express'); //install
const fs = require('fs');
const path = require('path');
const compression = require('compression'); //install
const app = express();

const logger = require('./logger');
app.log = logger({appName: 'Portfolio server', enabled: true, level: 'debug'});

const bunyanMiddleware = require('bunyan-middleware'); //install
app.use(bunyanMiddleware(app.log));

const staticRoot = path.resolve(__dirname, '../');
const port = process.env.PORT || 5000;

// app.use(function(req, res, next) {
// 	if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
// 	  res.redirect('https://' + req.get('Host') + req.url);
// 	} else {
// 	  next();
// 	}
//   });

// threshold controls compressing based on file size. Let's not do that
// WARNING: The order matters here...compression must come before express.static
app.use(compression({ threshold: 0 }));
app.use(express.static(staticRoot, { maxage: '365d' }));

app.use(function(req, res) {
  res.status(404);
  fs.createReadStream(path.join(staticRoot, '/index.html')).pipe(res);
});

app.listen(port, function () {
	app.log.info(`** Portfolio > Portfolio server is listening on port ${port}`);
	app.log.info('env = ' + app.get('env'));
	app.log.info('__dirname = ' + __dirname);
	app.log.info('process.cwd = ' + process.cwd());
	app.log.info('** Server IS running! **');
});