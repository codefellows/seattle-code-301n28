import React from 'react';
import './App.css';
import { Form, Button, Container } from 'react-bootstrap'

// THIS IS NOT A HABIT I WANT YOU TO GET INTO
// THIS IS NOT VERY "REACT LIKE"
// PLEASE DO NOT STORE GLOBAL VARS THIS WAY
// USE STATE 
const allNumerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'user',
      activity: '',
      animal: '',
      numerals: allNumerals
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("submitted");
  };

  handleUsername = event => {
    event.preventDefault();
    if (event.target.value.length > 0) {
      this.setState({ user: event.target.value });
    } else {
      this.setState({ user: 'user'});
    };
  };

  handleNameChange = (e) => this.setState({ user: e.target.value });
  handleActivityChange = e => this.setState({ activity: e.target.value }); 
  choosePet = e => this.setState({ animal: e.target.value }); 

  handleNumerals = event => {
    const selection = event.target.value;
    let updatedNumerals;

    if (selection === 'odds') {
      updatedNumerals = allNumerals.filter(num => num % 2 === 1);
      this.setState({ numerals: updatedNumerals });
    } else if (selection === 'evens') {
      updatedNumerals = allNumerals.filter(num => num % 2 === 0);
      this.setState({ numerals: updatedNumerals });
    } else {
      this.setState({ numerals: allNumerals });
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>Forms Demo!</h1>
        <h2>My Numerals: {this.state.numerals}</h2>

        <Form>
          <Form.Group>
            <Form.Label>Do you want Evens or Odds?</Form.Label>
            <Form.Select onChange={this.handleNumerals}>
              <option value="none">All Numerals</option>
              <option value="evens">Even Numerals</option>
              <option value="odds">Odd Numerals</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <h2>Welcome {this.state.user}!</h2>
        <h3>My fav activity is {this.state.activity}</h3>
        <h3>I am a {this.state.animal} parent!</h3>

        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='name'>Name</label>
          <input type="text" name="name" onChange={this.handleUsername} />
          <br />
          <label htmlFor='dob'>Date of Birth</label>
          <input type="date" name="dob" />
          <br />
          <input type="submit" />
        </form>

        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your name..." 
                onChange={this.handleNameChange}
              />
            </Form.Group>

            <Form.Group controlId="favoriteActivity">
              <Form.Label>What is your favorite activity?</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your fav activity..." 
                onChange={this.handleActivityChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>What kind of pet parent are you?</Form.Label>
              <Form.Control 
                as="select"
                onChange={this.choosePet}
              >
                <option>Choose One!</option>
                <option>Cat</option>
                <option>Dog</option>
                <option>Squirrel</option>
                <option>Bird</option>
                <option>Pig</option>
                <option>Ferret</option>
                <option>Peacock</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Container>
    </div>
  );
}
}

export default App;
