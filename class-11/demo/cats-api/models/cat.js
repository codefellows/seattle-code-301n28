'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// this is our Object Relational Mapping
const catSchema = new Schema({
  // schema types
  name: String,
  color: String,
  hasClaws: Boolean,
  location: String
});

// create a model, name it which will turn into the name of the collection in mongoDB (plus and 's' on the end)
// pass it the shape of the data, which will always be your schema that you just defined
const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
