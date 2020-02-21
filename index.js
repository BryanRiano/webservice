const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(bodyParser.json());

//routes
require('./routes/vehiculo')(app);

app.listen(3000, () => {
    console.log('Server started! on port 3000');
});