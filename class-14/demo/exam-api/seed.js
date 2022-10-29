'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION); // Mongo Connection String
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected for seeding...')
});

const Snack = require('./snack');

async function seedSnacks() {
  console.log('seeding snacks...');

  await Snack.create({
    name: 'Gushers',
    description: 'perfect & colorful'
  });

  await Snack.create({
    name: 'Trail Mix',
    description: 'Gorp!'
  });

  await Snack.create({
    name: 'Jalepeno Chips',
    description: 'Salty & Spicy'
  });

  await Snack.create({
    name: 'Fries',
    description: 'Fluffy & Salty'
  });

  console.log('dont seeding!');

  mongoose.disconnect();
};

seedSnacks();