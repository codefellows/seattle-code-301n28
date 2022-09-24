import React from 'react';
import Child from './Child';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import mom from './assets/mom.jpg';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 100,
      billysMoney: 0
    }
  }

  giveMoneyToBilly = (dollars) => {
    // because React takes too long to return with the updated value of money in state, we have to use the parentBalance variable to hold that value and use it in our if conditional
    const parentBalance = this.state.money - dollars;

    this.setState({
      billysMoney: this.state.billysMoney + dollars,
      money: parentBalance
    });

    if (parentBalance <= 0) {
      this.props.handleShowModal();
    }
  }

  render() {
    return (
      <Container>
        <CardGroup>
          <Card>
            <Card.Img
              src={mom}
              alt="I am the mom!"
              style={{ width: '18rem' }}
            />
            <Card.Title>I am the Parent and I have ${this.state.money} dollars!</Card.Title>
          </Card>

          <Child
            billysMoney={this.state.billysMoney}
            giveMoneyToBilly={this.giveMoneyToBilly}
          />

        </CardGroup>
      </Container>
    )
  }
}

export default Parent;