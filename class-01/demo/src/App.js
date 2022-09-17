import React from 'react';
import './App.css';
import Header from './Header';
import Snack from './Snack';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Snack 
          title={'Sunflower Seeds'}
          description={'BBQ Flavored, bc what else is there?'}
        />
        <Snack 
          title={'Kettle Corn'}
          description={'Sweet and Salty'}
        />
        <Snack 
          title={'Jalepeno Puffs'}
          description={'crunchy and spicy'}
        />
        <Snack 
          title={'Chocolate Tacos'}
          description={'Chocolatey and tacoy'}
        />
      </div>
    );
  }
}

export default App;
