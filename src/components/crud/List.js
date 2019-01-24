import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Layout, Row, Table} from "../layout";
import {Route} from 'react-router-dom'

class List extends Component {
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
        onCellClick: PropTypes.func
    };

    render() {
        var listRoute = this.props.routes.list;
        if (listRoute.toString().endsWith("/")) {
            listRoute = listRoute.toString().substr(0, listRoute.length - 1);
        }

        const routes = {
            create: listRoute + "/new",
            edit: listRoute + "/:id/edit",
            ...this.props.routes
        };
        const Button =
            <Route render={({history}) => (
                <button
                    type='button'
                    onClick={() => {
                        history.push(routes.create)
                    }}
                    className={"btn btn-success btn-lg"}
                >
                    Create
                </button>
            )}/>;


        const rowContent = <div>
            <Table
                fields={this.props.fields}
                data={this.props.data}
                permissions={this.props.permissions}
                routes={routes}
                onCellClick={this.props.onCellClick}
            />
            {this.props.permissions.canCreate && Button}
        </div>;
        const row = <Row
            title={this.props.secondaryTitle}
            content={rowContent}
        />;
        return (
            <Layout
                pageTitle={this.props.mainTitle}
                content={row}
            />
        );
    }
}

export default List;