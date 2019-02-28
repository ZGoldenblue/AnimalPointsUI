import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { Authenticator } from 'aws-amplify-react';

class signin extends Component {

    render() {
        if(this.props.user) {
                return(<Redirect to="/" />);
            } else {
                return(<Authenticator/>);
            }
    }
}

export default signin;