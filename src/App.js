import React, { Component } from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';

import Home from './components/pages/Home';
import Header from './components/Header';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import SignOut from './components/pages/SignOut';
import SignIn from './components/pages/SignIn';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.onHubCapsule = this.onHubCapsule.bind(this);
    Hub.listen('auth', this);
    this.state = {user: null}
  }

  componentDidMount() {
    console.log();
    Auth.currentUserInfo()
    .then((value) => {
        this.setState({user: value})
    });
}

  onHubCapsule(capsule) {
    console.log(capsule)
    // The Auth module will emit events when user signs in, signs out, etc
    const { channel, payload} = capsule;
    if (channel === 'auth') {
        switch (payload.event) {
          case 'signIn':
              this.setState({user: payload.data})
              break;
            case 'signOut':
                this.setState({user: null})
                break;
            default:
                break;
        }
    }
}

render() {
  return (
      <BrowserRouter>
        <div>
          <Route children={<Header user={this.state.user}/>}/>
          <Route exact path='/' component={Home}/>
          <Route path='/signin' render={() => (<SignIn user={this.state.user}/>)}/>
          <Route path='/about' component={About}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/signout' component={SignOut}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
