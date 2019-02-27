import { Authenticator } from 'aws-amplify-react';
import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';

import home from './components/pages/home';
import Header from './components/Header';
import about from './components/pages/about';
import profile from './components/pages/profile';
import settings from './components/pages/settings';


class App extends Component {

  constructor(props) {
    super(props);
    
    this.onHubCapsule = this.onHubCapsule.bind(this);
    Hub.listen('auth', this);
    this.state = {user: null}
  }

  componentDidMount() {
    Auth.currentUserInfo()
    .then((value) => {
        this.setState({user: value})
    });
}

  onHubCapsule(capsule) {
    console.log("Here")
    // The Auth module will emit events when user signs in, signs out, etc
    const { channel, payload} = capsule;
    if (channel === 'auth') {
        switch (payload.event) {
          case 'signIn':
              Auth.currentUserInfo()
                .then((value) => {
                  this.setState({user: value})
                });
              History.push("")
              break;
            case 'signOut':
                this.setState({user: null})
                History.push("")
                break;
            default:
                break;
        }
    }
}

render() {
  return (
    <div>
      <Header user={this.state.user}/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route path='/signin' component={Authenticator}/>
          <Route path='/about' component={about}/>
          <Route path='/profile' component={profile}/>
          <Route path='/settings' component={settings}/>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
