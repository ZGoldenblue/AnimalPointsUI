import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

class SignOut extends Component {

    render() {
        Auth.signOut();
        return (
            <Redirect to="/" />
        );
    }
}

export default SignOut;