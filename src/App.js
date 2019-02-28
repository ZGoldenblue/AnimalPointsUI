
import React, { Component } from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';

import home from './components/pages/home';
import Header from './components/Header';
import about from './components/pages/about';
import profile from './components/pages/profile';
import settings from './components/pages/settings';
import signout from './components/pages/signout';
import signin from './components/pages/signin';

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
        console.log(value)
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
          <Route exact path='/' component={home}/>
          <Route path='/signin' render={() => <signin user={this.state.user}/>}/>
          <Route path='/about' component={about}/>
          <Route path='/profile' component={profile}/>
          <Route path='/settings' component={settings}/>
          <Route path='/signout' component={signout}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
