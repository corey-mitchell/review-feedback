// Import dependencies
import React, { Component } from 'react';

// Import components
import Navbar from './components/Navbar';
import Main from './components/Main';
import Landing from './components/Landing';
import Employee from './components/Employee';
import Admin from './components/Admin';

class App extends Component {
  // Creating State
  state = {
    user: ''
  };

  // Function for setting user state to empty string to go back to landing page
  openLandingPage = () => {
    this.setState({user: ''})
  };

  // Function for setting user state to Employee
  openEmployeePage = () => {
    this.setState({user: 'Employee'})
  };

  // Function for setting user state to Admin
  openAdminPage = () => {
    this.setState({user: 'Admin'})
  };

  // Render App
  render() {
    // Function for swithing the component based upon user state
    const componentSwitcher = () => {
      switch (this.state.user) {
        case 'Employee':
          return <Employee />

        case 'Admin':
          return <Admin />
      
        default:
          return <Landing openEmployeePage={this.openEmployeePage} openAdminPage={this.openAdminPage}/>
      }
    };

    return (
      <div className="App">
        {/* Render Navbar */}
        <Navbar openLandingPage={this.openLandingPage}/>

        {/* Render Main Component */}
        <Main>
          {componentSwitcher()}
        </Main>
      </div>
    );
  }
}

export default App;
