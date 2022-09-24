# Passing Functions as Props

## Overview

Yesterday, you learned how to pass information from a parent component into a child component through `props`. Today, we are going to pass functions through the `props` as well. We are also going to display a nested component using `.map` rather than hard-coding each one individually.

## Class Outline

- Review code challenges
- Code review of lab assignment
- Introduction of today's code challenge topic
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n28-arrayfilter#index.js>
- Warm-up exercise
- Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Parent Component
- Child Component
- Spread Operator

#### Execute

- Be able to pass functions from a parent component to a child component
- Understand the spread operator
- Understand `.map` and how to use it to render data in a React application

## Notes

- How can a child component update the state of a parent component?
  - This "helper function" allows us to do something in a child component that will trigger behavior in the parent component.
  - This is useful for updating state, which in return re-renders the parent component and all of it's the children components with the updated value(s). The action of changing state still occurs in the parent, even if the child triggers it and passes arguments.

- How does a parent component send a function into a child component?
  - The parent component sends a "helper function" into the child component on the props object that will allow the child component to interact with information in the parent component by invoking that "helper function".
  - This is called "lifting state" in React

- Using React-Bootstrap, how do you determine if a modal is open or closed?
  - You can use the `show` and `onHide` properties on the Modal element to display or hide the modal.
    - The `show` attribute is a boolean and will show if it is set to true or will hide if set to false.
    - The `onHide` attribute is an event listener(function) that closes the model by setting the show property to false.

1. Allowing the child component to update the state in the parent component:

  - Step 1. send a function into the child component that updates the state in the parent component

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: 'bob'
      }
    }

    updateName = (newName) => this.setState({ name: newName });

    render(){
      return(
        <Child updateName={this.updateName}>
      )
    }
  }
  ```

  - Step 2. invoke that function from the props in the child component
  ```javaScript
  class Child extends React.Component {
    constructor(props){
      super(props);
      this.state={
        newName:''
      }
    }

    // this function calls the function that the parent component send us with the new name as an argument
    updateChildName = () => this.props.updateName(this.state.newName);

    render(){
      return(
        <>
          <form onSubmit={this.updateChildName}>
            <label>What is your new name?</label>
            <input onChange={() => this.setState({ newName: e.target.value })} />
          </form>
        </>
      )
    }
  }
  ```

  - Step 3. The invoked function from the child component will update the name in the parent component and tada! Your child component has essientially changed the state of your parent component.


## Feedback Overview
- "The tempo of this class is a lot faster compared to my previous class. It was a bit overwhelming."
- "For me its striking the balance of how quick this information is coming at us and my being able to actually capture that information."
- "The fact that we dont get access to the canvas until the day before. especially with the amount of prework that we had come in during the week where we had no class. I know a few students and myself were eager to start the assignments and be able to hit the ground running, however we got alot of assignments and had to do alot of that work the day before as well as the reading that was due the first day of class. This week didnt feel much like a break to me because me (and some students) because there was never a point we were able to have everything turned in and got to enjoy it. This (to me) was a big flop."
- "Right now the messaging for the hurried and difficult pace seems to take delight in it being hurried and difficult."
- "I'm concerned about the feasibility of same-day due-date for coding challenges, labs, etc. For Class 01, on a Saturday when I had no other obligations and the assignments were not particularly complex, this wasn't much of a problem. But looking ahead I'm concerned this schedule may be unrealistic, particularly for weeknight assignments. I can't be expected to stay up until Midnight to crank out assignments when I need to be up early the next day for a full-time job. I've temporarily given up any semblance of work-life balance in order to complete this boot-camp process. But some schedule flexibility would be helpful vs setting the expectation of submitting incomplete assignments to take advantage of the resubmission policy."
- "Saturday's class was a serious butt kicker. I had a lot of anxiety going into it. BUT I had a great time. Before I knew it, I had been in class/programming for eleven hours and felt like I was at a good place to take a mental health break. I think lots of folks struggle with imposters syndrome, especially when completely pivoting out of their current fields of work, and I am absolutely no exception. Being able to jump right back into learning and know what was being talked about, and able to engage and work with others once lecture was over was invigorating. I'm stoked to be in this class, and am grateful for the folks who helped get me here. "
