import React, {Component} from "react";
import {compose} from "redux";
import withAuthorization from "../withAuthorization";
import {connect} from "react-redux";
import {users} from '../../actions';
import Crud from "../crud/Crud";
import {routes} from "../../constants"
import {withRouter} from "react-router-dom";

class UsersPage extends Component {
    componentWillMount() {
        this.props.fetchAll();
    }

    render() {
        const fields = [
            // {name: "id", title: "id", isEditLink: true},
            {name: "email", title: "Email", isEditLink: true},
            {name: "username", title: "Name", isEditLink: true},
        ];
        const permissions = {
            canCreate: true,
            canEdit: true,
            canDelete: true,
        };
        const properties = {
            id: {type: "hidden"},
            email: {label: "email", type: "text", required: true},
            username: {label: "Name", type: "text", required: true}
        };
        if (this.props.item) {
            this.props.item.id = this.props.match.params.id;
        }

        return (
            <Crud
                mainTitle={"Users"}
                secondaryTitle={"Users"}
                data={this.props.items}
                fields={fields}
                properties={properties}
                entity={this.props.item}
                permissions={permissions}
                routes={{
                    list: routes.USERS,
                }}
                onCreate={(item) => {
                    this.props.create(item);
                }}
                onEdit={(item) => {
                    this.props.save(item.id, item);
                }}
                fetchEntity={(id) => {
                    this.props.fetch(id);
                }}
            />
        );
    }
}

const authCondition = (authUser) => !!authUser;

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
    items: state.userState.users,
    item: state.userState.currentUser,
});

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps, {
        fetchAll: users.fetchAll,
        fetch: users.fetch,
        save: users.save,
        create: users.create,
    })
)(withRouter(UsersPage));