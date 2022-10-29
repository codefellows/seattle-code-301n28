'use strict';

const { response } = require('express');
const Snack = require('./snack');

const Handler = {};

Handler.getSnacks = async (request, response) => {
  try {
    const snacks = await Snack.find({});
    response.status(200).json(snacks);
  } catch(error) {
    response.status(500).send('something went wrong when getting your snacks');
  }
}

Handler.createSnack = async (request, response) => {
  try {
    const snack = await Snack.create(request.body);
    response.status(201).json(snack);
  } catch(error) {
    response.status(500).send('something went wrong when creating your snack');
  }
}

Handler.deleteSnack = async (request, response) => {
  try {
    await Snack.findByIdAndDelete(request.params.id);
    response.status(200).json('your snack has been eaten!');
  } catch(error) {
    response.status(500).send('something went wrong when eating your snack');
  }
}

module.exports = Handler;