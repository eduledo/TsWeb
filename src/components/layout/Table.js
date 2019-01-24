import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";

class Table extends Component {
    static propTypes = {
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
    };

    _renderCell(key, item, isEditLink) {
        if (isEditLink === true) {
            return <td key={key}>
                <Link to={this.props.routes.edit.replace(":id", item.id)}>{item[key]}</Link>
            </td>
        }

        return <td key={`${item.id}-${key}`}>{item[key]}</td>;
    }

    render() {
        const {fields, data} = this.props;
        return <table className="table table-striped">
            <thead>
            <tr>
                {fields.map(item => <th key={item.name}>{item.title}</th>)}
            </tr>
            </thead>
            <tbody>
            {data.map(item => {
                const td = fields.map(item0 =>
                    this._renderCell(item0.name, item, item0.isEditLink)
                );
                return <tr key={item.id}>{td}</tr>;
            })}
            </tbody>
        </table>;
    }
}

export default withRouter(Table);