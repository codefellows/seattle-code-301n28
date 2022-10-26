'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
// update Handlers to be an object that holds a reference to all the handler functions
const Handler = require('./modules/handlers');

const app = express();
app.use(cors());
app.use(express.json()); // new to lab 12

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

app.get('/cats', Handler.getCats);
app.post('/cats', Handler.createCat);
app.delete('/cats/:id', Handler.deleteCat);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
