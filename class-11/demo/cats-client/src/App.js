import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  componentDidMount = async () => {
    const config = {
      method: 'get', // get is the default
      baseURL: 'http://localhost:3001',
      url: '/cats' // endpoint
    }

    const response = await axios(config);
    console.log('DATA: ', response.data);
    this.setState({ cats: response.data });
  }

  render() {
    return (
      <div className="App">
        <h1>Cats Demo!</h1>
        {this.state.cats.map(cat => (
          <div key={cat._id}>
            <h2>{cat.name}</h2>
            <p>This cat lives in {cat.location}</p>
            <p>this cat is {cat.color} colored</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
