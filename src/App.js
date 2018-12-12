import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        
        <div className="container App-contentPane" >
        <nav className="navbar App-header">
          <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" alt="Animal Points"/>
            Animal Points
          </a>
        </nav>
        hello
        </div>
      </div>
    );
  }
}

export default App;
