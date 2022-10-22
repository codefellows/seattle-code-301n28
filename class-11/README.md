# Mongo, Mongoose and Data Modeling

## Overview

Today is the first day of our new project, a mobile-only book collection. You will be gradually working towards a full-scale application, complete with an express server, persistence in a Mongo database, authentication, and the ability to view, add, update and delete books from your React front end.

To start, we will introduce Mongodb and Mongoose. We will create data models and hard code some data to store in our database so that our front end can retrieve that data. We will introduce `CRUD` and focus on the `R`:`READ`.

## Class Outline

- Review code challenges
- Introduction of today's code challenge topic
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n28-Chained-Methods#index.js>
- Warm-up exercise
- Mongo, Mongoose, Data Modeling
- Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- CRUD
  - the four basic operations (create, read, update, and delete) of data storage
- MongoDB
  - Mongo is the database it's self. It is the storage.
  - kinda like local storage or cache object, but better :)
  - MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL (non-relational) database program, MongoDB uses JSON-like documents with optional schemas.
- Atlas
  - this is the cloud platform that will serve our Mongo Database
  - this is like Heroku or Netlify who serves our frontend or backend apps, except Atlas only serves databases
- Mongoose
  - Mongoose is the tool that allows us to talk to our Mongo Database
  - it is like Axios, in the fact that is carries all our requests to our MongoDB
  - Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Express web application framework.
- ORM aka Object-Relational Mapping
  - it is a technique that maps data from a database to "incompatible type systems" using object-oriented programming languages
  - <https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a>
- GET
  - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
- [Mongoose Schema Types](https://mongoosejs.com/docs/schematypes.html)

#### Execute

- Be able to create a data model or schema
- Be able to set up a Mongo database using Mongoose
- Be able to retrieve all of the entries from a Mongo database using Mongoose

## Notes

1. What does the R stand for in CRUD?
  - READ!

1. What is an ORM?
  - it is a technique that maps data from a database to "incompatible type systems" using object-oriented programming languages
  - <https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a>

1. How are Mongo and Mongoose related?
  - Mongo is the place where our data lives and Mongoose is the tool that allows us to talk to that database.

1. Why do we need to use Mongoose at all?
  - Without it, we would have to write all the code ourselves, from scratch to make the calls to our database. Mongoose gives us all that code for free!

1. Where does Mongo live?
  - It can live locally on your computer or it can be hosted in the cloud on Atlas.

1. Mongoose:

- step 1: Bring in Mongoose

  ```javaScript
  const mongoose = require('mongoose');
  // making a database called cats-database
  mongoose.connect('mongodb://localhost:27017/cats-database', {useNewUrlParser: true, useUnifiedTopology: true});

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Mongoose is connected')
  });
  ```

- step 2: Make a schema

```javaScript
const catSchema = new mongoose.Schema({
  name: {type: String}
});

```

- step 3: Make a model from the schema

```javaScript
const CatModel = mongoose.model('cat-collection', catSchema);
```

- step 4: Create and save a record

```javaScript
const fluffy = new CatModel({name:'fluffy'});
fluffy.save();
```

- step 5: Gets all the records from the database

```javaScript
  CatModel.find((err, cat) => {
    if(err) return console.error(err);
    console.log({cat})
  });
```

- Gets the record where the name is 'fluffy'

```javaScript
  CatModel.find({name:'fluffy'}, (err, cat) => {
    if(err) return console.error(err);
    console.log({cat})
  });
```

1. What resources can I use to help me with my lab and to learn more?
[mongoose](https://mongoosejs.com/docs/)


### Mongosh CLI

- What is `mongosh`?
  - The MongoDB Shell, mongosh, is a fully functional JavaScript and Node.js 16.x REPL environment for interacting with MongoDB deployments. You can use the MongoDB Shell to test queries and operations directly with your database.
    - [MongoDB Shell Documentation](https://www.mongodb.com/docs/mongodb-shell/)
  - [Connect to a Deployment](https://www.mongodb.com/docs/mongodb-shell/connect/)
    - `mongosh` is the same as `mongosh "mongodb://localhost:27017"`
      - Run mongosh without any options to connect to a MongoDB instance running on your localhost with default port 27017.
    - `mongosh "mongodb://localhost:27017/myDataBase"`
      - connect to a specific database
      - If you do not specify a database, you connect to a database named "test".
    - To disconnect from a deployment and exit mongosh, you can:
      - Type `.exit`, `exit`, or `exit()`.
      - Type `quit` or `quit()`.
      - Press `Ctrl + D`.
      - Press `Ctrl + C` twice.
  - [Run Commands](https://www.mongodb.com/docs/mongodb-shell/run-commands/)
    - `db`
      - display the database you are using
    - `use <database>`
      - switch databases or to create a new database
    - `show dbs`
      - list the databases available to the user
    - What is a collection?
      - A grouping of MongoDB documents. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection have a similar or related purpose.
      - `db.myCollection.insertOne( { x: 1 } );`
        - creates the collection "myCollection"
        - inserts `{x: 1}` into the collection
    - `cls` or `Ctrl + L` or `console.clear()`
      - to clear the console
  - [Peform CRUD Operations](https://www.mongodb.com/docs/mongodb-shell/crud/)
    - [Insert Documents](https://www.mongodb.com/docs/mongodb-shell/crud/insert/#std-label-mongosh-insert)
    - [Query Documents](https://www.mongodb.com/docs/mongodb-shell/crud/read/#std-label-mongosh-read)
    - [Update Documents](https://www.mongodb.com/docs/mongodb-shell/crud/update/#std-label-mongosh-update)
    - [Delete Documents](https://www.mongodb.com/docs/mongodb-shell/crud/delete/#std-label-mongosh-delete)
  - [Write Scripts](https://www.mongodb.com/docs/mongodb-shell/write-scripts/)
  - [Glossary](https://www.mongodb.com/docs/manual/reference/glossary/)
