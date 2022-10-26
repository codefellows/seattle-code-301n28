'use strict';

const Cat = require('../models/cat');

// refactoring from lab11 to include POST and DELETE handler functions
const Handler = {};

Handler.getCats = async (request, response, next) => {
  try {
    // if I pass in an empty object, that tells Mongoose to get ALL the documents from the database
    const cats = await Cat.find({});
    response.status(200).send(cats);
  } catch(error) {
    error.customMessage = 'Something went wrong when getting your cats: ';
    console.error(error.customMessage + error);
    next(error);
  }
};

Handler.createCat = async (request, response, next) => {
  try {
    const cat = await Cat.create(request.body);
    response.status(201).send(cat);
  } catch(error) {
    error.customMessage = 'Something went wrong when creating your cat: ';
    console.error(error.customMessage + error);
    next(error);
  }
};

Handler.deleteCat = async (request, response, next) => {
  try {
    await Cat.findByIdAndDelete(request.params.id);
    // Express response objects will not forward a response body if the response status code is (204) "No Content".
    response.status(200).send('your cat is deleted!');
  } catch(error) {
    error.customMessage = 'Something went wrong when deleting your cat: ';
    console.error(error.customMessage + error);
    next(error);
  }
};

module.exports = Handler;

