# Creating and Deleting Resources

## Overview

Today we will focus on the `C` and the `D` of the `CRUD`:`CREATE` and `DELETE`. We will discuss how to send a POST request and save that information in a Mongo database and a DELETE request to remove information from the database.

## Class Outline

- Code review of lab assignment
- Review code challenges
- Warm-up exercise
- Creating a resource
- Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- POST
- DELETE
- params
- request.body
- middleware

#### Execute

- Be able to send a post request from the front end to a server
- Be able to instantly update the results and have those results persist on reload
- Be able to send a delete request from the front end to the server
- Understand the need for a body parser

## Helpful Resources

- [mongoose queries](https://mongoosejs.com/docs/api.html#model_Model.findOneAndDelete)

## Notes

1. What does the C and D stand for in CRUD?
  - CREATE & DELETE

1. What are three ways to send information from the front-end to the back-end?
  - `request.query` - GET/READ requests
  - `request.body` - CREATE/PUT(update) requests
  - `request.params` - DELETE/PUT(update) requests

1. Of the three ways to send information, which two are send in the URL?
  - `request.query` - GET/READ requests
  - `request.params` - DELETE/PUT(update) requests

1. How to send information from the front-end to the back-end using Axios:

**QUERY**

  ```javaScript
  const randomString = 'info that I want to send to the server';
  const SERVER = 'http://localhost:3001';

  axios.get(`${SERVER}?data=randomString`);
  ```

- queries look like this: `http://localhost:3000/?city=seattle`
- they come after the question mark
- they are made up of key/value pairs separated by an equal sign
- you can have multiple queries: `http://localhost:3000/?city=seattle&state=wa`
- sent on the request.query
  - this will be the `request.query.data`

------------------------

**PARAMS**

```js
const id = 12;
const SERVER = 'http://localhost:3001`;

// this will get a single record because we are doing an app.get with an id
axios.get(`${SERVER}/endpoint/${id}`)

// this will delete a single record because we are doing an app.delete with an id
axios.delete(`${SERVER}/endpoint/${id}`})
```
`http://localhost:3001/books/123456789`

- params look like this: `http://localhost:3000/12`
- they come before any queries
- the server defines what the key is for the params like this: `app.get('/someRoute/:id', callBack)`
  - That `:id` can be called anything - it is a variable (ie `app.get('/someRoute/:banana', callback)`)
- The value of the params is what comes in in the URL in that position. So, in this case, the key is `id` and the value is `12`.
- sent on the request.params
  - this will be `request.params.id`

------------------------

**BODY**

```javaScript
const newRecord = {
  name: 'bob',
  age: 104
}
const SERVER = 'http://localhost:3001';

// this will create a new record because that is what POST does
axios.post(`${SERVER}`, { data: newRecord });
```

- sent on the request.body
- will need to parse the body on server in order to be able to read this information. You do this by adding this line of code to your server: `app.use(express.json());`
  - Without this line of code, the request.body will come in as undefined

1. Server Routes

**CREATE**

  ```javaScript
  app.post('/someRoute', callback);

  callback(request, response) {
    // gets information from the BODY of the request object
    const newRecord = request.body.newRecord

    // create a record and save
    const newBook = await Model.create({ name: request.body.newRecord.name, age: request.body.newRecord.age });

    response.status(201).send(newBook);
  }
  ```

**DELETE**

  ```javaScript
  app.delete('/someRoute/:id', callback);

  callback(request, response) {
    // get the id of the record to delete from the params
    const id = request.params.id;

    // find that record and delete
    Model.findOneByIdAndDelete(id);
  }
  ```

- if we need to find a user first and then delete a book ...

  ```javaScript
  app.delete('/someRoute/:index', callback);

  callback(request, response) {
    // get the index of the book
    const index = request.params.index;
    // get the email from the query (need to make sure we send it in the front-end)
    const email = request.query.email;

    // find the user by email
    Model.findOne({ email }, (err, person) => {
      if(err) console.error(err);
      // now that we found the user, delete the book using the index
      const newBookArray = person.books.splice(index, 1);
      // assign the new book Array to the user
      person.books = newBookArray;
      // save it
      person.save();
    })
  }
  ```

### Hosted Mongo Databases: Atlas

While you can run Mongo on your own machines, it's quite common to run an instance of Mongo in the cloud so that you can take advantage of better hardware, more memory and higher speed networks. Mongo offers a hosted cloud database service called "Atlas" ... once you've got this setup, it's easy to connect your API servers from anywhere in the world to use it.

1. Sign Up
1. Setup the organization
   - Name your organization and project
   - These can be whatever you want to call them
   - Set Preferred Language (Javascript)
1. Pick the "Free" (Shared Cluster) option
1. Create Cluster
   - Choose AWS
   - Choose the closest region to your location (i.e. Oregon)
1. Create a DB User
   - Click the "Database Access" link
   - Add a new user
     - Choose Password Authentication
     - Choose a username and password
     - For access rights, choose "Atlas Admin"
1. Enable Network Access
   - Click Network Access Button
   - Click "Add IP Address"
   - Choose the "Allow Access from Anywhere" option
   - Click "Confirm"
1. Get your connection string
   - Click "Clusters" button on the left
   - Click on the "Connect" button on the cluster screen
   - To connect to your new database with the command line:
     - Choose the "Connect with Mongo Shell" option
     - Copy out the connection string
     - This will look something like this:
     - `mongo "mongodb+srv://cluster0.xtrut.mongodb.net/<dbname>" --username dba`
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
   - To connect your Node or Express application:
     - Choose the "Connect your Application" option
     - This will look something like this:
     - `mongodb+srv://dba:<password>@cluster0.xtrut.mongodb.net/<dbname>?retryWrites=true&w=majority`
     - Replace `<password>` with the password you created earlier
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
     - Use this as  `MONGODB_URI` in your .env file or at Heroku when you deploy
