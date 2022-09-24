import React from 'react';
import billy from './assets/teen.jpg';
import { Card, Button } from 'react-bootstrap';

class Child extends React.Component {

  askParentFor10Dollars = () => {
    // this function needs to 'lift state' up to the Parent component in order to subtract $10 from mom's money and give it to billy's money via state.
    this.props.giveMoneyToBilly(10);
  }

  askParentFor20Dollars = () => {
    // this function needs to 'lift state' up to the Parent component in order to subtract $20 from mom's money and give it to billy's money via state.
    this.props.giveMoneyToBilly(20);
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img
          src={billy}
          alt='I am the Billy!'
          style={{ width: '18rem' }}
        />
        <Card.Title>I am the Child and I have ${this.props.billysMoney} dollars!</Card.Title>
        <Button onClick={this.askParentFor10Dollars}>Ask Mom for $10</Button>
        <Button onClick={this.askParentFor20Dollars}>Ask Mom for $20</Button>
      </Card>
    )
  }
}

export default Child;