import React from 'react';
import './App.css';
import axios from 'axios';
import CreateSnack from './CreateSnack';
import Snacks from './Snacks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snacks: []
    }
  }

  componentDidMount = async () => {
    this.getSnacks();
  }

  getSnacks = async () => {
    const url = `${process.env.REACT_APP_SERVER}/snacks`;
    const response = await axios.get(url);
    this.setState({ snacks: response.data });
  }

  createSnack = async (newSnackObject) => {
    const config = {
      method: "post",
      baseURL: process.env.REACT_APP_SERVER,
      url: "/snacks",
      data: newSnackObject // axios sends "data" in the request.body
    }
    const response = await axios(config);
    console.log("New Snack from Mongo: ", response.data);
    this.getSnacks();
  }

  deleteSnack = async (snackID) => {
    const config = {
      method: "delete",
      baseURL: process.env.REACT_APP_SERVER,
      url: `/snacks/${snackID}`
    }
    const response = await axios(config);
    console.log("Deleted Snack from Mongo: ", response.data);
    this.getSnacks();
  }

  render() {
    return (
      <div className="App">
        <h1>My Favorite Snacks!</h1>
        <CreateSnack 
          createSnack={this.createSnack}
        />
        <Snacks 
          snacks={this.state.snacks}
          deleteSnack={this.deleteSnack}
        />
      </div>
    );
  }
}

export default App;
