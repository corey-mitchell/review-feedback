// Import dependencies
import React, { Component } from 'react';

// Import components
import Navbar from './components/Navbar';
import Main from './components/Main';
import HomePage from './components/pages/HomePage';
import EmployeePage from './components/pages/EmployeePage';
import AdminPage from './components/pages/AdminPage';

class App extends Component {
  // Creating State
  state = {
    user: ''
  };

  // Function for setting user state to empty string to go back to home page
  openHomePage = () => {
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
          return <EmployeePage />

        case 'Admin':
          return <AdminPage />
      
        default:
          return <HomePage openEmployeePage={this.openEmployeePage} openAdminPage={this.openAdminPage}/>
      }
    };

    // Returns App
    return (
      <div className="App">
        {/* Render Navbar */}
        <Navbar openHomePage={this.openHomePage}/>

        {/* Render Component for housing User Components */}
        <Main>
          {componentSwitcher()}
        </Main>
      </div>
    );
  }
}

// Exports App
export default App;
