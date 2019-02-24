import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            <div className="navbar-nav">        

              <a className="navbar-brand" href="/">Animal Points</a>
              <a className="nav-item nav-link" href="#home">Home</a>
              <a className="nav-item nav-link" href="#teams">Teams</a>
              <a className="nav-item nav-link" href="#help">Help</a>
              <div className="dropdown">
                {/*eslint-disable-next-line*/}
                <a className="nav-item nav-link dropdown-toggle" 
                data-toggle="dropdown" id="userDropdown"
                aria-haspopup="true" aria-expanded="false"
                href="#">User</a>
                <div className="dropdown-menu" aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="#userProfile">Profile</a>
                  <a className="dropdown-item" href="#userSettings">Settings</a>
                  <a className="dropdown-item" href="#userLogOut">Log Out</a>
                </div>
              </div>
            </div>  
          </div>
        </nav> {/*Navbar*/}
        <div className="container App-contentPane" >
            hello
        </div>
      </div>
    );
  }
}

export default App;
