// Import dependencies
import React, { Component } from 'react';

// Import components
import Navbar from './components/Navbar';
import Main from './components/Main';
import Landing from './components/Landing';

class App extends Component {
  // Creating State
  state = {
    user: ''
  };

  // Render App
  render() {
    const componentSwitcher = () => {
      switch (this.state.user) {
        case 'Employee':
          
          break;

        case 'Admin':

          break;
      
        default:
          return <Landing />
      }
    };

    return (
      <div className="App">
        {/* Render Navbar */}
        <Navbar />

        {/* Render Main Component */}
        <Main>
          {componentSwitcher()}
        </Main>
      </div>
    );
  }
}

export default App;
