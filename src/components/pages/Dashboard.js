import React, { Component } from 'react';
import { Layout } from "../layout";
import withAuthorization from '../withAuthorization';
import { connect } from "react-redux";
import { compose } from "redux";
import { users } from "../../actions";

class Dashboard extends Component {
    componentWillMount() {
        if (this.props.authUser && !this.props.currentUser) {
            // this.props.fetchUser(this.props.authUser.uid);
        }
    }
    render() {
        return (
            <Layout
                pageTitle={"Dashboard"}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
    currentUser: state.userState.currentUser
});

const mapDispatchToProps = {
    // fetchUser: users.fetch
};

const authCondition = (authUser) => !!authUser;

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);