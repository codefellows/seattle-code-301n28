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
  - Repl.it Demo:
- Refactoring with Promises
  - Repl.it Demo:
- Modules
  - Can be found in the demo folder in the `jobs` directory
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Substandard programming patterns
- Refactoring opportunities
- Efficiency Loss/Gain
- Modularization
- Single Responsibility Principle (SRP)

#### Execute

- Refactor monolithic functions into smaller, single responsibility functions
- Create a "controller" function
- Create DRY code by finding repetition, patterns
- Modularize similar code

## Notes

- What is a Promise?

- `async and await` - vs - `.then() and .catch()`

- What is the difference between a Promise and using `.then()/.catch()`?

- What is refactoring?

- What is DRY code?

- Why do we modularize our code?

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
