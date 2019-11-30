import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { Authenticator } from 'aws-amplify-react';
import {federated} from '../../FedConfig';

class SignIn extends Component {

    render() {
        if(this.props.user) {
                return(<Redirect to="/" />);
            } else {
                return(<Authenticator federated={federated}/>);
            }
    }
}

export default SignIn;