'use strict';

// requires are similar to imports
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const lists = require('./data/shopping-list.json'); // dummy data

// create an instance of an Express server
const app = express();

// middleware - tells our express app to use cors
app.use(cors());

// set our PORT variable to tell our Express app where to serve our server
// PORT is NOT bananas! It must be named exactly this, because Heroku looks for a variable named PORT
const PORT = process.env.PORT || 3002;

// define the "home" route aka endpoint
app.get('/', (request, response) => {
  response.send('testing, testing...is this thing on?');
});

// define an endpoint that gets the shoppingList data and returns it to React
app.get('/shopping-list', (req, res, next) => {
  try {
    // grab the searchQuery from the request object 
    // notice that the query parameter is named "type"
    // "type" is the name of query parameter we must send along with Axios from React in order to ask for data from our server
    const type = req.query.bananas;
    console.log('query parameter: ', req.query);
    console.log('type: ', type);
    const shoppingList = new List(type);
    const listItems = shoppingList.getItems();
    res.status(200).send(listItems);
  } catch(error) {
    // next can be used to pass an error to express for the error middleware to handle
    next(error);
  }
});

class List {
  constructor(type){
    // find method to find the type of list we want to return
    let { listName, items } = lists.lists.find(list => list.listName === type);
    // console.log(lists.lists);
    this.type = listName;
    this.itemValues = items;
  }

  // a method that gets just the name and desc properties from our item objects in the itemValues array
  getItems() {
    return this.itemValues.map(item => ({
      name: item.name,
      description: item.description
    }));
  }
}

app.get('/fakeError', (request, response, next) => {
  try {
    const listThatDoesntExists = require('./listThatDoesntExists.js');
    response.send(listThatDoesntExists);
  } catch(error) {
    next(error.message);
  }
});

// error handling middleware MUST be the last app.use() defined in the server file
app.use((error, request, response, next) => {
  console.log(error);
  response.status(500).send(error);
});

// this line of code needs to be the LAST line in the file
// listen tells our app which port to listen on
// which port to serve our server on
app.listen(PORT, console.log(`listening on PORT ${PORT}`));
