'use strict';

const Cat = require('../models/cat');

const getCats = async (request, response, next) => {
  try {
    // if I pass in an empty object, that tells Mongoose to get ALL the documents from the database
    const cats = await Cat.find({});
    response.status(200).send(cats);
  } catch(error) {
    console.error(error);
    next(error);
  }
};

module.exports = getCats;

