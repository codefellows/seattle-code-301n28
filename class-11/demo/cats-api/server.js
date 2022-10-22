'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const getCats = require('./modules/handlers');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

// mongoose
// connecting to our mongo database called "cats-database" using mongoose
mongoose.connect('mongodb://localhost:27017/cats-database', {useNewUrlParser: true, useUnifiedTopology: true});
// this is where the connection actually happens
const db = mongoose.connection;
// is turning the db on and checking for any errors
db.on('error', console.error.bind(console, 'connection error:'));
// if my db is connected properly, I should see this console.log after "listening on PORT 3001"
db.once('open', function() {
  console.log('Mongoose is connected');
});

app.get('/test', (req, res) => res.send('testing, testing...'));

app.get('/cats', getCats);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
