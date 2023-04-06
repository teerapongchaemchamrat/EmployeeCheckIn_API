'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', eventRoutes.routes);


//app.listen(process.env.PORT);
app.listen(config.port, () => {
  console.log('app listening on url http://192.168.10.56:' + config.port )
});

var virtualDirPath = process.env.virtualDirPath || '';

app.get(virtualDirPath + '/', function(req, res) {
  res.render('index', { virtualDirPath: virtualDirPath });
});
app.use(express.static(path.join(virtualDirPath, 'public')));
app.use('/bower_components', express.static(path.join(virtualDirPath,'bower_components')));