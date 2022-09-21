import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Snack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: "Nay!"
    }
  }

  handleClick = () => {
    if (this.state.favorites === 'Nay!') {
      this.setState({favorites: 'Yay!'});
    } else {
      this.setState({favorites: 'Nay!'});
    };
  };

  render() {
    return (
      <Container>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>Favorites: {this.state.favorites}</Card.Text>
          </Card.Body>
          <Card.Img 
            variant="top" 
            src={this.props.imageURL} 
            alt={this.props.description} 
            title={this.props.title} 
            onClick={this.handleClick}
          />
        </Card>
      </Container>
    )
  }
}

export default Snack;


