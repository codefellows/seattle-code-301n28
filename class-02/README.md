# State and Props

## Overview

Today's class will focus on passing information as `props` from a parent component into a child component. We will also cover the concept of `state` and how individual components can hold state.

## Class Outline

- Warm-up exercise
- Review code challenges
- Code review of lab assignment
- Introduction of today's code challenge topic
- Code Demo
- Bootstrap
- Netlify
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- State
- Props
- React-Bootstrap
- Netlify
- setState

#### Execute

- Understand and define the concepts of `props` and `state` as they relate to React Components
- Pass both static and dynamic information from a parent component into a child component using `props`
- Hold information as `state` in different components
- Create responsive web pages suitable for desktop or mobile web browsers
- Integrate a 3rd party component library into a React application
- Deploy to Netlify

## Notes

- What is state?

- What are props?

- To Update State: `this.setState({ thingInState: thingToUpdate })`

- To send something in props to a child component: `<ChildComponent bananas='randomString' />`

- To access that variable in the props from the child component: `this.props.bananas`

- Information flows in one direction. That direction is ______________.

- What is Bootstrap?

- What are different things that I can customize using Bootstrap?

- How does Bootstrap use classes for customization?

1. Holding state in a parent component and sending it into a child component:

  ```javaScript
  import React from 'react';
  import Child from './path-to-Child-component';

  class Parent extends React.Component {
    constructor(props);
    this.state={
      name: 'sue',
      childName: 'bob'
    }

    render() {
      return (
        <>
          <p>My name is {this.state.name}</p>
          <Child kidsName={this.state.childName}>
        </>
      )
    }
  }

  export default Parent

  import React from 'react';

  class Child extends React.Component {
    render() {
      return(
        <p>My name is {this.props.kidsName}</p>
      )
    }
  }

  export default Child
  ```
