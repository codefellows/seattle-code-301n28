import React from 'react'
import './App.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Photos from './Photos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      photos: []
    }
  }

  updateSearchQuery = (event) => this.setState({ searchQuery: event.target.value });

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = `${process.env.REACT_APP_SERVER}/photo?searchQuery=${this.state.searchQuery}`;
      console.log("URL: ", url);
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({ photos: response.data });
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
      <h1>My Wonderful Photo App!</h1>

      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Find photos about...</Form.Label>
            <Form.Control 
              type="text"
              placeholder="enter a search term here..."
              onChange={this.updateSearchQuery}
              />
          </Form.Group>
        </Form>
      </Container>

      <Photos 
        photos={this.state.photos}
      />
    </div>
  );
}
}

export default App;
