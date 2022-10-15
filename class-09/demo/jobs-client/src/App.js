import React from 'react';
import './App.css';
import axios from 'axios';
import Jobs from './Jobs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
  }

  // this function MUST be called componenetDidMount - it is NOT bananas
  componentDidMount = async () => {
    const url = `http://localhost:3001/jobs`;
    const jobsResponse = await axios.get(url);
    this.setState({ jobs: jobsResponse.data });
  }

  render() {
    return (
      <div className="App">
        <h1>Jobs Board!</h1>
        <Jobs 
          jobs={this.state.jobs}
        />
      </div>
    );
  }
}

export default App;
