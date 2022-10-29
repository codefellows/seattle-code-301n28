import React from 'react';

class Snacks extends React.Component {
  render() {
    return (
      <>
        {this.props.snacks.map(snack => (
          <Snack
            snack={snack}
            deleteSnack={this.props.deleteSnack}
          />
        ))}
      </>
    )
  }
}

class Snack extends React.Component {
  render() {
    const snackItem = this.props.snack;
    return(
      <div key={snackItem._id}>
        <h3>{snackItem.name}</h3>
        <p>{snackItem.description}</p>
        <button onClick={() => this.props.deleteSnack(snackItem._id)} >Eat this Snack!</button>
      </div>
    )
  }
}

export default Snacks;
