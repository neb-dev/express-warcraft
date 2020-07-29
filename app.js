const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const cors = require('cors');

const LadderRoutes = require('../routes/ladder');
const UnitsRoutes = require('../routes/units');

const app = express();
// const URI = process.env.MONGODB_URI || '';
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// });

app.use(LadderRoutes);
app.use(UnitsRoutes);

mongoose.connect(URI, { useNewUrlParser: true })
.then(res => {
  console.log('Server running on localhost:3000');
  app.listen(port);
})
.catch(err => console.log(err));