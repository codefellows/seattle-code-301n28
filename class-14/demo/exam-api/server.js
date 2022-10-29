'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Handler = require('./handler');

const app = express();
app.use(cors());
app.use(express.json()); // needed to parse JSON object for CREATE & DELETE

mongoose.connect(process.env.MONGO_CONNECTION); // Mongo Connection String
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected!')
});

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => response.send('with whatever string...'));
app.get('/snacks', Handler.getSnacks);
app.post('/snacks', Handler.createSnack);
app.delete('/snacks/:id', Handler.deleteSnack);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
