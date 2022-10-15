'use strict';

// requires
const cors = require('cors');
const express = require('express');
require('dotenv').config();
const getJobs = require('./modules/jobs');
const notFound = require('./modules/notFound');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.send('whatever test you want in a string :)');
});

app.get('/jobs', getJobs);
// if you land on any other endpoint that is not previously defined, this app.use will catch it and run
app.use('*', notFound);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
