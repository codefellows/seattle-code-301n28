import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: []
    }
  }

  getFood = async () => {
    const url = `${process.env.REACT_APP_SERVER}/shopping-list?bananas=food`;
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({ shoppingList: response.data });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getFood}>Get Food List</button>
        
        <h2>Food list goes here...</h2>

        <ul>
          {this.state.shoppingList.map((item, idx) => (
            <li key={idx}>
              <p>My Items: </p>
              <p>{item.name}: {item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;