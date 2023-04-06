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

var path = require('path')
app.use(express.static('public'))
app.get('/chart',function(req,res){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.sendFile(path.resolve(__dirname,'D:/สแกนจำนวนคน&report chart/EmployeeCheckIn_API/EmployeeCheckIn/index.html'))
})




//app.listen(process.env.PORT);
app.listen(config.port, () => {
  console.log('app listening on url http://192.168.10.56:' + config.port )
});
