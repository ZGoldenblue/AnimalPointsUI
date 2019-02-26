import { Authenticator } from 'aws-amplify-react';
import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import home from './components/pages/home';
import Header from './components/Header';


class App extends Component {
render() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route path='/signin' component={Authenticator}/>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
