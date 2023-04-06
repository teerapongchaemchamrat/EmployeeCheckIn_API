// 'use strict';

// const cors = require('cors');
// app.use(cors());

async function drawChart(){

      const apiLink = 'http://192.168.10.56:3002/api/chart';

      const response = await fetch(apiLink)
      console.log(response)
      const datapoints = await response.json()
      console.log(datapoints);

      const numbersEm = datapoints.map((nums) => nums.employeeID)
      console.log(numbersEm)
      numberEmployee = numbersEm

      const locationEm = datapoints.map((local) => local.Location)
      console.log(locationEm)
      LocationEmployee = locationEm

      console.log("don't trust anyone")
} 
