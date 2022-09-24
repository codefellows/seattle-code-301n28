// DONE: Create a Parent component
// DONE: Create a Child component that the Parent renders
  // the child is going to ask the Parent for money
  // create buttons to ask the parent for $10 and $20
// DONE: The parent component will manage the amount of money being held
  // when the child asks for money, we have to "lift state" with the amount of money being requested so that the parent can then update the state of the amount of money she currently has
// TODO: Create an Overdraft Modal
  // this modal will pop up when Parent has run out of money to give the child
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Parent from './Parent';
import OverdraftModal from './OverdraftModal'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverdraftWarning: false
    }
  }

  handleCloseModal = () => {
    this.setState({ showOverdraftWarning: false });
  }

  handleShowModal = () => {
    this.setState({ showOverdraftWarning: true })
  }

  render() {
    return (
      <div className="App">
        <h1>Passing Functions Demo</h1>
        <Parent 
          handleShowModal={this.handleShowModal}
        />
        <OverdraftModal 
          show={this.state.showOverdraftWarning}
          handleClose={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default App;
