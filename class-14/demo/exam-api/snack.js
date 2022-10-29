'use strict';

const mongoose = require('mongoose');

const snackSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String }
});

const SnackModel = mongoose.model('Snack', snackSchema );

module.exports = SnackModel;