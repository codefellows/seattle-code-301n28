'use strict';

// requires === import
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

// instantiate a few instances of those dependencies
const app = express();
app.use(cors()); //middleware

// set the PORT variable
const PORT = process.env.PORT || 3002;

// home route
app.get('/', (request, response) => {
  response.send("testing, testing, is this thing on??");
});

// photo route
app.get('/photo', async (request, response, next) => {
  try {
    // baseURL, endpoint, query, queryParameters
    const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${request.query.searchQuery}`
    const photoResponse = await axios.get(url);
    console.log(photoResponse.data);
    const photoArray = photoResponse.data.results.map(photo => new Photo(photo));
    response.status(200).send(photoArray)
  } catch(error) {
    console.error(error);
    next(error);
  }
});

class Photo {
  constructor(photo) {
    this.img_url = photo.urls.regular;
    this.photographer = photo.user.name;
  }
}

// next middleware - tells Express how to handle the error
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

// the very last line in this file
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
