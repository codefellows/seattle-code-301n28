import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';

class CreateSnack extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const newSnack = {
      name: event.target.formName.value,
      description: event.target.formDescription.value
    };
    // lift state to App.js to make API call to creat new Snack
    this.props.createSnack(newSnack);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>

          <Form.Group controlId='formName'>
            <Form.Label>Snack Name</Form.Label>
            <Form.Control 
              type="text"
              placeholder="what is your favorite snack?"
            />
          </Form.Group>

          <Form.Group controlId='formDescription'>
            <Form.Label>Snack Description</Form.Label>
            <Form.Control 
              type="text"
              placeholder="tell me about your favorite snack..."
            />
          </Form.Group>

          <Button type="submit">Create new snack!</Button>

        </Form>
      </Container>
    )
  }
}

export default CreateSnack;
