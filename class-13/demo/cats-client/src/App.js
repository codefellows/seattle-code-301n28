import React from 'react';
import './App.css';
import axios from 'axios';
import AddACatForm from './AddACatForm';
import Button from 'react-bootstrap/Button';
import UpdateACatForm from './UpdateACatForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      showNewCatForm: false,
      errorMessage: '',
      selectedCat: {},
      show: false
    }
  }

  componentDidMount = async () => {
    console.log("hello!")
    const config = {
      method: 'get', // get is the default
      baseURL: 'http://localhost:3001',
      url: '/cats' // endpoint
    }

    const response = await axios(config);
    console.log('DATA: ', response.data);
    this.setState({ cats: response.data });
  }

  handleCreateCat = async (catToBeCreated) => {
    try {
      const config = {
        method: 'post',
        baseURL: 'http://localhost:3001',
        url: '/cats',
        data: catToBeCreated // 'data' is the data to be sent on the request.body
      }

      const response = await axios(config);
      this.setState({ cats: [...this.state.cats, response.data] });
    } catch(error) {
      console.error('Error is in the App.js in the createCat Function: ', error);
      // axios sends more info about the error in a response object on the error
      this.setState({ errorMessage: `Status Code ${error.response.status}: ${error.response.data}`});
    }
  }

  handleDeleteCat = async (catToBeDeleted) => {
    try {
      const proceed = window.confirm(`Do you wish to delete ${catToBeDeleted.name}?`);

      if (proceed) {
        const config = {
          method: 'delete',
          baseURL: 'http://localhost:3001',
          url: `/cats/${catToBeDeleted._id}`
        }

        const response = await axios(config);
        console.log(response.data);
        const newCatsArr = this.state.cats.filter(cat => cat._id !== catToBeDeleted._id);
        this.setState({ cats: newCatsArr });
      }
    } catch(error) {
      console.error('Error is in the App.js in the deleteCat Function: ', error);
      // axios sends more info about the error in a response object on the error
      this.setState({ errorMessage: `Status Code ${error.response.status}: ${error.response.data}`});
    }
  }

  handleUpdateCat = async (catToBeUpdated) => {
    try {
        const config = {
          method: 'put',
          baseURL: 'http://localhost:3001',
          url: `/cats/${catToBeUpdated._id}`
        }

        const response = await axios(config);
        console.log(response.data);
        const updatedCats = this.state.cats.map(preExistingCat => {
          if (preExistingCat._id === catToBeUpdated._id) {
            return catToBeUpdated;
          } else {
            return preExistingCat;
          }
        })
        this.setState({ cats: updatedCats });
    } catch(error) {
      console.error('Error is in the App.js in the updateCat Function: ', error);
      // axios sends more info about the error in a response object on the error
      this.setState({ errorMessage: `Status Code ${error.response.status}: ${error.response.data}`});
    }
  }

  showForm = () => this.setState({ showNewCatForm: true });
  handleSelectCat = (catToBeSelected) => this.setState({ selectedCat: catToBeSelected, show: true });
  handleOnHide = () => this.setState({ selectedCat: {}, show: false })

  render() {
    return (
      <div className="App">
        <h1>Cats Demo!</h1>

        <Button onClick={this.showForm}>Add a New Cat!</Button>

        {this.state.showNewCatForm && 
          <AddACatForm 
            handleCreateCat={this.handleCreateCat}
          /> }

        {this.state.selectedCat.name && 
          <UpdateACatForm
            handleUpdateCat={this.handleUpdateCat}
            selectedCat={this.state.selectedCat}
            show={this.state.show}
            handleOnHide={this.handleOnHide}
          />}

        {!this.state.errorMessage ? this.state.cats.map(cat => (
          <div key={cat._id}>
            <h2>{cat.name}</h2>
            <p>This cat lives in {cat.location}</p>
            <p>this cat is {cat.color} colored</p>
            <Button onClick={() => this.handleDeleteCat(cat)}>Delete this cat!</Button>
            <Button onClick={() => this.handleSelectCat(cat)}>Update this cat!</Button>
          </div>
        ))
      :
        <h2>{this.state.errorMessage}</h2>
      }


      </div>
    );
  }
}

export default App;
