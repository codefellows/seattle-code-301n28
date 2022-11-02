import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class UpdateACatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.selectedCat?._id,
      name: this.props.selectedCat?.name,
      color: this.props.selectedCat?.color,
      location: this.props.selectedCat?.location,
      hasClaws: this.props.selectedCat?.hasClaws
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('this.state: ', this.state);
    // DONE: we want to pass our updated cat back up to App so that App can call the server with the newly updated info
    this.props.handleUpdateCat(this.state);
    this.props.handleOnHide();
  }

  handleNameChange = event => this.setState({ name: event.target.value });
  handleColorChange = event => this.setState({ color: event.target.value });
  handleLocationChange = event => this.setState({ location: event.target.value });
  handleClawChange = event => this.setState({ hasClaws: event.target.checked });

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleOnHide} >
        <Modal.Header closeButton>
          <Modal.Title>Update a Cat!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>

            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.state.name}
                  onChange={this.handleNameChange}
                  value={this.state.name}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.state.color}
                  value={this.state.color}
                  onChange={this.handleColorChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.state.location}
                  value={this.state.location}
                  onChange={this.handleLocationChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Has Claws"
                  onChange={this.handleClawChange}
                  checked={this.state.hasClaws}
                />
              </Form.Group>

              <Button type='submit'>Submit</Button>

            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    )
  }
}

export default UpdateACatForm;
