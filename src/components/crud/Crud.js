import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import List from "./List";
import Create from "./Create";
import Edit from "./Edit";

class Crud extends Component {
    static propTypes = {
        mainTitle: PropTypes.string.isRequired,
        secondaryTitle: PropTypes.string.isRequired,
        fields: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            isEditLink: PropTypes.bool,
        })),
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        permissions: PropTypes.shape({
            canCreate: PropTypes.bool,
            canEdit: PropTypes.bool,
            canDelete: PropTypes.bool,
        }).isRequired,
        routes: PropTypes.shape({
            list: PropTypes.string.isRequired,
            create: PropTypes.string,
            edit: PropTypes.string,
        }).isRequired,
        onCreate: PropTypes.func,
        onEdit: PropTypes.func,
        fetchEntity: PropTypes.func,
        entity: PropTypes.object,
        properties: PropTypes.object,
    };

    _getList() {
        return <List {...this.props}/>
    }

    _getCreate(listRoute) {
        const props = {
            listRoute,
            onSave: this.props.onCreate,
            ...this.props
        };
        return <Create {...props}/>;
    }

    _getEdit(listRoute) {
        const props = {
            listRoute,
            onSave: this.props.onEdit,
            ...this.props
        };
        return <Edit {...props}/>
    }

    render() {
        let listRoute = this.props.routes.list;
        if (listRoute.toString().endsWith("/")) {
            listRoute = listRoute.toString().substr(0, listRoute.length - 1);
        }

        const routes = {
            create: listRoute + "/new",
            edit: listRoute + "/:id/edit",
            ...this.props.routes
        };

        let result = <div>None</div>;

        switch (this.props.match.path) {
            case routes.create:
                result = this._getCreate(routes.list);
                break;
            case routes.edit:
                result = this._getEdit(routes.list);
                break;
            case listRoute:
            default:
                result = this._getList();
        }

        return result;
    }
}

export default withRouter(Crud);