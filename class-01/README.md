# React and Component-Based Architecture

## Overview

Today we will be covering some new topics and reviewing concepts you should already be familiar with.

We will spend some time reviewing the concepts from the prework. We will also discuss several new topics: `create-react-app` and component-based architecture.

## Class Outline

- Orientation w/ John Cokos
- Overview of 301
  - Zoom Lectures
  - Remo Virtual Lab
  - Slack
  - GitHub Class Repo
  - Canvas
    - Assignments
      - Grading TA: Joey Hernandez
      - Late Policy
- Review of prework
  - Arrow Functions
  - Classes
- Lunch Break / 301n27's Final Project Presentations
- Introduction to code challenges
  - Review loops & iteration
  - Introduction of Code Challenge 01: `array.forEach()`
  - repl.it Demo: <https://replit.com/@HexxKing1/301n28-Loops-Review-and-arrayforEach#index.js>
- Discussion of `create-react-app`
- Discussion of component-based architecture
- Lab overview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Component-based architecture
- React
- `create-react-app`
- JavaScript classes
- Arrow functions
- Gain an understanding of scope with arrow functions
- Gain an understanding of context, scope, "this", and the "new" keyword
- Gain an understanding of the core concepts of React and how to create a basic React application
- Understand component-based architecture and be able to build a simple component-based React application

#### Execute

- Be able to create a basic React application using `create-react-app`

## Notes

- What is ES6?
  - newest version of JavaScript with added cool new features!
  - built-in methods, classes, arrow functions
- What is a class?
  - a way to make objects, kinda like constructor functions
- What is a method?
  - a function on an object/class
- What is the difference between an arrow function and a function declaration?
  - arrow functions are a more concise way of writing function declarations and come with a few restrictions.
- What is React?
  - User Interface Library!
    - it's prewritten code
  - Developer Advantages
    - reusuability parts
    - separation of concerns
  - CRA aka `create-react-app`
    - CRA is a library that builds a working React application out the box, ready to be customized!
- What are components?
  - resusable parts on a website
- What are React class components made from?
  - ES6 Classes

1. Turning a function declaration into an arrow function:

   ```javascript
   function doSomething(name) {
     // Do something
   }

   doSomething = (name) => {
     // Do something
   }

   // Or make it a one liner!
   doSomething = (name) => // Do something small
   ```

1. Difference between a constructor function and a class:

   ```javascript
   // constructor
   function Cat(name) {
     this.name = name;
     this.fluffy = true;
   }

   Cat.prototype.speak = function(){
     console.log(`${this.name} says meow`);
   }

   // to make a new instance
   const bob = new Cat('Bob');
   bob.speak();

   // class
   class Cat {
     constructor(name) {
       this.name = name;
       this.fluffy = true;
     }

     speak = () => console.log(`${this.name} says meow`);
   }

   // to make a new instance
   const bob = new Cat('bob');
   bob.speak();
   ```

1. Basic React Component Structure:

   ```javascript
   import React from 'react';

   class Something extends React.Component {
     render() {
       return(
          <section>
            <h1>Header for Something</h1>
            <p>Text that is all about Something.<p>
          </section>
       )
     }
   }

   export default Something
   ```
