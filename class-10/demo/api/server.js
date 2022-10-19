'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const getRecipes = require('./modules/recipes');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => response.send('testing, testing...'));
app.get('/recipes', getRecipes);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
