# Class 5: Putting it all together

## Overview

Today we will use the skills we learned over the week to introduce a new application: city explorer! Your lab will be to take React starter code and turn it into a beautiful portfolio.

## Class Outline

- Code Challenge Code Review
- Lab Review
- Introduction of today's code challenge topic
- Warm-up exercise
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
