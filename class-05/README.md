# Class 5: Putting it all together

## Overview

Today we will use the skills we learned over the week to introduce a new application: city explorer! Your lab will be to take React starter code and turn it into a beautiful portfolio.

## Class Outline

- Code Challenge Code Review
- Introduction of today's code challenge topic
  - repl.it demo: <https://replit.com/@HexxKing1/301n28-arrayreduce#index.js>
- Warm-up exercise
- Lab Review
- Introduce Module 2: City Explorer
- Lecture/Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Conditional Rendering
- Ternary Statements
- Browser Router

#### Execute

- Be able to build a React app that passes props from parent component to child component
- Hold state in the application
- Use forms in React
- Conditionally render data

## Notes

- What is conditional rendering?

- What is `react-router-dom`?

- What is Browser Router?

- What is Router?

- What is Routes?

- What is Route?

- What is Routing?

1. A ternary statement:

  ```javaScript
  // regular if/else conditional
  if(conditionIsTrue){
    return 'it is true'
  } else {
    return 'it is false'
  }

  // ternary statement
  return conditionIsTrue ? 'it is true' : 'it is false';
  ```

1. Conditionally render a component:

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        // use a ternary to conditionally render the Child component
        {this.state.displayChild ?
          <Child>
        : ''
        }
      )
    }
  }
  ```

- A better way to write it would be:

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        {this.state.displayChild &&
          <Child>
        }
      )
    }
  }
  ```

## Feedback Overview
- "I am getting used to the pace of the class and keeping up with the assignments."
- "I like this class and the way we are working through different methods in ES6."
- "I like how we use repelit, I think that is a very handy tool, That sets the student up for actual practice in the topic that is being studied. The code challenge and then being able to pull the notes down and even have access to the repelit, That has been a game changer for me"
- "Im getting my butt kicked but im enjoying it."
- "My only concern is finding a job upon graduation. I'm already networking and doing targeted job searches, and I love the career assignments we have. I feel like they are preparing me well. I would however, like more support from Code Fellows in making connections with recruiters."
  - <https://www.codefellows.org/blog/introducing-the-new-talent-portal/>
  - <http://hired.codefellows.org/>
- "I feel energized for class!"
- "I dislike React and React-Bootstrap."
- "Honestly just wish I had more hours in the day haha. I had a great week and feel like I'm getting a lot out of the course."
- "I think I'd like to know more about reading expectations in the course-- there were a lot of bookmark and review items in the assignment from earlier this week. Are we also expected to parse through those documents, or is it for our own wanting-to-learn-more journey? I do really appreciate them, just want to know if not reading them will affect what we glean from lecture/class time."
- "It has definitely been fast paced and learning how to work with React components has been a lot to take in. It is taking me more time to understand how everything works."
