import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};

class LoginPage extends Component {

    componentDidMount() {
        document.body.classList.toggle('login', true)
    }

    componentWillUnmount() {
        document.body.classList.remove('login')
    }

    render() {
        return (
            <div className="login_wrapper">
                <div className="animate form login_form">
                    <section className="login_content">
                        <form onSubmit={this.onSubmit}>
                            <h1>Login Form</h1>
                            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>

                        </form>
                    </section>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginPage);