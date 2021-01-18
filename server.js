const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

require('./server/routes/product.routes')(app);

app.listen(8071, () => {
    console.log("Listening at Port 8071")
})

//npm run start for 1st terminal - make sure you are in client folder CD into client for this
//nodemon server.js for 2nd terminal- make sure you are in server folder CD into server for this (maybe)