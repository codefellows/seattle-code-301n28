import React from 'react';
import './App.css';
import { withAuth0 } from "@auth0/auth0-react";
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Can o' Books Auth Demo</h1>
        {this.props.auth0.isAuthenticated ? 
        <>
          <Profile />
          <Content /> 
          <Logout /> 
        </>
        :
        <Login />
        }
      </div>
    );
  }
}

export default withAuth0(App);
