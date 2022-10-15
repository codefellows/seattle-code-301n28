# Advanced Topics

## Overview

Today we will dive a little bit deeper into Express and higher level programming in general, covering the following topics:

- Strategies for Refactoring
- Functional Programming
- Modularization

## Class Outline

- Review code challenges
- Code review of lab assignment
- Introduction of today's code challenge topic
  - repl.it <https://replit.com/@HexxKing1/WhisperedGlossyFlashdrive#index.js>
- Warm-up exercise
- Promises vs Async
- Refactoring for Efficiency
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n28-Refactoring-for-Efficiency#index.js>
- Refactoring with Promises
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n28-Refactoring-with-Promises#index.js>
- Modules
  - Can be found in the demo folder in the `jobs` directory
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Substandard programming patterns
  - forgetting semi-colons
  - don't use enough comments in code to keep things visually organized
  - being not specfic enough with variable names and mixing them up with other variables
  - I don't write DRY code at first, I get it to work, then I refactor
- Refactoring opportunities
  - Not readable code or "pure" (unintended side effects)
  - Decrease the # of lines of code
  - to make it DRY
  - to make our variable look up time quicker
  - anytime you are given more data, you may have to refactor to accomdate that new data
  - we modularize to keep our code organized
- Efficiency Loss/Gain
  - this is called BigO
  - BigO meansures to efficiecy of your algorithm/code.
  - we always want to be thinking about how efficient our code is.
- Modularization
  - refactoring our server file into smaller bites of code.
  - `weather.js` for all the weather-related code
  - `movies.js` for all the movies-related code
- Single Responsibility Principle (SRP)
  - your function should do ONE thing.
  - your function should not do more than one thing because if one of those things breaks, it breaks ALL the functionality of that function.
  - Refactor monolithic functions into smaller, single responsibility functions
  - Create a "controller" function
    - `getData` function to call `getLocation`, `getWeather` and `getMovies`
  - Create DRY code by finding repetition, patterns
  - Modularize similar code


#### Execute

- Refactor monolithic functions into smaller, single responsibility functions
- Create a "controller" function
- Create DRY code by finding repetition, patterns
- Modularize similar code

## Notes

- What is a Promise?
  - a Promise is an object in JavaScript that represents the eventual completion or failure of an async operation and it's resulting value.
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>


- `async and await` - vs - `.then() and .catch()`
  - ES6 saw the introduction of the Promise object as well as new methods to handle the execution of these Promises: then, catch, and finally. But a year later, in ES7, the language added another approach and two new keywords: async and await.
  - When returning a Promise inside an async function, you don’t need to use await.
  - <https://www.smashingmagazine.com/2020/11/comparison-async-await-versus-then-catch/>
  - The difference is that in an async function, JavaScript will pause the function execution until the promise settles. With then(), the rest of the function will continue to execute but JavaScript won't execute the .then() callback until the promise settles.
  - <https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma#:~:text=The%20difference%20is%20that%20in,JavaScript%20won't%20execute%20the%20>

- What is the difference between a Promise and using `.then()/.catch()`?
  - `.then()` is a handler function that is called when a Promise is returned either fulfilled or rejected.
  - `.catch()` is a method that calls an onRejected function to handle a rejected Promise.
  - `.then` and `.catch` are methods and Promise is an object.

- What is refactoring?
  - it is the process of restructuring existing computer code changing the inner workings without changing its external behavior. Refactoring is intended to improve nonfunctional attributes of the software.

- What is DRY code?
  - DON'T REPEAT YOURSELF!
  - This applies to both documentation and code!

- Why do we modularize our code?
  - DRY
  - our `server.js` file is getting pretty large!
  - our functions are big and doing multiple things
  - code is unreadable
  - every API that we add to our app, is just going to continue to add to these problems

  ```javaScript
  async function doSomething() {
    try{
      const results = await axios.get(url)
    }
    catch(err){
      console.error(err);
    }
  }

  // error handeling is built in with the .catch() so we don't need a try/catch
  function doSomething() {
    axios
      .get(url)
      .then(results => {
        // the results only exist within this code block
      })
      .catch(err => console.error(err))
  }
  ```

1. Modularizing a file on the server

  ```javaScript
  function doSomething(){
    // does something really cool
  }

  module.exports = doSomething
  ```

  - OR, it can be written like this

  ```javaScript
  module.exports = () => {
    // does something really cool
  }
  ```

  - in the server file

  ```javaScript
  const doSomething = require('./path-to-doSomething');
  // the rest of the file
  ```

1. We can also export more than one function by putting it in an object

  ```javaScript
  module.exports = {
    doSomething: function(){
      // does something cool
    },

    doSomethingElse: function(){
      // does something else
    }
  }
  ```

  - to access a function from the object above in the server, we would...

  ```javaScript
  const doesStuffObject = require('./path-to-doesStuffObject');

  doesStuffObject.doSomething();
  doesStuffObject.doSomethingElse();
  ```

## Feedback Overview

- "It was a difficult week. My brain is feeling stressed trying to absorb alot of information quickly."
- "Starting to really enjoy the problem solving aspects of it now that I have a fundamental tool chest. However, unknown unknowns continue to plague."
- "This past week, we did touched onto API's and that was alot to handle."
- "I think It would be awesome to get to interact with the 401 students. In 201 we got to sit in with a 401 class and although it was cause left town for a day, it was awesome to get some insight from our 'peers'."
- "thanks for you patience and understanding that this stuff can be overwhelming"
- "I rate this week lower than normal because it's the first week of the course I've felt significant stress."
- "I had kind of a tough week. I'd still no doubt recommend this course to folks, I just had a mix of personal stuff and being introduced to a particularly challenging portion of the course. Feeling overwhelmed, but hopeful."
- "I've also really liked checking in with a partner before lab-time. In all honesty, it's kind of reassuring knowing I'm not the only one struggling with the concepts/labs. Wireframing with another person is also incredibly helpful."
- "I've been really enjoying the group work we've been doing in class-- the before lab check-ins, the group replits, and the warm ups. Talking out coding processes is very helpful in my learning."
- "I feel like we are given tons of resources to be successful in our work."
